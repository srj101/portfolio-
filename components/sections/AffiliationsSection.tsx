"use client";

import { motion } from 'framer-motion';

export default function AffiliationsSection() {
  const affiliations = [
    "Member, Nobopushpo Sports and Social Welfare Organization (Since 2019)",
    "Member, DIU HIRL Lab (Health & Informatics Research), contributing to impactful studies",
    "Organizer, DIU IoT Club (2023), driving IoT education and outreach",
    "Contributor to GitHub Open Source Projects, enhancing global developer resources"
  ];

  return (
    <section id="affiliations" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Affiliations</h2>
          <p className="text-gray-400">Organizations and communities I'm part of</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {affiliations.map((affiliation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20">
                <p className="text-gray-400">{affiliation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
