"use client";

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <Terminal className="w-16 h-16 text-blue-500" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 glitch"
          >
            Salim Reza Joy
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-4"
          >
            Full Stack Developer & Tech Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-blue-400 italic mb-8 max-w-2xl mx-auto"
          >
            "Crafting digital experiences that bridge imagination and innovation, one line of code at a time."
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-x-4"
          >
            <a
              href="mailto:salimreza6835@gmail.com"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="mailto:salimreza6835@gmail.com"
              className="inline-block px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <p className="text-sm text-gray-500">Scroll to Explore</p>
      </div>
    </section>
  );
}