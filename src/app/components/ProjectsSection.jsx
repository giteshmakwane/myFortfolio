"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CryptoVerse",
    description: "A web app that provides real-time cryptocurrency data, including prices, trends, and market updates. Built with the MERN stack, it features an intuitive UI and API integration for live updates.🚀",
    image: "/images/project_1.png",
    gitUrl: "https://github.com/giteshmakwane/Crypto_Verse",
    previewUrl: "https://cryptowebite.netlify.app/",
    technologies: ["MongoDB", "Express", "React", "Node.js", "API Integration"]
  },
  {
    id: 2,
    title: "Authify",
    description: "Authify is a user login and signup system that keeps accounts safe and secure. It uses strong security features like password protection and user roles. Built with the MERN stack, it helps websites manage user access easily and securely. 🚀",
    image: "/images/project_2.png",
    gitUrl: "https://github.com/giteshmakwane/Authify",
    previewUrl: "https://authify-ui.vercel.app/",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT Authentication"]
  },
  {
    id: 3,
    title: "Blog-App",
    description: "Blog is a simple and user-friendly web app where people can write, edit, and share their thoughts online. Users can create posts, read articles, and interact with content easily. Built with the MERN stack, it provides a smooth and secure blogging experience. 🚀",
    image: "/images/project_3.png",
    gitUrl: "https://github.com/giteshmakwane/Note_app_backend",
    previewUrl: "https://nappppp.netlify.app/",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux"]
  },
  // {
  //   id: 2,
  //   title: "Authify",
  //   description: "Authify is a user login and signup system that keeps accounts safe and secure. It uses strong security features like password protection and user roles. Built with the MERN stack, it helps websites manage user access easily and securely. 🚀",
  //   image: "/images/project_2.png",
  //   gitUrl: "https://github.com/giteshmakwane/Authify",
  //   previewUrl: "https://authify-ui.vercel.app/",
  //   technologies: ["MongoDB", "Express", "React", "Node.js", "JWT Authentication"]
  // },
  // {
  //   id: 3,
  //   title: "Blog-App",
  //   description: "Blog is a simple and user-friendly web app where people can write, edit, and share their thoughts online. Users can create posts, read articles, and interact with content easily. Built with the MERN stack, it provides a smooth and secure blogging experience. 🚀",
  //   image: "/images/project_3.png",
  //   gitUrl: "https://github.com/giteshmakwane/Note_app_backend",
  //   previewUrl: "https://nappppp.netlify.app/",
  //   technologies: ["MongoDB", "Express", "React", "Node.js", "Redux"]
  // }
  
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;






