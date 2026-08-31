import * as THREE from "three";

function generateSolidHardHat() {
  const uSegments = 64;
  const vSegments = 32;

  const radiusX = 0.088; // 88mm
  const radiusZ = 0.104; // 104mm
  const domeHeight = 0.096; // 96mm

  // Test grid
  const verts = [];
  for (let j = 0; j <= vSegments; j++) {
    const v = j / vSegments;
    for (let i = 0; i <= uSegments; i++) {
      const u = i / uSegments;
      const theta = u * Math.PI * 2;
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);

      let x, y, z;
      if (v <= 0.75) {
        // Dome
        const t = v / 0.75;
        const phi = (t * Math.PI) / 2;
        const rX = radiusX * Math.sin(phi);
        const rZ = radiusZ * Math.sin(phi);
        y = domeHeight * Math.cos(phi);

        x = rX * cosT;
        z = rZ * sinT;
      } else {
        // Brim
        const s = (v - 0.75) / 0.25;
        let extZ = 0.008;
        let extX = 0.008;
        let slopeY = -0.002 * s;

        if (sinT > 0) {
          // Front visor
          extZ += 0.024 * Math.pow(sinT, 2) * s;
          slopeY -= 0.008 * Math.pow(sinT, 2) * s;
        } else {
          // Rear nape
          extZ += 0.015 * Math.pow(-sinT, 2) * s;
          slopeY -= 0.004 * Math.pow(-sinT, 2) * s;
        }

        x = (radiusX + extX * Math.abs(cosT)) * cosT;
        z = (radiusZ + extZ) * sinT;
        y = slopeY;
      }
      verts.push(x, y, z);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  const box = new THREE.Box3().setFromBufferAttribute(geo.getAttribute("position"));
  console.log("Compact Hard Hat Size:", box.getSize(new THREE.Vector3()).toArray().map(v => (v * 1000).toFixed(1) + "mm"));
}

generateSolidHardHat();
