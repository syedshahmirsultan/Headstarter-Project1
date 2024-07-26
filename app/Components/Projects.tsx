"use client"
import { motion } from 'framer-motion';
import React from 'react';



const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
  };

const Projects = () => {
    return (
        <section id="projects" className="ml-8 pt-40 md:pt-60 flex flex-col items-center">
        <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-4xl md:text-6xl font-bold text-white text-center md:text-start tracking-wider mb-2"
        >
            Projects
        </motion.h1>
        <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="block h-3 rounded-full bg-gradient-to-r  from-teal-500 to-teal-700 w-44 md:w-72"
        ></motion.span>
        </section>
    );
}

export default Projects;
