import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { createCanvas, ImageData } from "@napi-rs/canvas";
import fs from "fs";
import path from "path";

/* ================================================================
   HVTI DUAL-ASSET 3D PRODUCTION GENERATOR (V11 - 0.85x DEVICE SCALE)
   File: scripts/generate_helmet_detector_models.mjs

   Key Updates:
   1. Scaled device unit to 0.85x of previous size:
      - 74.8mm total width (w/ ears), 56.1mm height, 20.4mm depth.
   2. Positioned flush against helmet forehead dome at Y = 0.034m, Z = 0.116m (zero underside penetration).
   3. Matching 24mm wide tensioned black elastic webbing strap.
   4. Photo-accurate 3-ridge helmet shell and authentic 4-point internal suspension.
   5. Standalone unit with 0.85x scaled device and matching ribbon strap.
   ================================================================ */

// Polyfills
globalThis.Blob = globalThis.Blob;
globalThis.FileReader = class FileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result = buf;
      if (this.onloadend) this.onloadend({ target: this });
      if (this.onload) this.onload({ target: this });
    });
  }
  readAsDataURL(blob) {
    blob.arrayBuffer().then((buf) => {
      const base64 = Buffer.from(buf).toString("base64");
      this.result = `data:${blob.type || "image/png"};base64,${base64}`;
      if (this.onloadend) this.onloadend({ target: this });
      if (this.onload) this.onload({ target: this });
    });
  }
};
globalThis.ImageData = ImageData;
globalThis.document = {
  createElement: (tag) => {
    if (tag === "canvas") {
      const c = createCanvas(1, 1);
      c.toBlob = function (cb, type = "image/png") {
        const buf = c.toBuffer(type === "image/jpeg" ? "image/jpeg" : "image/png");
        cb(new Blob([buf], { type }));
      };
      return c;
    }
    return {};
  },
};

// Physical Dimensions of the Detector Housing (Unscaled base)
const W = 0.088; // 88mm total width
const W_body = 0.068; // 68mm main octagonal body width
const H = 0.066; // 66mm height
const D = 0.024; // 24mm depth
const C = 0.014; // 14mm Chamfer

// Front Panel Dimensions
const pW = W_body - 0.004; // 64mm
const pH = H - 0.005; // 61mm
const pC = C - 0.003; // 11mm

// Texture Resolution
const TEX_WIDTH = 2048;
const TEX_HEIGHT = 1536;

function toCanvasX(x3d) {
  return ((x3d + pW / 2) / pW) * TEX_WIDTH;
}
function toCanvasY(y3d) {
  return ((pH / 2 - y3d) / pH) * TEX_HEIGHT;
}

/* ================================================================
   1. HIGH-RESOLUTION FRONT DECAL TEXTURE GENERATION
   ================================================================ */
