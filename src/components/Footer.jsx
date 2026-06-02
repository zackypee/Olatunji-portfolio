import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer(){
    const socialLinks = [
        { icon: FaLinkedin, href: "https://linkedin.com/in/peter-olatunji-46a880278", label: "LinkedIn" },
        { icon: FaTwitter, href: "https://x.com/pheeta8", label: "Twitter" },
        { icon: FaGithub, href: "https://github.com/zackypee", label: "GitHub" }
    ];

    return(
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 w-full flex flex-col mt-16 transition-colors duration-300">
            <motion.div 
              className="flex gap-6 my-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
                {socialLinks.map((social, index) => (
                    <motion.a 
                      key={index}
                      className="text-white" 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ 
                        scale: 1.3, 
                        y: -5,
                        rotate: 360
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <social.icon className="size-6" />
                    </motion.a>
                ))}
            </motion.div>
            <motion.div 
              className="text-center pb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
                <p className="text-sm font-light text-white/90">
                  © 2025 by Zackypee • Proudly created with React and Tailwind
                </p>
            </motion.div>
        </div>
    );
}

export default Footer;