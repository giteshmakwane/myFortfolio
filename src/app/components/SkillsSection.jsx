"use client";
import { motion } from "framer-motion";
import { FaJs, FaJava, FaReact, FaNode, FaGit, FaGithub } from "react-icons/fa";
import { SiCss3, SiHtml5, SiExpress, SiMongodb, SiTailwindcss, SiMysql, SiPostman } from "react-icons/si";
import Link from "next/link";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-purple-500 text-4xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-400 text-4xl" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400 text-4xl" /> },
  { name: "NodeJS", icon: <FaNode className="text-green-500 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
  { name: "Git", icon: <FaGit className="text-orange-500 text-4xl" /> },
  { name: "Github", icon: <FaGithub className="text-white text-4xl" /> }
];

export default function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative text-white py-20 px-5 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] to-[#181818] opacity-70 animate-gradient-move"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-5">Skills & Tools</h2>
        <p className="text-center text-gray-400 mb-10">
          My primary focus is on frontend and backend development. Full-stack is the way to go xD.
        </p>

        {/* Skills Grid with Hover Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center transition-transform transform hover:scale-110"
              whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill.icon}
              <p className="mt-2 text-sm text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}






