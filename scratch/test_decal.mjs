import * as THREE from "three";
import { createCanvas } from "@napi-rs/canvas";
import fs from "fs";

const width = 2048;
const height = 1536;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

const W = 0.085;
const H = 0.065;
const pW = W - 0.006;
const pH = H - 0.006;

function toCanvasX(x3d) {
  return ((x3d + pW / 2) / pW) * width;
}
function toCanvasY(y3d) {
  return ((pH / 2 - y3d) / pH) * height;
}

// 1. Safety Yellow ABS Background with subtle industrial gradient
const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
bgGrad.addColorStop(0, "#F7D41E");
bgGrad.addColorStop(0.5, "#F5CE00");
bgGrad.addColorStop(1, "#EAB308");
ctx.fillStyle = bgGrad;
ctx.fillRect(0, 0, width, height);

// Micro-texture / engineering matte finish
ctx.fillStyle = "rgba(0, 0, 0, 0.025)";
for (let i = 0; i < 6000; i++) {
  const rx = Math.random() * width;
  const ry = Math.random() * height;
  ctx.fillRect(rx, ry, 2, 2);
}

// 2. Front Chamfer & Perimeter Recess Groove
ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
ctx.lineWidth = 10;
const inset = 36;
const cCorner = 140;

ctx.beginPath();
ctx.moveTo(inset + cCorner, inset);
ctx.lineTo(width - inset - cCorner, inset);
ctx.lineTo(width - inset, inset + cCorner);
ctx.lineTo(width - inset, height - inset - cCorner);
ctx.lineTo(width - inset - cCorner, height - inset);
ctx.lineTo(inset + cCorner, height - inset);
ctx.lineTo(inset, height - inset - cCorner);
ctx.lineTo(inset, inset + cCorner);
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
ctx.lineWidth = 4;
ctx.stroke();

// 3. Top Power Section (I/O)
const pBtnY = toCanvasY(0.0160);
const pBtnX = toCanvasX(0);

// "I/O" Text above power button
ctx.fillStyle = "#0F172A";
ctx.font = "bold 56px sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("I / O", pBtnX, pBtnY - 140);

// Power button location guideline ring
ctx.strokeStyle = "rgba(15, 23, 42, 0.35)";
ctx.lineWidth = 8;
ctx.beginPath();
ctx.arc(pBtnX, pBtnY, 130, 0, Math.PI * 2);
ctx.stroke();

// Subtle power symbol arc above ring
ctx.strokeStyle = "rgba(15, 23, 42, 0.6)";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(pBtnX, pBtnY, 155, -Math.PI * 0.75, -Math.PI * 0.25);
ctx.stroke();

// 4. Center LED Status Indicators
const ledY = toCanvasY(-0.0010);
const ledLeftX = toCanvasX(-0.022);
const ledCenterX = toCanvasX(0.0);
const ledRightX = toCanvasX(0.022);

// Left ALRM (Red)
ctx.strokeStyle = "rgba(220, 38, 38, 0.45)";
ctx.lineWidth = 7;
ctx.beginPath();
ctx.arc(ledLeftX, ledY, 82, 0, Math.PI * 2);
ctx.stroke();

ctx.fillStyle = "#DC2626";
ctx.font = "bold 44px sans-serif";
ctx.fillText("ALRM", ledLeftX, ledY + 125);

// Center RDY (Green)
ctx.strokeStyle = "rgba(22, 163, 74, 0.45)";
ctx.lineWidth = 7;
ctx.beginPath();
ctx.arc(ledCenterX, ledY, 82, 0, Math.PI * 2);
ctx.stroke();

ctx.fillStyle = "#16A34A";
ctx.font = "bold 44px sans-serif";
ctx.fillText("RDY", ledCenterX, ledY + 125);

// Right ALRM (Red)
ctx.strokeStyle = "rgba(220, 38, 38, 0.45)";
ctx.lineWidth = 7;
ctx.beginPath();
ctx.arc(ledRightX, ledY, 82, 0, Math.PI * 2);
ctx.stroke();

