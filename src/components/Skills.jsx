import React from "react";
import { motion } from "framer-motion";

const usingNow = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const learning = [
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function SkillGrid({ skills }) {
  return (
    <div className="flex flex-wrap gap-6 mt-4">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center gap-2 group cursor-default"
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group-hover:shadow-md group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-all duration-300 p-3">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <motion.div
      id="skills"
      className="flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-24 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Section heading */}
      <motion.div variants={itemVariants} className="flex justify-center mb-12">
        <div className="border-2 border-gray-900 dark:border-white px-12 py-3">
          <h1 className="text-lg font-bold tracking-[0.3em] text-gray-900 dark:text-white uppercase">
            Skills
          </h1>
        </div>
      </motion.div>

      <div className="space-y-10 max-w-3xl mx-auto w-full">
        {/* Using Now */}
        <motion.div variants={itemVariants}>
          <p className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-4">
            Using Now :
          </p>
          <SkillGrid skills={usingNow} />
        </motion.div>

        {/* Learning */}
        <motion.div variants={itemVariants}>
          <p className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest mb-4">
            Learning :
          </p>
          <SkillGrid skills={learning} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;