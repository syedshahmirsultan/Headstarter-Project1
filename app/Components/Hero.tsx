"use client"
import {motion} from 'framer-motion'
const Hero = () => {
    return (
        <div className='flex flex-col gap-y-3 pt-40 md:pt-0 justify-center md:items-center h-full'>
        <motion.h1 initial={{x:-2000}} animate={{x:0}}
        transition={{duration:"2"
        }}
        className='text-2xl md:text-6xl font-bold text-gray-100'>Hi, I 'm <span className="text-teal-400">Syed Shahmir Sultan</span></motion.h1>
        <motion.p  initial={{x:-2000}} animate={{x:0}}
        transition={{duration:"2"
        }}
        className="text-white font-bold text-xl md:text-5xl"
        > A Full-Stack Web Developer</motion.p>
        </div>
    );
}

export default Hero;
