import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image Section */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Overlay with Icons */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 flex items-center justify-center opacity-0 
                     group-hover:opacity-100 group-hover:bg-opacity-80 transition-all duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </motion.div>
      </div>

      {/* Text Section */}
      <motion.div
        className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 transition-all duration-300 hover:bg-[#202020]"
        whileHover={{ backgroundColor: "#202020" }}
      >
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full transition-all duration-300 hover:bg-gray-600"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;





