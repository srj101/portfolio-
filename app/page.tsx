"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import MatrixRain from '@/components/MatrixRain';
import ScrollProgress from '@/components/ScrollProgress';
import BackgroundScene from '@/components/BackgroundScene';
import CertificationsSection from '@/components/sections/CertificationsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import AffiliationsSection from '@/components/sections/AffiliationsSection';
import ImageSliderSection from '@/components/sections/ImageSliderSection';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.3, 0.3, 1]);

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, '360deg']);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <main ref={containerRef} className="relative overflow-hidden">
      <CustomCursor />
      <MatrixRain />
      <ScrollProgress progress={scrollYProgress} />
      
      <motion.div 
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ opacity }}
      >
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <BackgroundScene scrollProgress={scrollYProgress} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </motion.div>

      <Navigation />

      <motion.div
        className="absolute top-0 left-0 w-full cyberpunk-grid -z-10"
        style={{ 
          y: backgroundY,
          scale,
          height: '500vh',
          rotateX: rotateX,
        }}
      />

      <div className="relative">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <CertificationsSection />
        <AchievementsSection />
        <AffiliationsSection />
        <ImageSliderSection />
        <ContactSection />
      </div>

      <footer className="bg-black/50 backdrop-blur-md py-8 text-center text-gray-400">
        <p>© 2024 Salim Reza Joy. All rights reserved.</p>
      </footer>
    </main>
  );
}
