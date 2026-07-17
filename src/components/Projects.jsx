import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import truemindsImg from "../assets/truemind-page.png"
import chuksKitchenImg from "../assets/chuks-kitchen.png"
import movieAppImg from "../assets/movie-app.png"
import ecommerceImg from "../assets/e-commerce.png"

const projects = [
  {
    title: "Trueminds Learning Management System",
    description:
      "A specialized Learning Management System (LMS) designed for TrueMinds Team Hotel. It serves as a dedicated digital hub for employee training, onboarding, and professional development. Built as a collaborative team project with a fully responsive React frontend and robust backend integration.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Node.js"],
    image: truemindsImg,
    demo: "https://trueminds-lms-teamhotel-tqmd.vercel.app/",
  },
  {
    title: "Chuks Kitchen",
    description:
      "A high-performance Investment & Loan Calculator designed to bring transparency to digital lending. Recognizing that financial clarity is key to user trust, this platform features synchronized calculators, real-time feedback, and a clean dashboard built with accessibility in mind.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    image: chuksKitchenImg,
    demo: "chuks-kitchen-v8ef.vercel.app/",
  },
  {
    title: "Movie App",
    description:
      "A full-featured, user-centric real estate web application connecting Landlords, Agents, and Tenants. This platform allows property owners and agents to effortlessly list and manage properties for rent or sale, while tenants can search, filter, and explore listings with ease.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    image: movieAppImg,
    demo: "https://movie-app-ten-ebon.vercel.app/",
  },
  {
    title: "E-commerce",
    description:
      "A full-featured, user-centric real estate web application connecting Landlords, Agents, and Tenants. This platform allows property owners and agents to effortlessly list and manage properties for rent or sale, while tenants can search, filter, and explore listings with ease.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    image: ecommerceImg,
    demo: "https://movie-app-ten-ebon.vercel.app/",
  },
];

const PREVIEW_LENGTH = 120;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > PREVIEW_LENGTH;
  const displayText =
    expanded || !isLong
      ? project.description
      : project.description.slice(0, PREVIEW_LENGTH) + "...";

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Project Screenshot */}
      <div className="relative w-full h-52 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        ) : (
          /* Placeholder when no image is set yet */
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500">Add project screenshot</p>
            </div>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
          {displayText}
          {isLong && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="ml-1 text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none"
            >
              {expanded ? " See Less" : " See More"}
            </button>
          )}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors duration-300 border border-gray-900 dark:border-white"
          >
            Check It Out
          </a>
        </div>
      </div>
    </motion.div>
  );
}

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
      {/* Section heading */}
      <motion.div variants={itemVariants} className="flex justify-center mb-12">
        <div className="border-2 border-gray-900 dark:border-white px-12 py-3">
          <h1 className="text-lg font-bold tracking-[0.3em] text-gray-900 dark:text-white uppercase">
            Portfolio
          </h1>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;