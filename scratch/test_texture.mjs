import * as THREE from "three";
import { createCanvas, ImageData } from "@napi-rs/canvas";
import fs from "fs";
import path from "path";

// Test canvas generation and save PNG to verify visual appearance
const width = 2048;
const height = 1536;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// Safety Yellow Background
ctx.fillStyle = "#F5CE00";
ctx.fillRect(0, 0, width, height);

// Draw a test orientation grid
ctx.fillStyle = "#111827";
ctx.font = "bold 60px sans-serif";
ctx.textAlign = "center";
ctx.fillText("TOP OF TEXTURE (I/O)", width / 2, 100);
ctx.fillText("BOTTOM OF TEXTURE (HVTI)", width / 2, height - 100);
ctx.fillText("LEFT", 150, height / 2);
ctx.fillText("RIGHT", width - 150, height / 2);

const buf = canvas.toBuffer("image/png");
fs.writeFileSync("scratch/test_preview.png", buf);
console.log("Saved scratch/test_preview.png, size:", buf.length);
