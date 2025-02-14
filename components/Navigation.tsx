"use client";

import { motion } from 'framer-motion';
import { Terminal, Code2, Briefcase, GraduationCap, Mail } from 'lucide-react';

export default function Navigation() {
  const navItems = [
    { href: "#home", icon: Terminal, label: "Home" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#projects", icon: Code2, label: "Projects" },
    { href: "#skills", icon: GraduationCap, label: "Skills" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 py-4"
    >
      <div className="bg-black/50 backdrop-blur-md rounded-full px-6 py-3">
        <ul className="flex space-x-8">
          {navItems.map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <a
                href={href}
                className="flex flex-col items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5 mb-1" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}