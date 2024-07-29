"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
  };

function Details({ position, company, time, description } : { position: string, company: string, time: string, description: string }) {
    return (
        <motion.li  initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants} className='ml-0 md:ml-8 my-8 flex items-start'>
            <motion.div  initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInVariants} className='flex-shrink-0 w-4 h-4 mr-2 md:mr-4 rounded-full bg-teal-400 mt-1'></motion.div>
            <motion.div  initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInVariants} className='ml-1 md:ml-4'>
                <motion.h2  initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInVariants} className="text-lg md:text-xl text-white font-bold">{position} @ <motion.span className="text-teal-400 font-bold">{company}</motion.span></motion.h2>
                <motion.p  initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInVariants}  className="text-white font-semibold text-md md:text-lg">{time} || <motion.span className="text-teal-400">Remote</motion.span></motion.p>
                <motion.p  initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInVariants} className="text-md md:text-lg text-white">{description}</motion.p>
            </motion.div>
        </motion.li>
    );
}

const Experience = () => {
    return (
        <motion.section id="experience" className="max-w-6xl mx-auto pt-40 md:pt-60 flex flex-col items-center">
            <motion.h1 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInVariants}
                className="text-4xl md:text-6xl font-bold text-white text-center tracking-widest mb-2"
            >
                Experience
            </motion.h1>
            <motion.span  initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInVariants} 
                className="block h-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 w-64 md:w-[400px]"
            ></motion.span>

            <motion.div initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInVariants} className="w-[75%] mx-auto relative mt-12">
                <motion.ul initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInVariants} className="flex flex-col items-start space-y-8">
                    <Details 
                        position={'Web Development Intern'} 
                        company={'CodersCave'} 
                        time={'June 2024 - July 2024'} 
                        description={'This was a 1 month remote internship program at CodersCave, during which I successfully developed and delivered a Blog Website and a Portfolio Website.'}
                    />
                    <Details 
                        position={'Full-Stack Web Development Intern'} 
                        company={'Growintern'} 
                        time={'July 2024 - August 2024'} 
                        description={'I am currently participating in a 1 month remote internship offered by Growintern, where I am developing a Full-Stack Ecommerce Website and a Social App Website with user chat functionality.'}
                    />
                    <Details 
                        position={'Software Engineering Fellow'} 
                        company={'Headstarter AI'} 
                        time={'July 2024 - September 2024'} 
                        description={'This is a 7-week remote fellowship program during which we have to complete tasks on a weekly basis. Our final project is to create a product where we aim to achieve one of the following: get 1000 people on a waitlist, create 1000 accounts, or generate $1000 in revenue.'}
                    />
                </motion.ul>
            </motion.div>
        </motion.section>
    );
}

export default Experience;

