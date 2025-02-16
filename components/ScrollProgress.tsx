"use client";

import { motion, MotionValue } from 'framer-motion';

interface ScrollProgressProps {
  progress: MotionValue<number>;
}

export default function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <motion.div 
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 h-48 w-1 bg-blue-500/20 rounded-full"
      style={{
        scaleY: progress
      }}
    >
      <motion.div 
        className="absolute top-0 left-0 w-full bg-blue-500 rounded-full"
        style={{
          height: progress.get() * 100 + '%',
          transition: 'height 0.1s linear'
        }}
      />
      <motion.div
        className="absolute -left-2 w-5 h-5 bg-blue-500 rounded-full"
        style={{
          top: progress.get() * 100 + '%',
          transform: 'translateY(-50%)',
          boxShadow: '0 0 10px rgba(0, 64, 255, 0.5), 0 0 20px rgba(0, 64, 255, 0.3)'
        }}
      />
    </motion.div>
  );
}