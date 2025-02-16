"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Daffodil International University",
      period: "Jan 2020 - June 2024",
      gpa: "CGPA: 3.77/4.00",
      achievements: [
        "Honored with a Technical Scholarship for three semesters",
        "Actively participated in coding competitions and hackathons",
        "Member of DIU HIRL Lab (Health & Informatics Research)",
        "Organizer of DIU IoT Club",
      ],
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Savar Cantonment Public School and College",
      period: "Aug 2017 - Jul 2019",
      gpa: "GPA: 4.50/5.00",
      achievements: [
        "Science Group",
        "Participated in various academic competitions",
        "Active member of the Science Club",
      ],
    },
    {
      degree: "Secondary School Certificate",
      institution: "Sristy Central School and College",
      period: "Jan 2011 - May 2017",
      gpa: "GPA: 5.00/5.00",
      achievements: [
        "Achieved perfect GPA",
        "Class representative",
        "Active participation in extracurricular activities",
      ],
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GraduationCap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-400">Academic background and achievements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12"
            >
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-400">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-lg text-blue-400 mb-4">{edu.gpa}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="mb-2">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
