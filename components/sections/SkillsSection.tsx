"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Code, Database, Laptop, Palette, Server, Globe, Brain, Camera, Music } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "C++", "PHP", "Java", "HTML5", "CSS3", "SQL"]
    },
    {
      title: "Frontend Frameworks",
      icon: Laptop,
      skills: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "Redux", "Zustand", "Material UI", "Chakra UI", "Tailwind CSS", "Bootstrap", "ShadCN UI", "Daisy UI", "Ant Design"]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["Node.js", "Express.js", "Django", "Laravel", "Flask", "REST APIs", "GraphQL", "WebSockets", "Microservices"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "DynamoDB", "Redis", "SQLite"]
    },
    {
      title: "DevOps & Cloud",
      icon: Globe,
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD", "Linux", "Nginx", "Apache"]
    },
    {
      title: "Mobile Development",
      icon: Server,
      skills: ["React Native", "Android", "iOS", "Expo", "Mobile UI/UX", "App Store Deployment"]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "SHAP", "Keras", "Computer Vision", "NLP"]
    },
    {
      title: "Design & Creative",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects", "Premiere Pro", "UI/UX Design", "Wireframing", "Prototyping"]
    },
    {
      title: "Video & Audio",
      icon: Camera,
      skills: ["After Effects", "Premiere Pro", "CapCut", "Filmora", "Audacity", "FL Studio", "Motion Graphics", "Video Editing", "Sound Design"]
    },
    {
      title: "IoT & Hardware",
      icon: Server,
      skills: ["Arduino", "ESP32", "Sensor Integration", "IoT Protocols", "Hardware Programming"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GraduationCap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400">Technical expertise and capabilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20">
                  <Icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
