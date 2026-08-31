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

// 1. Chartreuse Safety Yellow ABS Background (#E2EE28)
const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
bgGrad.addColorStop(0, "#E8F42A");
bgGrad.addColorStop(0.5, "#E2EE25");
bgGrad.addColorStop(1, "#D4E01C");
ctx.fillStyle = bgGrad;
ctx.fillRect(0, 0, width, height);

// 2. Subtle Rounded Inner Panel Fillet Border
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

ctx.strokeStyle = "rgba(255, 255, 255, 0.40)";
ctx.lineWidth = 6;
ctx.stroke();

// 3. Top Power Section (I/O)
// 3D Pos: Button at x = 0, y = +0.0160
const pBtnX = toCanvasX(0);
const pBtnY = toCanvasY(0.0160);

// "I/O" Label Tape Strip above button (Cleanly separated above button)
const ioLabelW = 280;
const ioLabelH = 130;
const ioLabelY = pBtnY - 215;

ctx.fillStyle = "rgba(240, 252, 100, 0.85)";
ctx.strokeStyle = "rgba(0, 0, 0, 0.20)";
ctx.lineWidth = 3;
ctx.fillRect(pBtnX - ioLabelW / 2, ioLabelY - ioLabelH / 2, ioLabelW, ioLabelH);
ctx.strokeRect(pBtnX - ioLabelW / 2, ioLabelY - ioLabelH / 2, ioLabelW, ioLabelH);

ctx.fillStyle = "#000000";
ctx.font = "bold 104px 'Times New Roman', 'Liberation Serif', Georgia, serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("I/O", pBtnX, ioLabelY + 2);

// Button guide ring
ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
ctx.lineWidth = 6;
ctx.beginPath();
ctx.arc(pBtnX, pBtnY, 150, 0, Math.PI * 2);
ctx.stroke();

// 4. Middle Row: 3 LEDs & ALRM RDY ALRM Label Strip
// 3D Pos: LEDs at y = -0.0010, x = -0.022, 0.0, +0.022
const ledY = toCanvasY(-0.0010);
const ledLeftX = toCanvasX(-0.022);
const ledCenterX = toCanvasX(0.0);
const ledRightX = toCanvasX(0.022);

// Glowing Heat Halos on yellow ABS shell around LEDs
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

// Single Continuous Label Strip for ALRM RDY ALRM
const stripW = 1620;
const stripH = 140;
const stripY = ledY + 165;

ctx.fillStyle = "rgba(240, 252, 100, 0.85)";
ctx.strokeStyle = "rgba(0, 0, 0, 0.20)";
ctx.lineWidth = 3;
ctx.fillRect(width / 2 - stripW / 2, stripY - stripH / 2, stripW, stripH);
ctx.strokeRect(width / 2 - stripW / 2, stripY - stripH / 2, stripW, stripH);

// Bold, Crisp, Large Black Typography for ALRM, RDY, ALRM
ctx.fillStyle = "#000000";
ctx.font = "bold 104px 'Times New Roman', 'Liberation Serif', Georgia, serif";
ctx.fillText("ALRM", ledLeftX, stripY + 2);
ctx.fillText("RDY", ledCenterX, stripY + 2);
ctx.fillText("ALRM", ledRightX, stripY + 2);

// 5. Acoustic Buzzer Port (Below Right ALRM LED)
// 3D Pos: x = +0.022, y = -0.0125
const bzX = toCanvasX(0.022);
const bzY = toCanvasY(-0.0125);
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
// Center micro port
ctx.beginPath();
ctx.arc(bzX, bzY + 6, 7, 0, Math.PI * 2);
ctx.fill();

// 6. Bottom Row: CHRG Label Strip on Left + Charging LED on Right
// 3D Pos: CHRG text at x = -0.007, y = -0.0205; Charging LED at x = +0.017, y = -0.0205
const chrgLabelX = toCanvasX(-0.007);
const chrgLabelY = toCanvasY(-0.0205);
const chrgLedX = toCanvasX(0.017);
const chrgLedY = toCanvasY(-0.0205);

// CHRG Label Tape Strip
const chrgW = 540;
const chrgH = 140;

ctx.fillStyle = "rgba(240, 252, 100, 0.85)";
ctx.strokeStyle = "rgba(0, 0, 0, 0.20)";
ctx.lineWidth = 3;
ctx.fillRect(chrgLabelX - chrgW / 2, chrgLabelY - chrgH / 2, chrgW, chrgH);
ctx.strokeRect(chrgLabelX - chrgW / 2, chrgLabelY - chrgH / 2, chrgW, chrgH);

ctx.fillStyle = "#000000";
ctx.font = "bold 104px 'Times New Roman', 'Liberation Serif', Georgia, serif";
ctx.fillText("CHRG", chrgLabelX, chrgLabelY + 2);

// Charging LED Glow Halo on yellow shell
const chrgGrad = ctx.createRadialGradient(chrgLedX, chrgLedY, 30, chrgLedX, chrgLedY, 160);
chrgGrad.addColorStop(0, "rgba(255, 120, 0, 0.45)");
chrgGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
ctx.fillStyle = chrgGrad;
ctx.beginPath();
ctx.arc(chrgLedX, chrgLedY, 160, 0, Math.PI * 2);
ctx.fill();

const buf = canvas.toBuffer("image/png");
fs.writeFileSync("scratch/test_actual_preview.png", buf);
console.log("Saved scratch/test_actual_preview.png, size:", buf.length);
