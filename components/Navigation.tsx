"use client";

import { motion } from 'framer-motion';
import { Terminal, Code2, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const navItems = [
    { href: "#home", icon: Terminal, label: "Home" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#projects", icon: Code2, label: "Projects" },
    { href: "#skills", icon: GraduationCap, label: "Skills" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    const id = href.substring(1);
    scrollToSection(id);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 pb-4"
    >
      <div className="bg-black/50 backdrop-blur-md rounded-full px-6 py-3 flex justify-center">
        <ul className="flex space-x-4 md:space-x-8 overflow-x-auto">
          {navItems.map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(event) => handleClick(href, event)}
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
