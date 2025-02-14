"use client";

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "CEO & Founder",
      company: "Sleekfusions LTD",
      period: "Ongoing",
      description: "Established and managed international health and beauty e-commerce platforms.",
      achievements: [
        "Directed marketing campaigns that increased brand awareness by 40%",
        "Supervised customer service and product launches",
        "Maintained 95% customer satisfaction rate",
        "Expanded business operations to diverse markets",
        "Platforms include Sleekfusion.shop and Sleekphones.shop"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Fiverr & Upwork",
      period: "2022 - 2023",
      description: "Delivered custom web development solutions for diverse international clients.",
      achievements: [
        "Built dynamic interfaces using React and Next.js",
        "Integrated various APIs for enhanced functionality",
        "Earned recognition for exceptional communication",
        "Maintained 5-star rating across platforms",
        "Successfully completed 50+ projects"
      ]
    },
    {
      title: "Web Developer",
      company: "Duber.uk",
      period: "2022",
      description: "Developed innovative features for a UK-based drone freelance platform.",
      achievements: [
        "Developed two portals & landing page",
        "Implemented client-side hiring system",
        "Integrated mapbox with turf.js",
        "Optimized platform performance",
        "Enhanced user experience"
      ]
    },
    {
      title: "Content Writer",
      company: "Hashnode",
      period: "Ongoing",
      description: "Technical blog writer focusing on emerging technologies and development practices.",
      achievements: [
        "Published comprehensive technical articles",
        "Built strong community following",
        "Shared in-depth development insights",
        "Contributed to developer education",
        "Created practical coding tutorials"
      ]
    },
    {
      title: "Organizer",
      company: "DIU IoT Club",
      period: "2023",
      description: "Led organization of major IoT events and educational initiatives.",
      achievements: [
        "Organized IoT FEST 2023 with 500+ participants",
        "Spearheaded community initiatives",
        "Mentored team members",
        "Coordinated workshops and seminars",
        "Fostered innovation in IoT"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Briefcase className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400">My professional journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-400">{exp.title}</h3>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="mb-2">{achievement}</li>
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