import React from "react";
import { motion } from "framer-motion";
import { MdWork, MdEmojiEvents } from "react-icons/md";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "AADA",
    period: "Jan 2026 – Present",
  },
  {
    title: "Frontend Developer Intern",
    company: "TrueMinds Innovation Ltd",
    period: "Feb 2025 – May 2025",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Experience() {
  return (
    <motion.div
      id="experience"
      className="flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-24 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="md:text-3xl text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience
        </h1>
      </motion.div>

      <div className="flex items-center gap-2 mb-6">
        <MdWork className="text-2xl text-blue-600 dark:text-blue-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Work Experience
        </h2>
      </div>

      <div className="space-y-4 max-w-2xl">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800 last:border-transparent"
            variants={itemVariants}
          >
            {/* Dot */}
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900" />

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-wrap justify-between items-center gap-2">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  {exp.company}
                </p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;