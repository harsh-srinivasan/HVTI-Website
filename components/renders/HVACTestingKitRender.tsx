"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/* ================================================================
   HIGH VOLTAGE AC TESTING KIT 3D RENDER COMPONENT
   File: components/renders/HVACTestingKitRender.tsx

   Professional product-photography-grade 3D WebGL viewer:
   - 100% transparent canvas over dark HVTI background
   - Realistic multi-tier contact shadows & ambient occlusion
   - Precision studio PBR lighting with subtle purple edge highlights
   - Restrained, smooth auto-rotation and interactive 360° orbit
   ================================================================ */

function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.clearRect(0, 0, 1024, 512);

    // 1. Broad soft ambient shadow under whole testing setup
    const mainGrad = ctx.createRadialGradient(512, 256, 40, 512, 256, 460);
    mainGrad.addColorStop(0, "rgba(0, 0, 0, 0.55)");
    mainGrad.addColorStop(0.35, "rgba(0, 0, 0, 0.35)");
    mainGrad.addColorStop(0.70, "rgba(0, 0, 0, 0.10)");
    mainGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = mainGrad;
    ctx.beginPath();
    ctx.ellipse(512, 256, 460, 180, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. Focused Contact Shadows under each of the 4 units
    const units = [
      { x: 190, y: 256, rx: 110, ry: 75, opacity: 0.75 }, // Control Cabinet
      { x: 410, y: 256, rx: 85, ry: 65, opacity: 0.70 },  // Transformer A
      { x: 610, y: 256, rx: 85, ry: 70, opacity: 0.72 },  // Transformer B
      { x: 830, y: 256, rx: 110, ry: 80, opacity: 0.78 }, // Transformer C
    ];

    units.forEach((u) => {
      const grad = ctx.createRadialGradient(u.x, u.y, 8, u.x, u.y, u.rx);
      grad.addColorStop(0, `rgba(0, 0, 0, ${u.opacity})`);
      grad.addColorStop(0.45, `rgba(0, 0, 0, ${u.opacity * 0.55})`);
      grad.addColorStop(0.80, `rgba(0, 0, 0, ${u.opacity * 0.18})`);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(u.x, u.y, u.rx, u.ry, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    // 3. Dense caster wheel & skid contact points
    const wheelPoints = [
      // Cabinet wheels
      { x: 130, y: 215 }, { x: 250, y: 215 }, { x: 130, y: 295 }, { x: 250, y: 295 },
      // Trans A feet
      { x: 360, y: 215 }, { x: 460, y: 215 }, { x: 360, y: 295 }, { x: 460, y: 295 },
      // Trans B wheels
      { x: 550, y: 210 }, { x: 670, y: 210 }, { x: 550, y: 300 }, { x: 670, y: 300 },
      // Trans C wheels
      { x: 760, y: 205 }, { x: 900, y: 205 }, { x: 760, y: 305 }, { x: 900, y: 305 },
    ];

    wheelPoints.forEach((pt) => {
      const wGrad = ctx.createRadialGradient(pt.x, pt.y, 2, pt.x, pt.y, 24);
      wGrad.addColorStop(0, "rgba(0, 0, 0, 0.85)");
      wGrad.addColorStop(0.4, "rgba(0, 0, 0, 0.45)");
      wGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = wGrad;
      ctx.beginPath();
      ctx.ellipse(pt.x, pt.y, 24, 14, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createTechnicalGridTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.clearRect(0, 0, 1024, 1024);

    const centerX = 512;
    const centerY = 512;

    // Faint concentric calibration rings
    for (const r of [160, 280, 400, 480]) {
      ctx.strokeStyle = "rgba(168, 85, 247, 0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Faint grid lines with soft radial mask
    const gridSize = 48;
    for (let x = 0; x <= 1024; x += gridSize) {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }

    for (let y = 0; y <= 1024; y += gridSize) {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    // Radial mask to make grid fade out softly at perimeter
    const maskGrad = ctx.createRadialGradient(centerX, centerY, 150, centerX, centerY, 510);
    maskGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
    maskGrad.addColorStop(0.7, "rgba(0, 0, 0, 0.4)");
    maskGrad.addColorStop(1, "rgba(0, 0, 0, 1)");

    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = maskGrad;
    ctx.fillRect(0, 0, 1024, 1024);
    ctx.globalCompositeOperation = "source-over";
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function HVACTestingKitRender() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup (Natural Industrial Product Perspective)
    const isMobile = container.clientWidth < 500;
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 37 : 34,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(2.8, 1.9, 5.2);

    // 3. WebGL Renderer with Full Alpha Transparency
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.outline = "none";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.background = "transparent";

    container.appendChild(renderer.domElement);

    // 4. OrbitControls with smooth damping
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.minDistance = 2.4;
    controls.maxDistance = 7.5;
    controls.minPolarAngle = Math.PI * 0.18; // 32 deg
    controls.maxPolarAngle = Math.PI * 0.48; // 86 deg (prevent viewing from below ground)
    controls.target.set(0, 0.72, 0);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2; // ~10 deg/sec slow graceful rotation

    let resumeTimeout: NodeJS.Timeout | null = null;
    const handleStartInteraction = () => {
      controls.autoRotate = false;
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };
    const handleEndInteraction = () => {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        controls.autoRotate = true;
      }, 2800);
    };

    controls.addEventListener("start", handleStartInteraction);
    controls.addEventListener("end", handleEndInteraction);

    // 5. Professional Product Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Main Studio Key Light (Top-Front-Right)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4.5, 7.5, 5.5);
    scene.add(keyLight);

    // Soft Studio Fill Light (Front-Left)
    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 1.1);
    fillLight.position.set(-4.5, 4.0, 4.0);
    scene.add(fillLight);

    // Subtle Brand Purple Rim Light (Top-Rear-Right)
    const purpleRimLight = new THREE.DirectionalLight(0xa855f7, 1.5);
    purpleRimLight.position.set(1.5, 4.5, -4.5);
    scene.add(purpleRimLight);

    // Subtle Warm Orange Accent Bounce Light (Lower-Left-Rear)
    const orangeAccentLight = new THREE.DirectionalLight(0xf97316, 0.45);
    orangeAccentLight.position.set(-4.5, 0.8, -2.0);
    scene.add(orangeAccentLight);

    // 6. Faint Technical Grid Plane
    const gridTexture = createTechnicalGridTexture();
    const gridGeo = new THREE.PlaneGeometry(6.0, 6.0);
    const gridMat = new THREE.MeshBasicMaterial({
      map: gridTexture,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.rotation.x = -Math.PI / 2;
    gridMesh.position.set(0, 0.001, 0);
    scene.add(gridMesh);

    // 7. Multi-Tier Realistic Contact Shadow Plane
    const shadowTexture = createContactShadowTexture();
    const shadowGeo = new THREE.PlaneGeometry(5.2, 2.6);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.80,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, 0.002, 0);
    scene.add(shadowMesh);

    // 8. Load Refined GLB Model
    const loader = new GLTFLoader();
    let modelGroup: THREE.Group | null = null;

    loader.load(
      "/models/hv-ac-testing-kit.glb",
      (gltf) => {
        modelGroup = gltf.scene;

        modelGroup.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        scene.add(modelGroup);
        setIsLoaded(true);
      },
      undefined,
      (err) => {
        console.error("Error loading HV AC Testing Kit GLB:", err);
        setLoadError("Failed to load 3D model");
      }
    );

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.fov = width < 500 ? 37 : 34;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // 10. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock.getDelta();
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 11. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      controls.removeEventListener("start", handleStartInteraction);
      controls.removeEventListener("end", handleEndInteraction);
      controls.dispose();
      resizeObserver.disconnect();
      gridTexture.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      shadowTexture.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();

      if (modelGroup) {
        modelGroup.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m) => m.dispose());
            } else if (mesh.material) {
              mesh.material.dispose();
            }
          }
        });
      }

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="
        product-3d-viewer-container
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-transparent
      "
    >
      {/* 3D Canvas Mount (100% transparent on top of continuous page atmosphere) */}
      <div
        ref={containerRef}
        className="
          relative
          z-10
          h-full
          w-full
          cursor-grab
          bg-transparent
          active:cursor-grabbing
        "
        style={{ minHeight: "330px" }}
      />

      {/* Loading Indicator */}
      {!isLoaded && !loadError && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            flex
            flex-col
            items-center
            justify-center
            gap-3
            bg-transparent
            text-white/40
          "
        >
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-[#F97316]" />
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-white/50">
            Loading 3D System...
          </span>
        </div>
      )}

      {/* Interaction Hint Overlay */}
      {isLoaded && (
        <div
          className="
            pointer-events-none
            absolute
            bottom-3
            right-4
            z-20
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-[#080D17]/75
            px-3
            py-1
            text-[10px]
            font-medium
            tracking-wider
            text-white/60
            backdrop-blur-sm
          "
        >
          <svg
            className="h-3 w-3 text-[#F97316]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
          <span>360° Interactive</span>
        </div>
      )}
    </div>
  );
}
