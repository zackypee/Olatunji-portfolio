import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cert1Img from "../assets/certificate.png";
import cert2Img from "../assets/trueminds.jpeg";

const certifications = [
  {
    tag: "PROGRAM",
    company: "Engineer Basecamp",
    role: "Frontend Developer",
    dateIssued: "Nov 30, 2025",
    credentialId: "EBC-CERT-2025-FE",
    companySite: "https://engineerbasecamp.com",
    pdfUrl: null, // replace with: cert1Img or a PDF URL
    image: null,  // replace with: cert1Img
  },
  {
    tag: "INTERNSHIP",
    company: "Truemind Innovation Limited",
    role: "Frontend Developer",
    dateIssued: "May 2026",
    credentialId: "INT-CERT-CAR...",
    companySite: "https://trueminds.com",
    pdfUrl: null, // replace with: cert2Img or a PDF URL
    image: null,  // replace with: cert2Img
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CertCard({ cert, onView }) {
  return (
    <motion.div
      className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-6 shadow-lg border border-gray-700 dark:border-gray-800 max-w-sm w-full"
      variants={itemVariants}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Top row: badge icon + tag */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm p-2">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
            <circle cx="12" cy="12" r="10" fill="#2563EB" />
            <path
              d="M8 12l2.5 2.5L16 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="10" stroke="#1D4ED8" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <span className="text-xs font-bold tracking-widest text-blue-400 border border-blue-500/40 bg-blue-500/10 px-3 py-1 rounded-full uppercase">
          {cert.tag}
        </span>
      </div>

      {/* Company name */}
      <h3 className="text-blue-400 font-bold text-xl leading-tight mb-4">
        {cert.company}
      </h3>

      {/* Details grid */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Role:</span>
          <span className="text-xs font-semibold text-white uppercase tracking-wide">
            {cert.role}
          </span>
        </div>
        <div className="h-px bg-gray-700" />
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Date Issued:</span>
          <span className="text-xs font-semibold text-white uppercase tracking-wide">
            {cert.dateIssued}
          </span>
        </div>
        <div className="h-px bg-gray-700" />
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Credential ID:</span>
          <span className="text-xs font-semibold text-white uppercase tracking-wide">
            {cert.credentialId}
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <a
          href={cert.companySite}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs font-bold uppercase tracking-widest py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
        >
          Company Site
        </a>
        <button
          onClick={() => onView(cert)}
          className="flex-1 text-xs font-bold uppercase tracking-widest py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200"
        >
          View PDF
        </button>
      </div>
    </motion.div>
  );
}

function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <>
      <motion.div
        id="certifications"
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
              Certifications
            </h1>
          </div>
        </motion.div>

        {/* Cards row */}
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} onView={setActiveCert} />
          ))}
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeCert.image ? (
                <img
                  src={activeCert.image}
                  alt={`${activeCert.company} certificate`}
                  className="w-full rounded-2xl shadow-2xl"
                />
              ) : (
                /* Placeholder when no cert image is set */
                <div className="w-full h-80 bg-gray-800 rounded-2xl flex flex-col items-center justify-center gap-4">
                  <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-400 text-sm font-medium">
                    Add your certificate image to see it here
                  </p>
                  <p className="text-gray-600 text-xs">
                    Import the image and set it in the certifications array
                  </p>
                </div>
              )}

              {/* Close button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform font-bold text-lg"
              >
                ✕
              </button>

              {/* Cert name below image */}
              <p className="text-center text-white/70 text-sm mt-4 font-medium">
                {activeCert.company} — {activeCert.role}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Certifications;