function generateFrontDecalTexture() {
  const canvas = createCanvas(TEX_WIDTH, TEX_HEIGHT);
  const ctx = canvas.getContext("2d");

  // Chartreuse Safety Yellow ABS Background (#E2EE25)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, TEX_HEIGHT);
  bgGrad.addColorStop(0, "#E8F42A");
  bgGrad.addColorStop(0.5, "#E2EE25");
  bgGrad.addColorStop(1, "#D4E01C");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, TEX_WIDTH, TEX_HEIGHT);

  ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
  for (let i = 0; i < 6000; i++) {
    const rx = Math.random() * TEX_WIDTH;
    const ry = Math.random() * TEX_HEIGHT;
    ctx.fillRect(rx, ry, 2, 2);
  }

  // Rounded Inner Panel Fillet Border
  const inset = 36;
  const cCorner = 140;

  ctx.strokeStyle = "rgba(0, 0, 0, 0.14)";
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(inset + cCorner, inset);
  ctx.lineTo(TEX_WIDTH - inset - cCorner, inset);
  ctx.lineTo(TEX_WIDTH - inset, inset + cCorner);
  ctx.lineTo(TEX_WIDTH - inset, TEX_HEIGHT - inset - cCorner);
  ctx.lineTo(TEX_WIDTH - inset - cCorner, TEX_HEIGHT - inset);
  ctx.lineTo(inset + cCorner, TEX_HEIGHT - inset);
  ctx.lineTo(inset, TEX_HEIGHT - inset - cCorner);
  ctx.lineTo(inset, inset + cCorner);
  ctx.closePath();
  ctx.stroke();

  ctx.strokeStyle = "rgba(255, 255, 255, 0.40)";
  ctx.lineWidth = 6;
  ctx.stroke();

  // Top Power Section (I/O)
  const pBtnX = toCanvasX(0);
  const pBtnY = toCanvasY(0.0125);

  const ioLabelW = 380;
  const ioLabelH = 155;
  const ioLabelY = 155;

  ctx.fillStyle = "#F5FF80";
  ctx.fillRect(pBtnX - ioLabelW / 2, ioLabelY - ioLabelH / 2, ioLabelW, ioLabelH);

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 5;
  ctx.strokeRect(pBtnX - ioLabelW / 2, ioLabelY - ioLabelH / 2, ioLabelW, ioLabelH);

  ctx.fillStyle = "#000000";
  ctx.font = "900 130px 'Times New Roman', 'Liberation Serif', Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("I/O", pBtnX, ioLabelY + 4);

  ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(pBtnX, pBtnY, 150, 0, Math.PI * 2);
  ctx.stroke();

  // Middle Row: 3 LEDs & ALRM RDY ALRM Label Strip
  const ledY = toCanvasY(-0.0020);
  const ledLeftX = toCanvasX(-0.020);
  const ledCenterX = toCanvasX(0.0);
  const ledRightX = toCanvasX(0.020);

  [
    { x: ledLeftX, y: ledY, color: "rgba(255, 90, 0, 0.40)", r: 155 },
    { x: ledCenterX, y: ledY, color: "rgba(255, 45, 0, 0.35)", r: 150 },
    { x: ledRightX, y: ledY, color: "rgba(255, 90, 0, 0.40)", r: 155 },
  ].forEach((g) => {
    const radGrad = ctx.createRadialGradient(g.x, g.y, 40, g.x, g.y, g.r);
    radGrad.addColorStop(0, g.color);
    radGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = radGrad;
    ctx.beginPath();
    ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
    ctx.fill();
  });

  const stripW = 1620;
  const stripH = 140;
  const stripY = ledY + 165;

  ctx.fillStyle = "#EDF868";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.30)";
  ctx.lineWidth = 3;
  ctx.fillRect(TEX_WIDTH / 2 - stripW / 2, stripY - stripH / 2, stripW, stripH);
  ctx.strokeRect(TEX_WIDTH / 2 - stripW / 2, stripY - stripH / 2, stripW, stripH);

  ctx.fillStyle = "#000000";
  ctx.font = "bold 106px 'Times New Roman', 'Liberation Serif', Georgia, serif";
  ctx.fillText("ALRM", ledLeftX, stripY + 2);
  ctx.fillText("RDY", ledCenterX, stripY + 2);
  ctx.fillText("ALRM", ledRightX, stripY + 2);

  // Acoustic Buzzer Port
  const bzX = toCanvasX(0.020);
  const bzY = toCanvasY(-0.0135);
  const bzR = 14;
  const bzDist = 38;

  ctx.fillStyle = "#09090C";
  [
    { x: bzX, y: bzY - bzDist * 0.75 },
    { x: bzX - bzDist * 0.85, y: bzY + bzDist * 0.65 },
    { x: bzX + bzDist * 0.85, y: bzY + bzDist * 0.65 },
  ].forEach((pt) => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, bzR, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.beginPath();
  ctx.arc(bzX, bzY + 6, 7, 0, Math.PI * 2);
  ctx.fill();

  // Bottom Row: CHRG Label Strip on Left + Charging LED on Right
  const chrgLabelX = toCanvasX(-0.007);
  const chrgLabelY = toCanvasY(-0.0210);
  const chrgLedX = toCanvasX(0.016);
  const chrgLedY = toCanvasY(-0.0210);

  const chrgW = 540;
  const chrgH = 140;

  ctx.fillStyle = "#EDF868";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.30)";
  ctx.lineWidth = 3;
  ctx.fillRect(chrgLabelX - chrgW / 2, chrgLabelY - chrgH / 2, chrgW, chrgH);
  ctx.strokeRect(chrgLabelX - chrgW / 2, chrgLabelY - chrgH / 2, chrgW, chrgH);

  ctx.fillStyle = "#000000";
  ctx.font = "bold 106px 'Times New Roman', 'Liberation Serif', Georgia, serif";
  ctx.fillText("CHRG", chrgLabelX, chrgLabelY + 2);

  const chrgGrad = ctx.createRadialGradient(chrgLedX, chrgLedY, 30, chrgLedX, chrgLedY, 160);
  chrgGrad.addColorStop(0, "rgba(255, 120, 0, 0.45)");
  chrgGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = chrgGrad;
  ctx.beginPath();
  ctx.arc(chrgLedX, chrgLedY, 160, 0, Math.PI * 2);
  ctx.fill();

  const imgData = ctx.getImageData(0, 0, TEX_WIDTH, TEX_HEIGHT);
  const texture = new THREE.DataTexture(
    new Uint8Array(imgData.data),
    TEX_WIDTH,
    TEX_HEIGHT,
    THREE.RGBAFormat
  );
  texture.needsUpdate = true;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/* ================================================================
   2. PBR MATERIALS
   ================================================================ */
function createMaterials(frontDecalTexture) {
  const yellowAbsMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#E2EE25"),
    roughness: 0.32,
    metalness: 0.02,
  });

  const frontFaceMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FFFFFF"),
    map: frontDecalTexture,
    roughness: 0.30,
    metalness: 0.02,
  });

  const blackRubberMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#18181A"),
    roughness: 0.85,
    metalness: 0.02,
  });

  const blackNylonMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1E2229"),
    roughness: 0.65,
    metalness: 0.05,
  });

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#E2E8F0"),
    roughness: 0.15,
    metalness: 0.90,
  });

  const redLedMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FF3B00"),
    emissive: new THREE.Color("#FF2200"),
    emissiveIntensity: 2.2,
    roughness: 0.10,
    metalness: 0.1,
  });

  const readyLedMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FF1E00"),
    emissive: new THREE.Color("#FF0000"),
    emissiveIntensity: 1.8,
    roughness: 0.10,
    metalness: 0.1,
  });

  const chargeLedMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FF8C00"),
    emissive: new THREE.Color("#FF6A00"),
    emissiveIntensity: 2.2,
    roughness: 0.10,
    metalness: 0.1,
  });

  const strapMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#141416"),
    roughness: 0.90,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });

  const helmetWhiteMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FAFAFC"),
    roughness: 0.18,
    metalness: 0.02,
    side: THREE.FrontSide,
  });

  const helmetInnerMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#F0F2F5"),
    roughness: 0.35,
    metalness: 0.02,
    side: THREE.FrontSide,
  });

  const suspensionDarkMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1E232A"),
    roughness: 0.65,
    metalness: 0.05,
    side: THREE.DoubleSide,
  });

  const suspensionWebbingMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#323842"),
    roughness: 0.90,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });

  const sweatbandMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#434A56"),
    roughness: 0.85,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });

  return {
    yellowAbsMaterial,
    frontFaceMaterial,
    blackRubberMaterial,
    blackNylonMaterial,
    chromeMaterial,
    redLedMaterial,
    readyLedMaterial,
    chargeLedMaterial,
    strapMaterial,
    helmetWhiteMaterial,
    helmetInnerMaterial,
    suspensionDarkMaterial,
    suspensionWebbingMaterial,
    sweatbandMaterial,
  };
}

