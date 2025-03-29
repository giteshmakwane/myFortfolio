"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative text-white py-16 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#181818] to-[#0d0d0d] opacity-60"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate Full-Stack Developer skilled in JavaScript, React, Node.js, and databases. 
            I love crafting clean, efficient, and scalable web applications.  
            Always eager to learn and explore new technologies, I believe in building impactful digital experiences.  
            Let’s create something amazing together
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;





