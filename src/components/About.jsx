import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/profile-img.jpeg"

function About(){
    const skills = [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React JS", level: 70 },
        { name: "Tailwind", level: 80 }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return(
        <motion.div 
          id="about" 
          className="flex flex-col px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-20 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
              <h1 className="md:text-3xl text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                About Me
              </h1>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 px-6 grid-rows-2 gap-8">
                <motion.div 
                  className="row-span-2 flex justify-center md:justify-end"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="relative group w-fit h-fit"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      className="w-64 h-80 object-cover rounded-xl shadow-xl" 
                      src={aboutImg} 
                      alt="About"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="space-y-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed"
                  variants={containerVariants}
                >
                    <motion.p 
                      variants={itemVariants}
                      whileHover={{ x: 10, color: "rgb(59, 130, 246)" }}
                      transition={{ duration: 0.2 }}
                    >
                      I'm a Frontend Developer with 1+ year of experience building modern, responsive web applications. I specialize in JavaScript, React and Tailwind CSS, creating interfaces that are both visually appealing and highly functional.
                    </motion.p>
                    <motion.p 
                      variants={itemVariants}
                      whileHover={{ x: 10, color: "rgb(59, 130, 246)" }}
                      transition={{ duration: 0.2 }}
                    >
                      I'm driven by the challenge of turning complex problems into elegant solutions, always keeping the user experience at the forefront of my work.
                    </motion.p>
                </motion.div>
                
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                >
                    {skills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                      >
                        <div className="flex justify-between mb-2">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </h3>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;