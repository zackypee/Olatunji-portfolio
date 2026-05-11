import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Responsive Web Applications",
    description: "Built responsive and interactive web interfaces using React.js and Tailwind CSS. Implemented clean UI components and mobile-friendly designs.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    demo: "https://your-live-link.com", // 👈 replace with your actual URL
  },
  // Add more projects here as objects following the same shape
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Projects() {
  return (
    <motion.div
      id="projects"
      className="flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-24 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h1
        className="md:text-3xl text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        variants={itemVariants}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
             <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
              >
                <HiExternalLink className="text-base" />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;