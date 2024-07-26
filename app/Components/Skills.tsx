"use client"
import skillsData from '@/data';
import { motion } from 'framer-motion';
import React from 'react';

const fadeInAnimationVariant = (index:number) => ({
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    },
});

const Skills = () => {
    return (
        <section id="skills" className="ml-8 pt-40 md:pt-60 flex flex-col items-center">
            <h1 
                className="text-4xl md:text-6xl font-bold text-white text-center tracking-widest mb-2"
            >
                Skills
            </h1>
            <span 
                className="block h-3 rounded-full bg-gradient-to-r ml-14 md:ml-0 from-teal-500 to-teal-700 w-32 md:w-52"
            ></span>
            <ul className="max-w-4xl mx-auto flex mt-12 flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => {
                    const variants = fadeInAnimationVariant(index);
                    return (
                        <motion.li
                            variants={variants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            key={index}
                            className="bg-gray-100 border cursor-pointer border-black/0.1 font-semibold rounded-xl px-4 py-2"
                        >
                            {skill}
                        </motion.li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Skills;
