import { createCanvas } from "@napi-rs/canvas";
import fs from "fs";

const width = 2048;
const height = 1536;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

const W = 0.085;
const H = 0.065;
const pW = W - 0.006; // 0.079
const pH = H - 0.006; // 0.059

function toCanvasX(x3d) {
  return ((x3d + pW / 2) / pW) * width;
}
function toCanvasY(y3d) {
  return ((pH / 2 - y3d) / pH) * height;
}

// Background
ctx.fillStyle = "#E2EE25";
ctx.fillRect(0, 0, width, height);

// 1. Top Panel Border
ctx.strokeStyle = "rgba(0, 0, 0, 0.12)";
ctx.lineWidth = 14;
const inset = 36;
const cCorner = 130;

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

// 2. Button Center (Shifted down slightly to y = +0.0120m for clean spacing)
const pBtnX = toCanvasX(0);
const pBtnY = toCanvasY(0.0120); // 455px

// 3. Prominent High-Visibility I/O Sticker Patch shifted distinctly above button
const ioLabelW = 380;
const ioLabelH = 160;
const ioLabelY = 150; // High at top, well above the button

// Sticker Patch: High-vis pale yellow label tape with crisp black outline
ctx.fillStyle = "#F5FF80";
ctx.fillRect(pBtnX - ioLabelW / 2, ioLabelY - ioLabelH / 2, ioLabelW, ioLabelH);

ctx.strokeStyle = "#000000";
ctx.lineWidth = 5;
ctx.strokeRect(pBtnX - ioLabelW / 2, ioLabelY - ioLabelH / 2, ioLabelW, ioLabelH);

// Ultra-Bold, Big, High-Contrast I/O Text
ctx.fillStyle = "#000000";
ctx.font = "900 135px 'Times New Roman', 'Liberation Serif', Georgia, serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("I/O", pBtnX, ioLabelY + 4);

// Button guide ring below
ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
ctx.lineWidth = 6;
ctx.beginPath();
ctx.arc(pBtnX, pBtnY, 150, 0, Math.PI * 2);
ctx.stroke();

const buf = canvas.toBuffer("image/png");
fs.writeFileSync("scratch/test_io_preview.png", buf);
console.log("Saved scratch/test_io_preview.png");
