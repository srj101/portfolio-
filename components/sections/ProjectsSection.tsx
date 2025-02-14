"use client";

import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Quran Web Application",
      description: "A modern, responsive Quran web application with dynamic API integration.",
      link: "https://quran-wise.vercel.app",
      technologies: ["Next.js", "Tailwind CSS", "API Integration"],
      features: [
        "Dynamic API integration",
        "Real-time verse tracking",
        "Audio playback",
        "Infinite scroll support"
      ]
    },
    {
      title: "Transport System Dashboard",
      description: "Advanced transport management system with real-time tracking.",
      link: "https://demo-transport.vercel.app",
      technologies: ["React", "AWS IoT", "GPS Integration"],
      features: [
        "Real-time GPS tracking",
        "Ticket booking",
        "GeoFence",
        "Live bus tracking"
      ]
    },
    {
      title: "Smart Wallet",
      description: "Digital wallet application with secure transaction capabilities.",
      link: "https://demo-wallet.vercel.app",
      technologies: ["React Native", "Node.js", "Stripe"],
      features: [
        "Secure transactions",
        "User authentication",
        "Payment integration",
        "Transaction history"
      ]
    },
    {
      title: "Windows and Doors Website",
      description: "Custom website for a windows and doors business.",
      link: "#",
      technologies: ["React", "Tailwind CSS", "Next.js"],
      features: [
        "Product catalog",
        "Custom quote system",
        "Responsive design",
        "SEO optimization"
      ]
    },
    {
      title: "Covid-19 Awareness Website",
      description: "Informational website for COVID-19 awareness and updates.",
      link: "#",
      technologies: ["React", "Material UI", "Chart.js"],
      features: [
        "Real-time statistics",
        "Interactive maps",
        "Prevention guidelines",
        "News updates"
      ]
    },
    {
      title: "Amazon Clone",
      description: "Full-featured e-commerce platform with modern functionality.",
      link: "#",
      technologies: ["React", "Firebase", "Stripe"],
      features: [
        "User authentication",
        "Shopping cart",
        "Payment processing",
        "Order tracking"
      ]
    },
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering capabilities.",
      link: "#",
      technologies: ["Bootstrap", "JavaScript", "PHP"],
      features: [
        "Menu management",
        "Online ordering",
        "Table reservations",
        "Customer reviews"
      ]
    },
    {
      title: "Chatting Application",
      description: "Real-time chat application with modern features.",
      link: "#",
      technologies: ["React", "StreamChat", "Firebase"],
      features: [
        "Real-time messaging",
        "File sharing",
        "User presence",
        "Channel management"
      ]
    },
    {
      title: "React Blog Website",
      description: "Full-stack blog platform promoting environmental awareness.",
      link: "#",
      technologies: ["React", "Node.js", "MongoDB"],
      features: [
        "User authentication",
        "Content management",
        "Comment system",
        "Rich text editor"
      ]
    },
    {
      title: "IoT Smart Dustbin System",
      description: "IoT-enabled smart line following dustbin system.",
      link: "#",
      technologies: ["ESP32", "AWS IoT", "React"],
      features: [
        "Real-time monitoring",
        "Automated navigation",
        "Sensor integration",
        "Remote control"
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Code2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400">Featured works and contributions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20 h-full transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-400">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href="mailto:salimreza6835@gmail.com"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Contact for Details <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}