"use client"; // Ensures it's a Client Component

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const EmailSection = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center text-center py-16 px-6 md:px-12"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Title & Description */}
      <motion.div className="max-w-2xl" variants={fadeInUp}>
        <h5 className="text-4xl font-extrabold text-white my-4">Let’s Connect</h5>
        <p className="text-gray-400 text-lg mb-6">
          I am open to new opportunities! Feel free to reach out if you have any questions or just want to say hi.
        </p>
      </motion.div>

      {/* Social Icons */}
      <motion.div className="flex flex-row gap-6" variants={fadeInUp}>
        {[
          { href: "https://github.com/giteshmakwane", src: "/github-icon.svg", alt: "GitHub" },
          { href: "https://www.linkedin.com/in/gitesh-makwane-2917b1245", src: "/linkedin-icon.svg", alt: "LinkedIn" },
          { href: "mailto:giteshmakwane2002@gmail.com", src: "/gmail.png", alt: "Email" },
        ].map((icon, index) => (
          <motion.a
            key={index}
            href={icon.href}
            target="_blank"
            className="p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out 
                       hover:bg-gray-800 hover:shadow-xl hover:scale-110"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={icon.src} alt={icon.alt} width={45} height={45} />
          </motion.a>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div className="mt-6" variants={fadeInUp}>
        <motion.a
          href="mailto:giteshmakwane2002@gmail.com"
          className="px-8 py-3 text-white text-lg font-semibold rounded-lg shadow-lg 
                     bg-blue-600 hover:bg-blue-500 transition-all 
                     duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello 👋
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default EmailSection;



