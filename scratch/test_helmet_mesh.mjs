import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import fs from "fs";

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
};

function buildParametricHardHat() {
  const helmetWhiteMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#F8FAFC"),
    roughness: 0.22,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });

  const uSegments = 64;
  const vSegments = 40;

  const geo = new THREE.BufferGeometry();
  const verts = [];
  const uvs = [];
  const normals = [];
  const indices = [];

  const lenX = 0.205; // 205mm width
  const lenZ = 0.250; // 250mm length
  const domeH = 0.088; // 88mm dome height

  for (let j = 0; j <= vSegments; j++) {
    const v = j / vSegments; // 0 (top apex) to 1.0 (outer brim rim)

    for (let i = 0; i <= uSegments; i++) {
      const u = i / uSegments;
      const theta = u * Math.PI * 2; // 0 to 2*PI (0 is right, PI/2 is front +Z, PI is left, 3PI/2 is back -Z)

      const cosT = Math.cos(theta); // X component
      const sinT = Math.sin(theta); // Z component (+1 is front, -1 is back)

      let x, y, z;

      if (v <= 0.72) {
        // --- DOME SHELL REGION (v from 0 to 0.72) ---
        const t = v / 0.72; // 0 (apex) to 1.0 (base of dome)
        const phi = (t * Math.PI) / 2; // 0 to PI/2

        let rX = (lenX / 2) * Math.sin(phi);
        let rZ = (lenZ / 2) * Math.sin(phi);
        y = domeH * Math.cos(phi);

        // Forehead / Nape anatomical curvature
        const forwardTaper = 1.0 - sinT * 0.06;
        rX *= forwardTaper;

        // Molded Triple-Ridge Crown Reinforcement (Molded directly into the shell!)
        let ridgeLift = 0;
        const xPos = rX * cosT;
        const zPos = rZ * sinT;

        // Crown longitudinal zone: z from -0.10 to +0.07, top portion of dome
        if (t < 0.85 && zPos > -0.10 && zPos < 0.075) {
          const longitudinalFactor = Math.sin((zPos + 0.10) / 0.175 * Math.PI);
          // Center dominant rib
          const centerDist = Math.abs(xPos);
          if (centerDist < 0.016) {
            ridgeLift += 0.0055 * Math.exp(-Math.pow(centerDist / 0.008, 2)) * longitudinalFactor;
          }
          // Left & Right parallel ribs
          const sideDistL = Math.abs(xPos + 0.032);
          const sideDistR = Math.abs(xPos - 0.032);
          if (sideDistL < 0.014) {
            ridgeLift += 0.0038 * Math.exp(-Math.pow(sideDistL / 0.007, 2)) * longitudinalFactor;
          }
          if (sideDistR < 0.014) {
            ridgeLift += 0.0038 * Math.exp(-Math.pow(sideDistR / 0.007, 2)) * longitudinalFactor;
          }
        }

        // Ear notch profile (curves upward above ears)
        if (Math.abs(cosT) > 0.65 && sinT > -0.35 && sinT < 0.35) {
          const earFactor = Math.pow(Math.abs(cosT), 2) * (1.0 - Math.abs(sinT) / 0.35);
          y += earFactor * 0.014 * Math.sin(phi);
        }

        // Rear nape drop (extends lower at back)
        if (sinT < -0.3) {
          const napeDrop = Math.pow(-sinT, 1.6) * 0.018 * Math.sin(phi);
          y -= napeDrop;
        }

        y += ridgeLift;
        x = rX * cosT;
        z = rZ * sinT;
      } else {
        // --- BRIM & VISOR FLANGE REGION (v from 0.72 to 1.0) ---
        const s = (v - 0.72) / 0.28; // 0 (base of dome) to 1.0 (outer brim edge)

        let baseRX = lenX / 2 * (1.0 - sinT * 0.06);
        let baseRZ = lenZ / 2;
        let baseY = 0;

        // Apply ear arch & nape offsets to brim base
        if (Math.abs(cosT) > 0.65 && sinT > -0.35 && sinT < 0.35) {
          const earFactor = Math.pow(Math.abs(cosT), 2) * (1.0 - Math.abs(sinT) / 0.35);
          baseY += earFactor * 0.014;
        }
        if (sinT < -0.3) {
          baseY -= Math.pow(-sinT, 1.6) * 0.018;
        }

        // Front Visor Extension (flares forward and slopes downward)
        let brimExtend = 0.008; // Base 8mm rim around sides and back
        let brimSlope = -0.003 * s;

        if (sinT > 0) {
          // Front Visor Brim: smooth forward projection up to 38mm with downward curve
          const frontFactor = Math.pow(sinT, 1.8);
          brimExtend += 0.036 * frontFactor * s;
          brimSlope -= 0.016 * frontFactor * s; // Visor downward shade angle
        } else {
          brimExtend += 0.006 * s;
        }

        x = (baseRX + brimExtend * Math.abs(cosT)) * cosT;
        z = (baseRZ + brimExtend) * sinT;
        y = baseY + brimSlope;
      }

      verts.push(x, y, z);
      uvs.push(u, v);
    }
  }

  // Indices
  for (let j = 0; j < vSegments; j++) {
    for (let i = 0; i < uSegments; i++) {
      const a = j * (uSegments + 1) + i;
      const b = (j + 1) * (uSegments + 1) + i;
      const c = (j + 1) * (uSegments + 1) + (i + 1);
      const d = j * (uSegments + 1) + (i + 1);

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mesh = new THREE.Mesh(geo, helmetWhiteMaterial);
  return mesh;
}

const helmetMesh = buildParametricHardHat();
const box = new THREE.Box3().setFromObject(helmetMesh);
console.log("Helmet Dimensions:");
console.log("Size:", box.getSize(new THREE.Vector3()).toArray().map(v => (v * 1000).toFixed(1) + "mm"));
console.log("Min Y:", (box.min.y * 1000).toFixed(1) + "mm", "Max Y:", (box.max.y * 1000).toFixed(1) + "mm");
console.log("Min Z:", (box.min.z * 1000).toFixed(1) + "mm", "Max Z:", (box.max.z * 1000).toFixed(1) + "mm");
