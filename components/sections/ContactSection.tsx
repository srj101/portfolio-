"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 backdrop-blur-md rounded-lg p-8 border border-blue-500/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <a
                href="mailto:salimreza6835@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
              >
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Email</h3>
                  <p className="text-gray-400">salimreza6835@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+8801616346835"
                className="flex items-center space-x-4 p-4 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
              >
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-400">Phone</h3>
                  <p className="text-gray-400">+880 1616346835</p>
                </div>
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/sr-joy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
              </a>
              <a
                href="https://github.com/srj101"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
              >
                <Github className="w-6 h-6 text-blue-400" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
