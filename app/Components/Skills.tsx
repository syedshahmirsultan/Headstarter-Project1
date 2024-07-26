"use client"
import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
    return (
        <section className="ml-8 pt-40 md:pt-60 flex flex-col items-center">
        <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white text-center tracking-widest mb-2"
        >
            Skills
        </motion.h1>
        <motion.span 
            className="block h-3 rounded-full bg-gradient-to-r  ml-14 md:ml-0 from-teal-500 to-teal-700 w-32 md:w-52"
        ></motion.span> 
        
        
        </section>
    );
}

export default Skills;
