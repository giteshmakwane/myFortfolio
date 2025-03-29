"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "April 2023 - June 2023",
    company: "Oasis Infobyte",
    role: "Frontend Developer",
    description:
      "Designed and built modern and user-friendly web applications using React.js, Next.js, and Tailwind CSS. Improved UI performance, ensured responsiveness, and added interactive features. Wrote clean, reusable code, used Git/GitHub for version control, and tested the UI for bugs, leveraging MERN stack skills.",
    skills: ["Node.js", "Express.js", "Tailwind CSS", "TypeScript", "MongoDB"],
  },
];

const WorkExperience = () => {
  return (
    <section className="text-white py-16 px-6 sm:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="p-6 rounded-lg shadow-lg border border-gray-700"
          >
            <p className="text-gray-400">{exp.date}</p>
            <h3 className="text-xl font-semibold mt-2">{exp.company}</h3>
            <p className="text-gray-300 font-medium">{exp.role}</p>
            <p className="text-gray-400 mt-2">{exp.description}</p>
            
            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;