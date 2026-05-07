"use client";

import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function SignalCore() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.12;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh} position={[0, 0.1, 0]}>
        <icosahedronGeometry args={[1.5, 6]} />
        <MeshDistortMaterial
          color="#99f6e4"
          distort={0.34}
          emissive="#0f766e"
          emissiveIntensity={0.35}
          metalness={0.2}
          roughness={0.38}
          speed={1.6}
          transparent
          opacity={0.88}
        />
      </mesh>
    </Float>
  );
}

function OrbitingNodes() {
  const group = useRef<Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = state.clock.elapsedTime * 0.08;
    group.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={group}>
      {Array.from({ length: 10 }).map((_, index) => {
        const angle = (index / 10) * Math.PI * 2;
        const radius = index % 2 ? 2.45 : 2.05;
        return (
          <mesh
            key={index}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius * 0.35,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.045 + (index % 3) * 0.018, 18, 18]} />
            <meshStandardMaterial
              color={index % 2 ? "#f97316" : "#38bdf8"}
              emissive={index % 2 ? "#9a3412" : "#0369a1"}
              emissiveIntensity={0.8}
            />
          </mesh>
        );
      })}
    </mesh>
  );
}

export function PortfolioScene() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight intensity={1.8} position={[3, 3, 5]} />
          <pointLight color="#fb923c" intensity={16} position={[-3, -1, 2]} />
          <SignalCore />
          <OrbitingNodes />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.35} />
        </Suspense>
      </Canvas>
    </div>
  );
}
