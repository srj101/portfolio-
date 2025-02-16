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
      title: "Windows and Doors Website",
      description: "Designed responsive CSS styles and resolved technical issues, enhancing website aesthetics and functionality.",
      link: "https://casabellawindows.ca",
      technologies: ["CSS", "HTML", "JavaScript"],
      features: [
        "Responsive design",
        "Technical issue resolution",
        "Website enhancements"
      ]
    },
    {
      title: "Transport System Dashboard",
      description: "Advanced transport management system with real-time tracking.",
      link: "http://smart-transport.vercel.app",
      technologies: ["React", "AWS IoT", "GPS Integration"],
      features: [
        "Real-time GPS tracking",
        "Ticket booking",
        "GeoFence",
        "Live bus tracking"
      ]
    },
    {
      title: "Covid-19 Awareness Website",
      description: "Developed an informational website to spread awareness during the pandemic.",
      link: "https://srj101.github.io/covid-19/",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Informational content",
        "User-friendly interface"
      ]
    },
    {
      title: "Smart Wallet",
      description: "Created a digital wallet using React Native.",
      link: "https://shorturl.at/wnE0r",
      technologies: ["React Native", "Node.js", "Stripe"],
      features: [
        "Secure transactions",
        "User authentication",
        "Payment integration",
        "Transaction history"
      ]
    },
    {
      title: "Amazon Clone",
      description: "Developed a full-fledged e-commerce website with features like Stripe payments and Google authentication.",
      link: "https://6160131031c5f500e9fa92c6--srjoyamazonclone.netlify.app/",
      technologies: ["React", "Firebase", "Stripe"],
      features: [
        "Stripe payments",
        "Google authentication",
        "E-commerce functionality"
      ]
    },
    {
      title: "Restaurant Website",
      description: "Designed and implemented a responsive website with Bootstrap.",
      link: "https://srj101.github.io/Restaurent-website",
      technologies: ["HTML", "CSS", "Bootstrap"],
      features: [
        "Responsive design",
        "Online presence for a local restaurant"
      ]
    },
    {
      title: "Chatting Application",
      description: "StreamChat-powered app supporting direct and channel messaging.",
      link: "#",
      technologies: ["React", "StreamChat API"],
      features: [
        "Real-time updates",
        "Attachment support",
        "Direct and channel messaging"
      ]
    },
    {
      title: "React Blog Website",
      description: "Built a full-stack application to promote tree planting and sustainability.",
      link: "#",
      technologies: ["React", "Node.js", "Express.js"],
      features: [
        "User authentication",
        "Dynamic content",
        "Full-stack application"
      ]
    },
    {
      title: "IoT-Driven Smart Line Following Dustbin System",
      description: "Designed and implemented an IoT-enabled smart line-following dustbin using ESP32 and AWS IoT.",
      link: null,
      technologies: ["ESP32", "AWS IoT", "Sensor Integration"],
      features: [
        "Real-time automation",
        "Monitoring",
        "Sensor and actuator integration"
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
          <Code2 className="w-12 h-12 text-blue-500 mx-auto mb-4 floating" />
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
              <div className="card-3d bg-black/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20 h-full neon-glow">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
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
                  href={project.link || "mailto:salimreza6835@gmail.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {project.link ? "View Project" : "Contact for Details"} <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