/* ================================================================
   3. BUILD DETECTOR UNIT (0.85x SCALE APPLIED)
   ================================================================ */
function buildDetectorUnit(materials, scaleFactor = 0.85) {
  const detector = new THREE.Group();
  detector.name = "VoltageDetector_Unit";

  // --- A. Octagonal Chamfered Main Body ---
  const shape = new THREE.Shape();
  shape.moveTo(-W_body / 2 + C, H / 2);
  shape.lineTo(W_body / 2 - C, H / 2);
  shape.lineTo(W_body / 2, H / 2 - C);
  shape.lineTo(W_body / 2, -H / 2 + C);
  shape.lineTo(W_body / 2 - C, -H / 2);
  shape.lineTo(-W_body / 2 + C, -H / 2);
  shape.lineTo(-W_body / 2, -H / 2 + C);
  shape.lineTo(-W_body / 2, H / 2 - C);
  shape.closePath();

  const extrudeSettings = {
    steps: 1,
    depth: D - 0.004,
    bevelEnabled: true,
    bevelThickness: 0.002,
    bevelSize: 0.002,
    bevelSegments: 4,
  };

  const bodyGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  bodyGeo.center();
  const bodyMesh = new THREE.Mesh(bodyGeo, materials.yellowAbsMaterial);
  detector.add(bodyMesh);

  // --- B. Flank Ear Wings with Strap Slots ---
  const earWidth = 0.010;
  const earHeight = 0.052;
  const earThickness = 0.010;
  const slotWidth = 0.0035;
  const slotHeight = 0.032;

  function createEarLoop(isLeft) {
    const earGroup = new THREE.Group();
    const xBase = isLeft ? -W_body / 2 - earWidth / 2 + 0.001 : W_body / 2 + earWidth / 2 - 0.001;

    const earShape = new THREE.Shape();
    const ew = earWidth;
    const eh = earHeight;
    const ec = 0.004;

    earShape.moveTo(-ew / 2 + ec, eh / 2);
    earShape.lineTo(ew / 2 - ec, eh / 2);
    earShape.lineTo(ew / 2, eh / 2 - ec);
    earShape.lineTo(ew / 2, -eh / 2 + ec);
    earShape.lineTo(ew / 2 - ec, -eh / 2);
    earShape.lineTo(-ew / 2 + ec, -eh / 2);
    earShape.lineTo(-ew / 2, -eh / 2 + ec);
    earShape.lineTo(-ew / 2, eh / 2 - ec);
    earShape.closePath();

    const holePath = new THREE.Path();
    const hw = slotWidth;
    const hh = slotHeight;
    holePath.moveTo(-hw / 2, hh / 2);
    holePath.lineTo(hw / 2, hh / 2);
    holePath.lineTo(hw / 2, -hh / 2);
    holePath.lineTo(-hw / 2, -hh / 2);
    holePath.closePath();
    earShape.holes.push(holePath);

    const earExtrude = new THREE.ExtrudeGeometry(earShape, {
      depth: earThickness,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.0015,
      bevelThickness: 0.0015,
    });
    earExtrude.center();

    const earMesh = new THREE.Mesh(earExtrude, materials.yellowAbsMaterial);
    earMesh.position.set(xBase, 0, 0);
    earGroup.add(earMesh);

    return earGroup;
  }

  detector.add(createEarLoop(true));  // Left ear
  detector.add(createEarLoop(false)); // Right ear

  // --- C. Front Faceplate Panel with Decal ---
  const panelShape = new THREE.Shape();
  panelShape.moveTo(-pW / 2 + pC, pH / 2);
  panelShape.lineTo(pW / 2 - pC, pH / 2);
  panelShape.lineTo(pW / 2, pH / 2 - pC);
  panelShape.lineTo(pW / 2, -pH / 2 + pC);
  panelShape.lineTo(pW / 2 - pC, -pH / 2);
  panelShape.lineTo(-pW / 2 + pC, -pH / 2);
  panelShape.lineTo(-pW / 2, -pH / 2 + pC);
  panelShape.lineTo(-pW / 2, pH / 2 - pC);
  panelShape.closePath();

  const panelGeo = new THREE.ShapeGeometry(panelShape);

  const pos = panelGeo.attributes.position;
  const uvs = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i);
    const py = pos.getY(i);
    uvs[i * 2] = (px + pW / 2) / pW;
    uvs[i * 2 + 1] = (pH / 2 - py) / pH;
  }
  panelGeo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

  const panelMesh = new THREE.Mesh(panelGeo, materials.frontFaceMaterial);
  panelMesh.position.set(0, 0, D / 2 + 0.0003);
  detector.add(panelMesh);

  // --- D. Physical Hardware Controls on Front Face ---

  // 1. Power Button (Top Center: x = 0, y = +0.0125)
  const buttonGroup = new THREE.Group();
  buttonGroup.position.set(0, 0.0125, D / 2 + 0.0005);

  const buttonBezelGeo = new THREE.CylinderGeometry(0.0080, 0.0084, 0.0016, 32);
  buttonBezelGeo.rotateX(Math.PI / 2);
  const buttonBezel = new THREE.Mesh(buttonBezelGeo, materials.blackNylonMaterial);
  buttonGroup.add(buttonBezel);

  const buttonCoreGeo = new THREE.CylinderGeometry(0.0068, 0.0072, 0.0035, 32);
  buttonCoreGeo.rotateX(Math.PI / 2);
  const buttonCore = new THREE.Mesh(buttonCoreGeo, materials.blackRubberMaterial);
  buttonCore.position.z = 0.0012;
  buttonGroup.add(buttonCore);

  detector.add(buttonGroup);

  // 2. Three Center LEDs: ALRM (x = -0.020), RDY (x = 0), ALRM (x = +0.020) at y = -0.0020
  const ledPositions = [
    { x: -0.020, mat: materials.redLedMaterial },
    { x: 0.0, mat: materials.readyLedMaterial },
    { x: 0.020, mat: materials.redLedMaterial },
  ];

  ledPositions.forEach((led) => {
    const ledGroup = new THREE.Group();
    ledGroup.position.set(led.x, -0.0020, D / 2 + 0.0005);

    const bezelGeo = new THREE.CylinderGeometry(0.0044, 0.0048, 0.0018, 24);
    bezelGeo.rotateX(Math.PI / 2);
    const bezelMesh = new THREE.Mesh(bezelGeo, materials.chromeMaterial);
    ledGroup.add(bezelMesh);

    const domeGeo = new THREE.SphereGeometry(0.0034, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    domeGeo.rotateX(Math.PI / 2);
    const domeMesh = new THREE.Mesh(domeGeo, led.mat);
    domeMesh.position.z = 0.0008;
    ledGroup.add(domeMesh);

    detector.add(ledGroup);
  });

  // 3. Acoustic Buzzer Ports (3-dot Triangle under Right LED at x = +0.020, y = -0.0135)
  const bzPositions = [
    { x: 0.020, y: -0.0115 },
    { x: 0.017, y: -0.0155 },
    { x: 0.023, y: -0.0155 },
  ];

  bzPositions.forEach((pt) => {
    const bzHoleGeo = new THREE.CylinderGeometry(0.0011, 0.0011, 0.002, 16);
    bzHoleGeo.rotateX(Math.PI / 2);
    const bzHole = new THREE.Mesh(bzHoleGeo, materials.blackRubberMaterial);
    bzHole.position.set(pt.x, pt.y, D / 2 + 0.0005);
    detector.add(bzHole);
  });

  // 4. Charging Indicator LED (Bottom Right at x = +0.016, y = -0.0210)
  const chrgLedGroup = new THREE.Group();
  chrgLedGroup.position.set(0.016, -0.0210, D / 2 + 0.0005);

  const chrgBezelGeo = new THREE.CylinderGeometry(0.0038, 0.0042, 0.0018, 20);
  chrgBezelGeo.rotateX(Math.PI / 2);
  const chrgBezel = new THREE.Mesh(chrgBezelGeo, materials.chromeMaterial);
  chrgLedGroup.add(chrgBezel);

  const chrgDomeGeo = new THREE.SphereGeometry(0.0030, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  chrgDomeGeo.rotateX(Math.PI / 2);
  const chrgDome = new THREE.Mesh(chrgDomeGeo, materials.chargeLedMaterial);
  chrgDome.position.z = 0.0008;
  chrgLedGroup.add(chrgDome);

  detector.add(chrgLedGroup);

  // --- E. Bottom Recessed USB-C Port ---
  const usbGroup = new THREE.Group();
  usbGroup.position.set(0, -H / 2 - 0.0005, 0);

  const usbOuterGeo = new THREE.BoxGeometry(0.011, 0.004, 0.006);
  const usbOuter = new THREE.Mesh(usbOuterGeo, materials.blackRubberMaterial);
  usbGroup.add(usbOuter);

  const usbShieldGeo = new THREE.CylinderGeometry(0.0016, 0.0016, 0.0068, 16);
  usbShieldGeo.rotateZ(Math.PI / 2);
  const usbShield = new THREE.Mesh(usbShieldGeo, materials.chromeMaterial);
  usbShield.position.y = -0.0006;
  usbGroup.add(usbShield);

  detector.add(usbGroup);

  // --- F. 4 Faceplate Screws ---
  const screwCoords = [
    { x: -W_body / 2 + 0.008, y: H / 2 - 0.008 },
    { x: W_body / 2 - 0.008, y: H / 2 - 0.008 },
    { x: -W_body / 2 + 0.008, y: -H / 2 + 0.008 },
    { x: W_body / 2 - 0.008, y: -H / 2 + 0.008 },
  ];

  screwCoords.forEach((sc) => {
    const screwGeo = new THREE.CylinderGeometry(0.0018, 0.0018, 0.0015, 16);
    screwGeo.rotateX(Math.PI / 2);
    const screw = new THREE.Mesh(screwGeo, materials.blackNylonMaterial);
    screw.position.set(sc.x, sc.y, D / 2 + 0.0004);
    detector.add(screw);
  });

  // Apply Uniform 0.85x Scaling
  detector.scale.set(scaleFactor, scaleFactor, scaleFactor);

  return detector;
}

/* ================================================================
   4. BUILD 24MM FLAT WEBBING STRAP FOR STANDALONE SCENE (ASSET 1)
   ================================================================ */
function buildStandaloneDetectorScene(materials) {
  const root = new THREE.Group();
  root.name = "VoltageDetector_Standalone_Scene";

  const detector = buildDetectorUnit(materials, 0.85);
  root.add(detector);

  const strapHeight = 0.024; // 24mm wide strap (0.85x of 28mm)
  const earX = (W / 2) * 0.85; // 0.0374m

  const strapPoints = [
    new THREE.Vector3(-earX, 0, 0.002),
    new THREE.Vector3(-earX - 0.008, 0, -0.015),
    new THREE.Vector3(-earX - 0.004, 0, -0.034),
    new THREE.Vector3(-0.022, 0, -0.046),
    new THREE.Vector3(0, 0, -0.048),
    new THREE.Vector3(0.022, 0, -0.046),
    new THREE.Vector3(earX + 0.004, 0, -0.034),
    new THREE.Vector3(earX + 0.008, 0, -0.015),
    new THREE.Vector3(earX, 0, 0.002),
  ];

  const strapCurve = new THREE.CatmullRomCurve3(strapPoints, false);
  const sampleSteps = 64;
  const sampledPoints = strapCurve.getPoints(sampleSteps);

  const ribbonGeo = new THREE.BufferGeometry();
  const verts = [];
  const uvs = [];
  const strapIndices = [];

  for (let i = 0; i <= sampleSteps; i++) {
    const pt = sampledPoints[i];
    const u = i / sampleSteps;

    verts.push(pt.x, pt.y + strapHeight / 2, pt.z);
    uvs.push(u, 1);

    verts.push(pt.x, pt.y - strapHeight / 2, pt.z);
    uvs.push(u, 0);
  }

  for (let i = 0; i < sampleSteps; i++) {
    const top1 = i * 2;
    const bot1 = i * 2 + 1;
    const top2 = (i + 1) * 2;
    const bot2 = (i + 1) * 2 + 1;

    strapIndices.push(top1, bot1, top2);
    strapIndices.push(bot1, bot2, top2);
  }

  ribbonGeo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  ribbonGeo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  ribbonGeo.setIndex(strapIndices);
  ribbonGeo.computeVertexNormals();

  const strapMesh = new THREE.Mesh(ribbonGeo, materials.strapMaterial);
  root.add(strapMesh);

  // Tri-Glide Buckle
  const buckleGroup = new THREE.Group();
  buckleGroup.position.set(0, 0, -0.049);

  const buckleFrameGeo = new THREE.BoxGeometry(0.030, 0.026, 0.0035);
  const buckleFrame = new THREE.Mesh(buckleFrameGeo, materials.blackNylonMaterial);
  buckleGroup.add(buckleFrame);

  const slot1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.008, 0.022, 0.005),
    materials.blackRubberMaterial
  );
  slot1.position.x = -0.007;
  buckleGroup.add(slot1);

  const slot2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.008, 0.022, 0.006),
    materials.blackRubberMaterial
  );
  slot2.position.x = 0.007;
  buckleGroup.add(slot2);

  const centerBarGeo = new THREE.CylinderGeometry(0.002, 0.002, 0.024, 16);
  const centerBar = new THREE.Mesh(centerBarGeo, materials.blackNylonMaterial);
  buckleGroup.add(centerBar);

  root.add(buckleGroup);

  root.rotation.set(0, 0, 0);
  return root;
}

