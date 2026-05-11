import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdWork, MdSchool, MdEmojiEvents } from "react-icons/md";
import certificateImg from "../assets/certificate.png"

const experiences = [
  {
    type: "work",
    title: "Frontend Developer Intern",
    company: "AADA",
    period: "Jan 2026 – Present",
    bullets: [
      "Developing responsive frontend interfaces using React.js and Tailwind CSS.",
      "Collaborating with team members to improve user experience and application performance.",
      "Assisting in implementing reusable frontend components.",
      "Contributing to ongoing web development projects and feature updates.",
    ],
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    company: "TrueMinds Innovation Ltd",
    period: "Feb 2025 – May 2025",
    bullets: [
      "Collaborated with UI/UX designers, backend developers, graphic designers, and project managers on project development.",
      "Participated in team meetings, project planning, and development workflows.",
      "Assisted in building responsive and user-friendly web interfaces.",
      "Gained valuable experience in a fast-paced, collaborative environment.",
    ],
  },
];

const certifications = [
  {
    title: "Engineer Basecamp Program – Frontend Development",
    issuer: "Engineer Basecamp",
    period: "Sep 15, 2025 – Nov 30, 2025",
    description: "Certificate awarded for successfully completing the 6-week Engineer Basecamp Program...",
    image: certificateImg, // 👈 add this
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

function TimelineItem({ item }) {
  return (
    <motion.div
      className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800 last:border-transparent"
      variants={itemVariants}
    >
      {/* Dot */}
      <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900" />

      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-base">
              {item.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
              {item.company || item.issuer}
            </p>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full whitespace-nowrap">
            {item.period}
          </span>
        </div>

        {item.bullets ? (
          <ul className="mt-3 space-y-1.5">
            {item.bullets.map((b, i) => (
              <li
                key={i}
                className="text-sm text-gray-600 dark:text-gray-300 flex gap-2"
              >
                <span className="text-blue-500 mt-0.5">•</span>
                {b}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function Experience() {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <>
      <motion.div
        id="experience"
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
          Experience & Certifications
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience — unchanged */}
          <motion.div variants={containerVariants}>
            <motion.div className="flex items-center gap-2 mb-6" variants={itemVariants}>
              <MdWork className="text-2xl text-blue-600 dark:text-blue-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Work Experience</h2>
            </motion.div>
            <div className="space-y-6">
              {experiences.map((exp, i) => <TimelineItem key={i} item={exp} />)}
            </div>
          </motion.div>

          {/* Certifications with image preview */}
          <motion.div variants={containerVariants}>
            <motion.div className="flex items-center gap-2 mb-6" variants={itemVariants}>
              <MdEmojiEvents className="text-2xl text-blue-600 dark:text-blue-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Certifications</h2>
            </motion.div>
            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <motion.div key={i} variants={itemVariants}
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900" />
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-base">{cert.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{cert.issuer}</p>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full whitespace-nowrap">
                        {cert.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{cert.description}</p>

                    {/* Certificate image thumbnail */}
                    {cert.image && (
                      <div
                        className="mt-4 cursor-pointer group"
                        onClick={() => setPreviewImg(cert.image)}
                      >
                        <img
                          src={cert.image}
                          alt="Certificate"
                          className="w-full h-36 object-cover rounded-lg border border-gray-200 dark:border-gray-700 group-hover:opacity-80 transition-opacity duration-300"
                        />
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 text-center">
                          Click to view certificate
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Lightbox */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={previewImg} alt="Certificate preview" className="w-full rounded-xl shadow-2xl" />
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute -top-4 -right-4 w-9 h-9 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Experience