"use client";

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Altaso",
      location: "Germany",
      quote: "Was very nice to work with him. He implemented everything as I wanted it and the result speaks for itself."
    },
    {
      name: "Cobieco",
      location: "Israel",
      quote: "Reliable, fast, professional, fun to work with."
    },
    {
      name: "Victor",
      location: "India",
      quote: "His work is more Professional, I like it."
    },
    {
      name: "Jammie Harris",
      location: "US",
      quote: "Honestly really impressed with his commitment and care."
    },
    {
      name: "Emmanuelodu",
      location: "UK",
      quote: "I would like to thank Salimreza and his team for a great service and quality work throughout the project. My experience with Salimreza has been fantastic. He is such a hard worker & has a great work ethic. He put in 100% effort and will go the extra mile to give you the best work. I am delighted with the work provided and I will work with him again."
    },
    {
      name: "Qasigi",
      location: "US",
      quote: "Once again, Salim has demonstrated wonderful communication skills and his capabilities as a developer. Very responsive!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <MessageSquare className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400">What clients say about my work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 border border-blue-500/20 h-full">
                <div className="mb-4">
                  <p className="text-gray-400 italic">"{testimonial.quote}"</p>
                </div>
                <div className="mt-4">
                  <p className="text-blue-400 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