ctx.fillStyle = "#DC2626";
ctx.font = "bold 44px sans-serif";
ctx.fillText("ALRM", ledRightX, ledY + 125);

// 5. Acoustic Buzzer Port (Below Right LED)
const bzY = toCanvasY(-0.0165);
const bzX = toCanvasX(0.022);

ctx.fillStyle = "#0F172A";
ctx.font = "bold 32px sans-serif";
ctx.fillText("BUZZER", bzX, bzY + 120);

// 3 Acoustic Port Guideline Rings
const dotDist = 38;
const dotR = 18;
[
  { x: bzX, y: bzY - dotDist * 0.7 },
  { x: bzX - dotDist * 0.85, y: bzY + dotDist * 0.6 },
  { x: bzX + dotDist * 0.85, y: bzY + dotDist * 0.6 },
].forEach((pt) => {
  ctx.fillStyle = "#090D16";
  ctx.beginPath();
  ctx.arc(pt.x, pt.y, dotR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
  ctx.lineWidth = 3;
  ctx.stroke();
});

// 6. Charging Indicator (Below Left LED)
const chrgY = toCanvasY(-0.0165);
const chrgX = toCanvasX(-0.022);

ctx.strokeStyle = "rgba(2, 132, 199, 0.45)";
ctx.lineWidth = 6;
ctx.beginPath();
ctx.arc(chrgX, chrgY, 60, 0, Math.PI * 2);
ctx.stroke();

ctx.fillStyle = "#0284C7";
ctx.font = "bold 36px sans-serif";
ctx.fillText("CHRG", chrgX, chrgY + 120);

// 7. HVTI Brand Header in Center Bottom
const brandY = toCanvasY(-0.0150);
const brandX = toCanvasX(0.0);

ctx.fillStyle = "#0F172A";
ctx.font = "900 68px sans-serif";
ctx.fillText("HVTI", brandX, brandY - 30);

ctx.fillStyle = "#1E293B";
ctx.font = "bold 26px sans-serif";
ctx.fillText("VOLTAGE DETECTOR", brandX, brandY + 25);

ctx.fillStyle = "#475569";
ctx.font = "600 20px sans-serif";
ctx.fillText("1 kV – 500 kV AC • CAT IV", brandX, brandY + 62);

// 8. 4 Precision Corner Screws
const screwCorners = [
  { x: toCanvasX(-0.031), y: toCanvasY(0.022) },
  { x: toCanvasX(0.031), y: toCanvasY(0.022) },
  { x: toCanvasX(-0.031), y: toCanvasY(-0.022) },
  { x: toCanvasX(0.031), y: toCanvasY(-0.022) },
];

screwCorners.forEach((sc) => {
  // Screw well recess
  ctx.fillStyle = "#D97706";
  ctx.beginPath();
  ctx.arc(sc.x, sc.y, 34, 0, Math.PI * 2);
  ctx.fill();

  // Screw head (metallic dark grey)
  const scGrad = ctx.createLinearGradient(sc.x - 26, sc.y - 26, sc.x + 26, sc.y + 26);
  scGrad.addColorStop(0, "#64748B");
  scGrad.addColorStop(0.5, "#334155");
  scGrad.addColorStop(1, "#1E293B");
  ctx.fillStyle = scGrad;
  ctx.beginPath();
  ctx.arc(sc.x, sc.y, 28, 0, Math.PI * 2);
  ctx.fill();

  // Torx / Cross drive slot
  ctx.fillStyle = "#0F172A";
  ctx.fillRect(sc.x - 18, sc.y - 4, 36, 8);
  ctx.fillRect(sc.x - 4, sc.y - 18, 8, 36);
});

const buf = canvas.toBuffer("image/png");
fs.writeFileSync("scratch/test_preview.png", buf);
console.log("Saved scratch/test_preview.png successfully");
