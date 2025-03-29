"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 lg:px-24 text-center sm:text-left">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-16 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-7 flex flex-col items-center sm:items-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-snug">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={["Gitesh Makwane", "Fullstack Developer"]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
              className="text-blue-400"
            />
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 max-w-lg">
            Transforming Ideas into Stunning Web Experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <Link
              href="/#projects"
              className="px-6 inline-block py-3 w-full sm:w-auto rounded-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              My Projects
            </Link>
            <Link
              href="Gitesh_Makwane_resume.pdf"
              target="_blank"
              className="px-6 inline-block py-3 w-full sm:w-auto rounded-full bg-purple-500 hover:bg-purple-600 text-white"
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-5 flex justify-center sm:justify-end"
        >
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/anime.jpg"
                alt="hero image"
                className="object-cover rounded-full"
                layout="fill"
                objectPosition="center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


