"use client";

import { motion } from 'framer-motion';

export default function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Technical Essentials Course",
      year: "2022",
      certificateLink: "https://shorturl.at/KWMKn"
    },
    {
      title: "Mobile Development in IoT Course",
      year: "2022",
      certificateLink: "https://shorturl.at/2IpqD"
    },
    {
      title: "Common Etiquette of Life: A 30-Minute Lesson",
      year: "2022",
      certificateLink: "https://drive.google.com/drive/folders/1-3UuNYi1bYk13KeE9JCXWls3EInzJDVm?usp=sharing"
    },
    {
      title: "Positivity: How to Build a Positive Mentality",
      year: "2022",
      certificateLink: "https://internship.daffodilvarsity.edu.bd/?app=home&cmd=reportsViewPDFskin&project_number=27585"
    },
    {
      title: "Coursera: Full-Stack Web Development with React Specialization",
      year: "2020",
      certificateLink: null
    },
    {
      title: "Udemy: Complete React Developer in 2021 (with Redux, Hooks, GraphQL)",
      year: null,
      certificateLink: null
    },
    {
      title: "Motion Design School: MAD VFX in After Effects",
      year: null,
      certificateLink: null
    },
    {
      title: "Udemy: ChatGPT Complete Guide - Learn Midjourney, ChatGPT 4 & More",
      year: null,
      certificateLink: null
    },
    {
      title: "WordPress Theme Development - RR Foundation Bangladesh",
      year: null,
      certificateLink: null
    },
    {
      title: "Udemy: JavaScript Algorithms and Data Structures Masterclass",
      year: null,
      certificateLink: null
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-400">My certifications and completed courses</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-400">{cert.title}</h3>
                  {cert.year && <div className="text-gray-400">{cert.year}</div>}
                </div>
                {cert.certificateLink && (
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
