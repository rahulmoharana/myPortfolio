import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Very subtle rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 64, 64]} ref={meshRef} scale={2}>
        <MeshDistortMaterial
          color="#e5e5e5" 
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          wireframe={true} 
        />
      </Sphere>
    </Float>
  );
};

const HeroShape: React.FC = () => {
  return (
    <div className="absolute right-0 top-0 w-full h-full md:w-2/3 opacity-50 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.8} />
        {/* @ts-ignore */}
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default HeroShape;