"use client"
import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
const About = () => {
    return (
        <section className="ml-8 pt-40 md:pt-60">
            <motion.h1 initial={{y:-2000}} animate={{y:0}}
        transition={{duration:"1"
        }} className="text-4xl md:text-6xl font-bold text-white text-center md:text-start  tracking-wider mb-2">About Me</motion.h1>
            <motion.span initial={{y:-2000}} animate={{y:0}}
        transition={{duration:"1"
        }} className="block h-2 rounded-full bg-gradient-to-r ml-14 md:ml-0 from-teal-500 to-teal-700 w-48 md:w-80 "></motion.span>
            <motion.div initial={{y:-2000}} animate={{y:0}}
        transition={{duration:"1"
        }} className=" mt-16 flex flex-col md:flex-row gap-y-16 md:justify-between">
        <Image   src="/images/shahmir.png" alt="Syed Shahmir Sultan Image" width={350} height={350} className="  pr-4 md:p-0 object-contain md:object-cover"/>
        <motion.p initial={{y:-2000}} animate={{y:0}}
        transition={{duration:"1"
        }} className=" ml-1 md:ml-8 text-lg md:text-xl pr-2 md:pr-4 font-medium text-gray-100">I am a 17 year old High School 3rd year student who is passionate about <motion.span className="text-teal-400 font-bold">Programming</motion.span> and <motion.span className="font-bold text-teal-400">Technology</motion.span> .</motion.p>
            </motion.div>
        </section>
    );
}

export default About;
