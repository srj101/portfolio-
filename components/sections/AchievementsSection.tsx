"use client";

import { motion } from 'framer-motion';

export default function AchievementsSection() {
  const achievements = [
    "Technical Scholarship for Academic Excellence (Three Semesters)",
    <span key="codeforces">Solved <a href="https://codeforces.com/profile/srjoy01" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">309 problems on Codeforces</a> with a contest rating of 889</span>,
    "Published 158 repositories on GitHub",
    "Contributed to two research papers submitted to Q1 journals on federated learning and image classification & segmentation",
    "Selected for Basis National Award Preliminary Round 2022",
    "Organized a national-level workshop on IoT, impacting over 200 participants"
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-400">Notable achievements and recognitions</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20">
                <p className="text-gray-400">{achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