/* ================================================================
   5. BUILD PHOTO-CALIBRATED HELMET WITH 0.85x DETECTOR (ASSET 2)
   ================================================================ */
function buildHelmetMountedDetector(materials) {
  const root = new THREE.Group();
  root.name = "HelmetMountedVoltageDetector";

  const helmetGroup = new THREE.Group();

  const radiusX = 0.098; // 98mm dome radius X (220mm brim width)
  const radiusZ = 0.116; // 116mm dome radius Z (258mm brim length)
  const domeHeight = 0.104; // 104mm crown dome height

  const uSegments = 64;
  const vSegments = 36;

  // Exterior Shell
  const outerGeo = new THREE.BufferGeometry();
  const outerVerts = [];
  const outerUvs = [];
  const outerIndices = [];

  // Interior Solid Shell Wall
  const innerGeo = new THREE.BufferGeometry();
  const innerVerts = [];
  const innerUvs = [];
  const innerIndices = [];

  const wallThickness = 0.0035;
  const perimeterPoints = [];

  for (let j = 0; j <= vSegments; j++) {
    const v = j / vSegments; // 0 (apex) to 1.0 (outer rim)

    for (let i = 0; i <= uSegments; i++) {
      const u = i / uSegments;
      const theta = u * Math.PI * 2;

      const cosT = Math.cos(theta); // X
      const sinT = Math.sin(theta); // Z (+1 is front, -1 is back)

      let xOut, yOut, zOut;
      let xIn, yIn, zIn;

      if (v <= 0.75) {
        // --- DOME REGION (v from 0 to 0.75) ---
        const t = v / 0.75;
        const phi = (t * Math.PI) / 2;

        let rX = radiusX * Math.sin(phi);
        let rZ = radiusZ * Math.sin(phi);
        let y = domeHeight * Math.cos(phi);

        // Molded 3 prominent rounded crown ridges
        let ridgeLift = 0;
        const xPos = rX * cosT;
        const zPos = rZ * sinT;

        if (t < 0.90 && zPos > -0.095 && zPos < 0.065) {
          const longFactor = Math.sin(((zPos + 0.095) / 0.160) * Math.PI);
          // Center ridge
          const centerDist = Math.abs(xPos);
          if (centerDist < 0.018) {
            ridgeLift += 0.0085 * Math.exp(-Math.pow(centerDist / 0.009, 2)) * longFactor;
          }
          // Left & Right ridges
          const sideDistL = Math.abs(xPos + 0.038);
          const sideDistR = Math.abs(xPos - 0.038);
          if (sideDistL < 0.016) {
            ridgeLift += 0.0068 * Math.exp(-Math.pow(sideDistL / 0.008, 2)) * longFactor;
          }
          if (sideDistR < 0.016) {
            ridgeLift += 0.0068 * Math.exp(-Math.pow(sideDistR / 0.008, 2)) * longFactor;
          }
        }

        // Smooth subtle ear contour
        if (Math.abs(cosT) > 0.65 && sinT > -0.35 && sinT < 0.35) {
          const earFactor = Math.pow(Math.abs(cosT), 2) * (1.0 - Math.abs(sinT) / 0.35);
          y += earFactor * 0.006 * Math.sin(phi);
        }

        xOut = rX * cosT;
        zOut = rZ * sinT;
        yOut = y + ridgeLift;

        const inScale = Math.max(0.01, 1.0 - wallThickness / radiusX);
        xIn = xOut * inScale;
        zIn = zOut * inScale;
        yIn = yOut - wallThickness;
      } else {
        // --- COMPACT BRIM & VISOR (v from 0.75 to 1.0) ---
        const s = (v - 0.75) / 0.25;

        let extZ = 0.008 * s;
        let extX = 0.008 * s;
        let slopeY = -0.002 * s;

        if (sinT > 0) {
          // Front Visor Peak: compact 26mm forward extension with realistic downward slope
          const frontFactor = Math.pow(sinT, 2.0);
          extZ += 0.026 * frontFactor * s;
          slopeY -= 0.010 * frontFactor * s;
        } else {
          // Rear Nape Flange
          const backFactor = Math.pow(-sinT, 1.8);
          extZ += 0.016 * backFactor * s;
          slopeY -= 0.005 * backFactor * s;
        }

        if (Math.abs(cosT) > 0.65 && sinT > -0.35 && sinT < 0.35) {
          const earFactor = Math.pow(Math.abs(cosT), 2) * (1.0 - Math.abs(sinT) / 0.35);
          slopeY += earFactor * 0.004;
        }

        xOut = (radiusX + extX * Math.abs(cosT)) * cosT;
        zOut = (radiusZ + extZ) * sinT;
        yOut = slopeY;

        xIn = xOut * 0.985;
        zIn = zOut * 0.985;
        yIn = yOut - wallThickness;

        if (j === vSegments) {
          perimeterPoints.push(new THREE.Vector3(xOut, yOut, zOut));
        }
      }

      outerVerts.push(xOut, yOut, zOut);
      outerUvs.push(u, v);

      innerVerts.push(xIn, yIn, zIn);
      innerUvs.push(u, v);
    }
  }

  for (let j = 0; j < vSegments; j++) {
    for (let i = 0; i < uSegments; i++) {
      const a = j * (uSegments + 1) + i;
      const b = (j + 1) * (uSegments + 1) + i;
      const c = (j + 1) * (uSegments + 1) + (i + 1);
      const d = j * (uSegments + 1) + (i + 1);

      outerIndices.push(a, b, d);
      outerIndices.push(b, c, d);

      innerIndices.push(a, d, b);
      innerIndices.push(b, d, c);
    }
  }

  outerGeo.setAttribute("position", new THREE.Float32BufferAttribute(outerVerts, 3));
  outerGeo.setAttribute("uv", new THREE.Float32BufferAttribute(outerUvs, 2));
  outerGeo.setIndex(outerIndices);
  outerGeo.computeVertexNormals();

  const outerShellMesh = new THREE.Mesh(outerGeo, materials.helmetWhiteMaterial);
  helmetGroup.add(outerShellMesh);

  innerGeo.setAttribute("position", new THREE.Float32BufferAttribute(innerVerts, 3));
  innerGeo.setAttribute("uv", new THREE.Float32BufferAttribute(innerUvs, 2));
  innerGeo.setIndex(innerIndices);
  innerGeo.computeVertexNormals();

  const innerShellMesh = new THREE.Mesh(innerGeo, materials.helmetInnerMaterial);
  helmetGroup.add(innerShellMesh);

  // Rolled Perimeter Rim Lip
  if (perimeterPoints.length > 3) {
    const rimCurve = new THREE.CatmullRomCurve3(perimeterPoints, true);
    const rimGeo = new THREE.TubeGeometry(rimCurve, 64, 0.0026, 8, true);
    const rimMesh = new THREE.Mesh(rimGeo, materials.helmetWhiteMaterial);
    helmetGroup.add(rimMesh);
  }

  // Universal Accessory Slots (Left & Right Flanks)
  function createAccessorySlot(isLeft) {
    const slotGroup = new THREE.Group();
    const xPos = isLeft ? -0.100 : 0.100;
    slotGroup.position.set(xPos, 0.016, 0.006);

    const boxGeo = new THREE.BoxGeometry(0.008, 0.018, 0.024);
    const boxMesh = new THREE.Mesh(boxGeo, materials.helmetWhiteMaterial);
    slotGroup.add(boxMesh);

    const innerSlotGeo = new THREE.BoxGeometry(0.009, 0.013, 0.016);
    const innerSlotMesh = new THREE.Mesh(innerSlotGeo, materials.suspensionDarkMaterial);
    innerSlotMesh.position.x = isLeft ? -0.001 : 0.001;
    slotGroup.add(innerSlotMesh);

    return slotGroup;
  }

  helmetGroup.add(createAccessorySlot(true));
  helmetGroup.add(createAccessorySlot(false));

  // --- AUTHENTIC 4-POINT INTERNAL SUSPENSION SYSTEM ---
  const suspensionGroup = new THREE.Group();
  suspensionGroup.position.set(0, 0.006, 0);

  // Oval Headband Ring
  const headbandCurve = new THREE.EllipseCurve(0, 0, 0.080, 0.096, 0, Math.PI * 2, false, 0);
  const headbandPoints = headbandCurve.getPoints(48).map((p) => new THREE.Vector3(p.x, 0, p.y));
  const headbandGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(headbandPoints, true), 48, 0.0030, 8, true);
  const headbandMesh = new THREE.Mesh(headbandGeo, materials.suspensionDarkMaterial);
  headbandMesh.position.y = -0.004;
  suspensionGroup.add(headbandMesh);

  // Forehead Padded Sweatband
  const sweatbandCurve = new THREE.EllipseCurve(0, 0, 0.081, 0.097, Math.PI * 0.18, Math.PI * 0.82, false, 0);
  const sweatbandPoints = sweatbandCurve.getPoints(24).map((p) => new THREE.Vector3(p.x, 0, p.y));
  const sweatbandGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(sweatbandPoints, false), 24, 0.0044, 8, false);
  const sweatbandMesh = new THREE.Mesh(sweatbandGeo, materials.sweatbandMaterial);
  sweatbandMesh.position.y = -0.004;
  suspensionGroup.add(sweatbandMesh);

  // Four Corner Anchor Keys
  const anchorPositions = [
    { x: -0.065, z: 0.062 },
    { x: 0.065, z: 0.062 },
    { x: -0.065, z: -0.062 },
    { x: 0.065, z: -0.062 },
  ];

  anchorPositions.forEach((anc) => {
    const ancGeo = new THREE.BoxGeometry(0.008, 0.010, 0.008);
    const ancMesh = new THREE.Mesh(ancGeo, materials.suspensionDarkMaterial);
    ancMesh.position.set(anc.x, 0.006, anc.z);
    suspensionGroup.add(ancMesh);
  });

  // Crossed Suspension Webbing Straps
  function createSuspensionStrap(p1, p2) {
    const midY = 0.060;
    const strapPath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(p1.x, 0.006, p1.z),
      new THREE.Vector3(p1.x * 0.5, midY * 0.75, p1.z * 0.5),
      new THREE.Vector3(0, midY, 0),
      new THREE.Vector3(p2.x * 0.5, midY * 0.75, p2.z * 0.5),
      new THREE.Vector3(p2.x, 0.006, p2.z),
    ]);

    const strapSampleSteps = 24;
    const sampled = strapPath.getPoints(strapSampleSteps);
    const sWidth = 0.015;

    const sGeo = new THREE.BufferGeometry();
    const sVerts = [];
    const sUvs = [];
    const sIndices = [];

    for (let k = 0; k <= strapSampleSteps; k++) {
      const pt = sampled[k];
      const u = k / strapSampleSteps;

      let nx = p2.z - p1.z;
      let nz = -(p2.x - p1.x);
      const len = Math.hypot(nx, nz) || 1;
      nx /= len;
      nz /= len;

      sVerts.push(pt.x + nx * sWidth / 2, pt.y, pt.z + nz * sWidth / 2);
      sUvs.push(u, 1);

      sVerts.push(pt.x - nx * sWidth / 2, pt.y, pt.z - nz * sWidth / 2);
      sUvs.push(u, 0);
    }

    for (let k = 0; k < strapSampleSteps; k++) {
      const a = k * 2;
      const b = k * 2 + 1;
      const c = (k + 1) * 2;
      const d = (k + 1) * 2 + 1;
      sIndices.push(a, b, d);
      sIndices.push(a, d, c);
    }

    sGeo.setAttribute("position", new THREE.Float32BufferAttribute(sVerts, 3));
    sGeo.setAttribute("uv", new THREE.Float32BufferAttribute(sUvs, 2));
    sGeo.setIndex(sIndices);
    sGeo.computeVertexNormals();

    return new THREE.Mesh(sGeo, materials.suspensionWebbingMaterial);
  }

  suspensionGroup.add(createSuspensionStrap(anchorPositions[0], anchorPositions[3]));
  suspensionGroup.add(createSuspensionStrap(anchorPositions[1], anchorPositions[2]));

  // Central Crown Comfort Pad
  const crownPadGeo = new THREE.CylinderGeometry(0.020, 0.020, 0.002, 24);
  const crownPad = new THREE.Mesh(crownPadGeo, materials.suspensionDarkMaterial);
  crownPad.position.set(0, 0.061, 0);
  suspensionGroup.add(crownPad);

  // Rear Ratchet Adjustment Knob
  const knobGroup = new THREE.Group();
  knobGroup.position.set(0, -0.010, -0.114);

  const knobCoreGeo = new THREE.CylinderGeometry(0.011, 0.011, 0.013, 20);
  knobCoreGeo.rotateX(Math.PI / 2);
  const knobCore = new THREE.Mesh(knobCoreGeo, materials.suspensionDarkMaterial);
  knobGroup.add(knobCore);

  for (let k = 0; k < 8; k++) {
    const kAngle = (k * Math.PI) / 4;
    const toothGeo = new THREE.BoxGeometry(0.0028, 0.0028, 0.013);
    const toothMesh = new THREE.Mesh(toothGeo, materials.suspensionDarkMaterial);
    toothMesh.position.set(Math.cos(kAngle) * 0.0115, Math.sin(kAngle) * 0.0115, 0);
    knobGroup.add(toothMesh);
  }

  suspensionGroup.add(knobGroup);
  helmetGroup.add(suspensionGroup);

  root.add(helmetGroup);

  // --- 24MM ELASTIC WEBBING STRAP ---
  const strapHeight = 0.024; // 24mm wide strap (0.85x scale)
  const strapSteps = 64;
  const strapPoints = [];
  const strapY = 0.034; // Uniform horizontal strap height

  for (let i = 0; i <= strapSteps; i++) {
    const theta = (i / strapSteps) * Math.PI * 2;
    const cosT = Math.cos(theta);
    const sinT = Math.sin(theta);

    let rX = radiusX * 0.96 + 0.003;
    let rZ = radiusZ * 0.96 + 0.003;

    // Flat front forehead contour where 0.85x detector sits
    if (sinT > 0.70) {
      rZ = radiusZ * 0.95;
      rX *= 0.95;
    }

    strapPoints.push(new THREE.Vector3(rX * cosT, strapY, rZ * sinT));
  }

  const strapRibbonGeo = new THREE.BufferGeometry();
  const strapVerts = [];
  const strapUvs = [];
  const strapIndices = [];

  for (let i = 0; i <= strapSteps; i++) {
    const pt = strapPoints[i];
    const u = i / strapSteps;

    strapVerts.push(pt.x, pt.y + strapHeight / 2, pt.z);
    strapUvs.push(u, 1);

    strapVerts.push(pt.x, pt.y - strapHeight / 2, pt.z);
    strapUvs.push(u, 0);
  }

  for (let i = 0; i < strapSteps; i++) {
    const top1 = i * 2;
    const bot1 = i * 2 + 1;
    const top2 = (i + 1) * 2;
    const bot2 = (i + 1) * 2 + 1;

    strapIndices.push(top1, bot1, top2);
    strapIndices.push(bot1, bot2, top2);
  }

  strapRibbonGeo.setAttribute("position", new THREE.Float32BufferAttribute(strapVerts, 3));
  strapRibbonGeo.setAttribute("uv", new THREE.Float32BufferAttribute(strapUvs, 2));
  strapRibbonGeo.setIndex(strapIndices);
  strapRibbonGeo.computeVertexNormals();

  const strapMesh = new THREE.Mesh(strapRibbonGeo, materials.strapMaterial);
  root.add(strapMesh);

  // Rear Tri-Glide Buckle
  const buckleGroup = new THREE.Group();
  buckleGroup.position.set(0, strapY, -radiusZ * 0.96 - 0.006);

  const buckleFrameGeo = new THREE.BoxGeometry(0.030, 0.026, 0.004);
  const buckleFrame = new THREE.Mesh(buckleFrameGeo, materials.blackNylonMaterial);
  buckleGroup.add(buckleFrame);

  const slot1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.008, 0.022, 0.006),
    materials.blackRubberMaterial
  );
  slot1.position.x = -0.007;
  buckleGroup.add(slot1);

  const slot2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.008, 0.022, 0.006),
    materials.blackRubberMaterial
  );
  slot2.position.x = 0.007;
  buckleGroup.add(slot2);

  root.add(buckleGroup);

  // --- 0.85x VOLTAGE DETECTOR MOUNTED FLUSH ON EXTERIOR FOREHEAD ---
  const detectorUnit = buildDetectorUnit(materials, 0.85);

  // Position: Forehead exterior surface (X = 0, Y = +0.034m, Z = +0.116m)
  // Scaled depth half is 0.0102m, back face rests flush on outer shell at Z = 0.1058m
  // 100% on exterior, ZERO underside penetration!
  detectorUnit.position.set(0, 0.034, 0.116);
  detectorUnit.rotation.x = -Math.PI * 0.075; // Tilted back ~13.5° flush on exterior

  root.add(detectorUnit);

  // Center Assembly Origin at (0, 0, 0)
  root.position.y = -0.025;

  return root;
}

