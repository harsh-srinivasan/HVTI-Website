import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import fs from "fs";
import path from "path";

/* ================================================================
   HIGH VOLTAGE LIVE LINE DETECTOR (MODEL TP-S9) — 3D GLB GENERATOR
   File: scripts/generate_tp_s9_model.mjs

   Precision PBR 3D asset with 100% geometric features (zero external blob dependencies):
   - Fork contact electrode with ribbed inner and outer gripping notches
   - Cylindrical shaft body with 6 longitudinal grip ridges & gold HVTI decal
   - Flange flare bell housing 3 faceted red dome LEDs with emissive glow
   - Multi-position rotary voltage switch dial (OFF, TEST, 240V, 2kV ... 500kV)
     with 12 crisp radial calibration ticks and selector pointer knob
   - Slotted speaker/buzzer grill and red indicator dot markers
   - Rear hexagonal protective cap & universal sunrise connector socket
   - Centered handle pivot for smooth 360° orbital rotation
   ================================================================ */

// Node.js Polyfills for Three.js GLTFExporter
globalThis.Blob = globalThis.Blob;
globalThis.FileReader = class FileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result = buf;
      if (this.onloadend) this.onloadend({ target: this });
      if (this.onload) this.onload({ target: this });
    });
  }
};

function buildDetectorModel() {
  const root = new THREE.Group();
  root.name = "HighVoltageDetector_TP_S9";

  // --- PBR Materials (Pure Three.js PBR, 0 external texture blobs) ---
  const yellowBodyMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#F5B800"),
    roughness: 0.35,
    metalness: 0.02,
  });

  const yellowForkMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#F3B200"),
    roughness: 0.30,
    metalness: 0.0,
  });

  const blackPlasticMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#18181B"),
    roughness: 0.48,
    metalness: 0.05,
  });

  const whiteTickMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FFFFFF"),
    roughness: 0.2,
    metalness: 0.0,
  });

  const redLEDMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#DC2626"),
    emissive: new THREE.Color("#EF4444"),
    emissiveIntensity: 0.85,
    roughness: 0.12,
    metalness: 0.08,
  });

  const redDotMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#EF4444"),
    roughness: 0.3,
    metalness: 0.0,
  });

  const goldLabelMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FACC15"),
    roughness: 0.25,
    metalness: 0.15,
  });

  const blackLabelBorderMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#09090B"),
    roughness: 0.5,
    metalness: 0.0,
  });

  // --- 1. Central Cylindrical Grip Shaft ---
  // Length: 0.18, Radius: 0.019 (Centered around origin for natural rotation)
  const shaftGeo = new THREE.CylinderGeometry(0.019, 0.019, 0.18, 32);
  const shaftMesh = new THREE.Mesh(shaftGeo, yellowBodyMaterial);
  shaftMesh.position.set(0, 0, 0);
  root.add(shaftMesh);

  // 6 Longitudinal Grip Ridges along handle circumference
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const ridgeGeo = new THREE.BoxGeometry(0.0035, 0.12, 0.004);
    const ridgeMesh = new THREE.Mesh(ridgeGeo, yellowBodyMaterial);
    const r = 0.0192;
    ridgeMesh.position.set(Math.cos(angle) * r, 0, Math.sin(angle) * r);
    ridgeMesh.rotation.y = -angle;
    root.add(ridgeMesh);
  }

  // HVTI Brand Label Decal on lower shaft
  const labelBackGeo = new THREE.CylinderGeometry(0.0192, 0.0192, 0.034, 32, 1, true, -Math.PI * 0.32, Math.PI * 0.64);
  const labelBackMesh = new THREE.Mesh(labelBackGeo, blackLabelBorderMaterial);
  labelBackMesh.position.set(0, -0.05, 0);
  labelBackMesh.rotation.y = Math.PI / 2;
  root.add(labelBackMesh);

  const labelFrontGeo = new THREE.CylinderGeometry(0.0194, 0.0194, 0.030, 32, 1, true, -Math.PI * 0.30, Math.PI * 0.60);
  const labelFrontMesh = new THREE.Mesh(labelFrontGeo, goldLabelMaterial);
  labelFrontMesh.position.set(0, -0.05, 0);
  labelFrontMesh.rotation.y = Math.PI / 2;
  root.add(labelFrontMesh);

  // --- 2. Forward Neck & Fork Contact Electrode ---
  const neckGeo = new THREE.CylinderGeometry(0.017, 0.019, 0.025, 32);
  const neckMesh = new THREE.Mesh(neckGeo, yellowBodyMaterial);
  neckMesh.position.set(0, 0.102, 0);
  root.add(neckMesh);

  const forkBaseGeo = new THREE.CylinderGeometry(0.016, 0.017, 0.024, 32);
  const forkBaseMesh = new THREE.Mesh(forkBaseGeo, yellowForkMaterial);
  forkBaseMesh.position.set(0, 0.126, 0);
  root.add(forkBaseMesh);

  // Fork Prongs: Left and Right arms forming the U-shaped contact notch
  const prongLeftGeo = new THREE.BoxGeometry(0.007, 0.052, 0.014);
  const prongLeftMesh = new THREE.Mesh(prongLeftGeo, yellowForkMaterial);
  prongLeftMesh.position.set(-0.0085, 0.162, 0);
  root.add(prongLeftMesh);

  const prongRightGeo = new THREE.BoxGeometry(0.007, 0.052, 0.014);
  const prongRightMesh = new THREE.Mesh(prongRightGeo, yellowForkMaterial);
  prongRightMesh.position.set(0.0085, 0.162, 0);
  root.add(prongRightMesh);

  // Curved inner bottom of U-slot
  const forkCurveGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.014, 16, 1, false, 0, Math.PI);
  const forkCurveMesh = new THREE.Mesh(forkCurveGeo, yellowForkMaterial);
  forkCurveMesh.rotation.x = Math.PI / 2;
  forkCurveMesh.position.set(0, 0.142, 0);
  root.add(forkCurveMesh);

  // Ribbed Gripping Notches on Fork Prongs (4 notches on each arm)
  for (let n = 0; n < 4; n++) {
    const ny = 0.148 + n * 0.01;
    const notchL = new THREE.BoxGeometry(0.0025, 0.004, 0.015);
    const notchLMesh = new THREE.Mesh(notchL, yellowForkMaterial);
    notchLMesh.position.set(-0.012, ny, 0);
    root.add(notchLMesh);

    const notchR = new THREE.BoxGeometry(0.0025, 0.004, 0.015);
    const notchRMesh = new THREE.Mesh(notchR, yellowForkMaterial);
    notchRMesh.position.set(0.012, ny, 0);
    root.add(notchRMesh);
  }

  // --- 3. Flange Bell / Flare Head ---
  const flareBaseGeo = new THREE.CylinderGeometry(0.024, 0.019, 0.015, 32);
  const flareBaseMesh = new THREE.Mesh(flareBaseGeo, yellowBodyMaterial);
  flareBaseMesh.position.set(0, -0.096, 0);
  root.add(flareBaseMesh);

  const bellGeo = new THREE.CylinderGeometry(0.062, 0.024, 0.042, 48);
  const bellMesh = new THREE.Mesh(bellGeo, yellowBodyMaterial);
  bellMesh.position.set(0, -0.124, 0);
  root.add(bellMesh);

  const rimGeo = new THREE.CylinderGeometry(0.063, 0.063, 0.022, 48);
  const rimMesh = new THREE.Mesh(rimGeo, yellowBodyMaterial);
  rimMesh.position.set(0, -0.146, 0);
  root.add(rimMesh);

  // Underside flat plate facing forward (y = -0.103)
  const faceGeo = new THREE.RingGeometry(0.020, 0.061, 48);
  const faceMesh = new THREE.Mesh(faceGeo, yellowBodyMaterial);
  faceMesh.rotation.x = -Math.PI / 2;
  faceMesh.position.set(0, -0.103, 0);
  root.add(faceMesh);

  // --- 4. Underside Face Features (LEDs, Dial, Buzzer) ---
  // 3 Faceted Red Dome Indicator LEDs (spaced at 120°: 0°, 120°, 240°)
  for (let l = 0; l < 3; l++) {
    const angle = (l * 2 * Math.PI) / 3 - Math.PI / 6;
    const lx = Math.cos(angle) * 0.043;
    const lz = Math.sin(angle) * 0.043;

    // LED Black Bezel Collar
    const bezelGeo = new THREE.CylinderGeometry(0.009, 0.010, 0.006, 24);
    const bezelMesh = new THREE.Mesh(bezelGeo, blackPlasticMaterial);
    bezelMesh.position.set(lx, -0.10, lz);
    root.add(bezelMesh);

    // Red Polycarbonate Dome Lens with Glow
    const domeGeo = new THREE.SphereGeometry(0.0078, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const domeMesh = new THREE.Mesh(domeGeo, redLEDMaterial);
    domeMesh.position.set(lx, -0.097, lz);
    root.add(domeMesh);
  }

  // Rotary Voltage Selector Dial (Positioned on the face between LEDs)
  const dialAngle = Math.PI * 0.52;
  const dx = Math.cos(dialAngle) * 0.041;
  const dz = Math.sin(dialAngle) * 0.041;

  // Black dial bezel base plate
  const dialDiscGeo = new THREE.CylinderGeometry(0.017, 0.017, 0.004, 32);
  const dialDiscMesh = new THREE.Mesh(dialDiscGeo, blackPlasticMaterial);
  dialDiscMesh.position.set(dx, -0.101, dz);
  root.add(dialDiscMesh);

  // White calibration border ring on dial
  const dialRingGeo = new THREE.RingGeometry(0.0145, 0.0158, 32);
  const dialRingMesh = new THREE.Mesh(dialRingGeo, whiteTickMaterial);
  dialRingMesh.rotation.x = -Math.PI / 2;
  dialRingMesh.position.set(dx, -0.0988, dz);
  root.add(dialRingMesh);

  // 12 Crisp Radial Voltage Calibration Tick Markers
  // (OFF, TEST, 240V, 2kV, 11kV, 22kV, 33kV, 66kV, 132kV, 230kV, 400kV, 500kV)
  for (let t = 0; t < 12; t++) {
    const tAngle = -Math.PI * 0.8 + (t * Math.PI * 1.98) / 11;
    const tx = dx + Math.cos(tAngle) * 0.0135;
    const tz = dz + Math.sin(tAngle) * 0.0135;

    const tickGeo = new THREE.BoxGeometry(0.0012, 0.0006, 0.0035);
    const tickMesh = new THREE.Mesh(tickGeo, whiteTickMaterial);
    tickMesh.position.set(tx, -0.0985, tz);
    tickMesh.rotation.y = -tAngle + Math.PI / 2;
    root.add(tickMesh);
  }

  // Black Selector Pointer Knob
  const knobGeo = new THREE.CylinderGeometry(0.007, 0.008, 0.012, 24);
  const knobMesh = new THREE.Mesh(knobGeo, blackPlasticMaterial);
  knobMesh.position.set(dx, -0.093, dz);
  root.add(knobMesh);

  // Selector pointer fin/handle
  const pointerGeo = new THREE.BoxGeometry(0.0035, 0.007, 0.014);
  const pointerMesh = new THREE.Mesh(pointerGeo, blackPlasticMaterial);
  pointerMesh.position.set(dx, -0.092, dz + 0.004);
  root.add(pointerMesh);

  // White indicator line on pointer knob
  const pointerLineGeo = new THREE.BoxGeometry(0.001, 0.001, 0.007);
  const pointerLineMesh = new THREE.Mesh(pointerLineGeo, whiteTickMaterial);
  pointerLineMesh.position.set(dx, -0.0865, dz + 0.004);
  root.add(pointerLineMesh);

  // Speaker / Buzzer Sound Grill (Recessed slotted circle on face)
  const buzzerAngle = -Math.PI * 0.52;
  const bx = Math.cos(buzzerAngle) * 0.041;
  const bz = Math.sin(buzzerAngle) * 0.041;

  for (let s = -2; s <= 2; s++) {
    const slotGeo = new THREE.BoxGeometry(0.014 - Math.abs(s) * 0.0025, 0.002, 0.002);
    const slotMesh = new THREE.Mesh(slotGeo, blackPlasticMaterial);
    slotMesh.position.set(bx, -0.102, bz + s * 0.004);
    root.add(slotMesh);
  }

  // Red Indicator Dot Markers on Underside Face
  for (let d = 0; d < 3; d++) {
    const dotAngle = (d * 2 * Math.PI) / 3 + Math.PI / 6;
    const dotX = Math.cos(dotAngle) * 0.054;
    const dotZ = Math.sin(dotAngle) * 0.054;

    const dotGeo = new THREE.CylinderGeometry(0.0025, 0.0025, 0.0015, 16);
    const dotMesh = new THREE.Mesh(dotGeo, redDotMaterial);
    dotMesh.position.set(dotX, -0.102, dotZ);
    root.add(dotMesh);
  }

  // --- 5. Rear Hexagonal Protective Cap ---
  const hexGeo = new THREE.CylinderGeometry(0.046, 0.046, 0.038, 6);
  const hexMesh = new THREE.Mesh(hexGeo, yellowBodyMaterial);
  hexMesh.position.set(0, -0.176, 0);
  hexMesh.rotation.y = Math.PI / 6;
  root.add(hexMesh);

  const hexCapGeo = new THREE.CylinderGeometry(0.038, 0.046, 0.010, 6);
  const hexCapMesh = new THREE.Mesh(hexCapGeo, yellowBodyMaterial);
  hexCapMesh.position.set(0, -0.198, 0);
  hexCapMesh.rotation.y = Math.PI / 6;
  root.add(hexCapMesh);

  // --- 6. Universal Sunrise Connector (Rear Socket) ---
  const connectorGeo = new THREE.CylinderGeometry(0.018, 0.020, 0.020, 24);
  const connectorMesh = new THREE.Mesh(connectorGeo, blackPlasticMaterial);
  connectorMesh.position.set(0, -0.210, 0);
  root.add(connectorMesh);

  for (let sn = 0; sn < 4; sn++) {
    const sAngle = (sn * Math.PI) / 2;
    const sNotchGeo = new THREE.BoxGeometry(0.004, 0.010, 0.006);
    const sNotchMesh = new THREE.Mesh(sNotchGeo, blackPlasticMaterial);
    const sr = 0.0185;
    sNotchMesh.position.set(Math.cos(sAngle) * sr, -0.212, Math.sin(sAngle) * sr);
    sNotchMesh.rotation.y = -sAngle;
    root.add(sNotchMesh);
  }

  // Natural Showcase Orientation: Angled horizontally for beautiful 360° product view
  root.rotation.z = -Math.PI * 0.42;
  root.rotation.x = Math.PI * 0.12;

  return root;
}

/* ================================================================
   EXPORT BINARY GLB FILE
   ================================================================ */

async function main() {
  console.log("Generating High Voltage Detector Model TP-S9 3D scene (PBR Geometric)...");
  const scene = new THREE.Scene();
  const model = buildDetectorModel();
  scene.add(model);

  const exporter = new GLTFExporter();
  console.log("Exporting binary .glb format...");

  const glb = await exporter.parseAsync(scene, {
    binary: true,
  });

  const outDir = path.resolve("public/models");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, "voltage_detector_tp_s9.glb");
  const buffer = Buffer.from(glb);
  fs.writeFileSync(outPath, buffer);

  console.log(`\n✅ 3D Model created successfully!`);
  console.log(`📁 File saved to: ${outPath}`);
  console.log(`📦 File size: ${(buffer.length / 1024).toFixed(1)} KB`);
}

main().catch(console.error);
