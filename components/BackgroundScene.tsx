"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { MotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

interface BackgroundSceneProps {
  scrollProgress: MotionValue<number>;
}

export default function BackgroundScene({ scrollProgress }: BackgroundSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const rotationX = useTransform(scrollProgress, [0, 1], [0, Math.PI * 2]);
  const rotationY = useTransform(scrollProgress, [0, 1], [0, Math.PI * 4]);
  const positionZ = useTransform(scrollProgress, [0, 0.5, 1], [-5, -10, -5]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <motion.group
        rotation-x={rotationX}
        rotation-y={rotationY}
        position-z={positionZ}
      >
        <mesh ref={meshRef} position={[0, 0, -5]}>
          <torusKnotGeometry args={[9, 3, 768, 3, 4, 3]} />
          <meshPhongMaterial 
            color="#0040ff"
            wireframe
            emissive="#0040ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      </motion.group>
    </Float>
  );
}