/* ================================================================
   6. EXPORT BINARY GLB ASSETS
   ================================================================ */
async function main() {
  console.log("Generating HVTI Dual-Asset 3D Models (V11 - 0.85x Device Scale)...");

  const outDir = path.resolve("public/models");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log("• Baking authentic high-resolution front decal texture (2048 x 1536)...");
  const frontDecalTexture = generateFrontDecalTexture();
  const materials = createMaterials(frontDecalTexture);

  const exporter = new GLTFExporter();

  // 1. Build & Export Asset 1: Standalone Detector (0.85x)
  console.log("\n📦 1. Generating detector_standalone.glb (0.85x)...");
  const scene1 = new THREE.Scene();
  const model1 = buildStandaloneDetectorScene(materials);
  scene1.add(model1);

  const glb1 = await exporter.parseAsync(scene1, { binary: true });
  const outPath1 = path.join(outDir, "detector_standalone.glb");
  fs.writeFileSync(outPath1, Buffer.from(glb1));
  console.log(`✅ Asset 1 created: ${outPath1} (${(glb1.byteLength / 1024).toFixed(1)} KB)`);

  const aliasPath1 = path.join(outDir, "helmet_detector_standalone.glb");
  fs.writeFileSync(aliasPath1, Buffer.from(glb1));

  // 2. Build & Export Asset 2: Helmet Mounted Detector (0.85x device)
  console.log("\n⛑️ 2. Generating detector_helmet_mounted.glb (0.85x device)...");
  const scene2 = new THREE.Scene();
  const model2 = buildHelmetMountedDetector(materials);
  scene2.add(model2);

  const glb2 = await exporter.parseAsync(scene2, { binary: true });
  const outPath2 = path.join(outDir, "detector_helmet_mounted.glb");
  fs.writeFileSync(outPath2, Buffer.from(glb2));
  console.log(`✅ Asset 2 created: ${outPath2} (${(glb2.byteLength / 1024).toFixed(1)} KB)`);

  const aliasPath2 = path.join(outDir, "helmet_mounted_voltage_detector.glb");
  fs.writeFileSync(aliasPath2, Buffer.from(glb2));
  const aliasPath3 = path.join(outDir, "hvti_hmd_voltage_detector.glb");
  fs.writeFileSync(aliasPath3, Buffer.from(glb2));

  console.log("\n🎉 Both 3D GLB assets regenerated and exported successfully!");
}

main().catch((err) => {
  console.error("Error generating 3D models:", err);
  process.exit(1);
});
