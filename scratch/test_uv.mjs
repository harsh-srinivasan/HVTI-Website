import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { createCanvas, ImageData } from "@napi-rs/canvas";
import fs from "fs";

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

const W = 0.085;
const H = 0.065;
const pW = W - 0.006;
const pH = H - 0.006;

const canvas = createCanvas(1024, 768);
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#F5CE00";
ctx.fillRect(0, 0, 1024, 768);
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 1024, 100); // Red bar at TOP of canvas
ctx.fillStyle = "#0000FF";
ctx.fillRect(0, 668, 1024, 100); // Blue bar at BOTTOM of canvas
ctx.fillStyle = "#000000";
ctx.font = "bold 60px sans-serif";
ctx.textAlign = "center";
ctx.fillText("TOP", 512, 65);
ctx.fillText("BOTTOM", 512, 730);

const imgData = ctx.getImageData(0, 0, 1024, 768);
const texture = new THREE.DataTexture(new Uint8Array(imgData.data), 1024, 768, THREE.RGBAFormat);
texture.needsUpdate = true;
texture.colorSpace = THREE.SRGBColorSpace;

const shape = new THREE.Shape();
shape.moveTo(-pW / 2, pH / 2);
shape.lineTo(pW / 2, pH / 2);
shape.lineTo(pW / 2, -pH / 2);
shape.lineTo(-pW / 2, -pH / 2);
shape.closePath();

const geo = new THREE.ShapeGeometry(shape);
const pos = geo.attributes.position;
const uvs = new Float32Array(pos.count * 2);
for (let i = 0; i < pos.count; i++) {
  const px = pos.getX(i);
  const py = pos.getY(i);
  uvs[i * 2] = (px + pW / 2) / pW;
  uvs[i * 2 + 1] = (pH / 2 - py) / pH; // Correct inverted V
}
geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

const mat = new THREE.MeshStandardMaterial({ map: texture });
const mesh = new THREE.Mesh(geo, mat);

const scene = new THREE.Scene();
scene.add(mesh);

const exporter = new GLTFExporter();
exporter.parse(scene, (glb) => {
  fs.writeFileSync("scratch/test_uv.glb", Buffer.from(glb));
  console.log("Exported scratch/test_uv.glb successfully");
}, { binary: true });
