"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { websiteDetails } from '@/data';

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
};

const Projects = () => {
    return (
        <motion.section id="projects" className="pb-20 p-2 md:ml-8 pt-40 md:pt-60 flex flex-col items-center">
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
                className="block h-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 w-44 md:w-72"
            ></motion.span>
            <motion.div className="mt-16 w-full p-2 md:p-0 md:max-w-7xl md:mx-auto grid grid-cols-1 xl:grid-cols-2 md:gap-x-16 gap-y-20 justify-items-center xl:justify-items-stretch">
                {
                    websiteDetails.map((item, index) => {
                        return (
                            <Link href={item.demoUrl} key={index}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInVariants}
                                    className="w-full p-2 h-auto md:w-[600px] md:h-[800px] rounded-md bg-black border border-teal-400 flex flex-col gap-y-8"
                                >
                                    <Image src={item.imageUrl} alt={item.title} width={600} height={600} className='w-full h-[200px] md:h-[600px]' />
                                    <motion.h2
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInVariants}
                                        className='text-2xl md:text-3xl mt-2 font-bold text-white text-center'
                                    >
                                        {item.title}
                                    </motion.h2>
                                    <motion.p
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInVariants}
                                        className='text-md text-white font-medium p-4 text-center'
                                    >
                                        {item.description}
                                    </motion.p>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInVariants}
                                        className="flex ml-3 gap-x-4 gap-y-4 flex-wrap justify-center"
                                    >
                                        {item.technologiesUsed.map((subItem, index) => {
                                            return (
                                                <motion.div
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    variants={fadeInVariants}
                                                    key={index}
                                                    className="flex items-center justify-center px-3 py-1.5 border text-gray-100 border-teal-500 rounded-md"
                                                >
                                                    {subItem}
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInVariants}
                                        className="flex gap-x-8 justify-center -mt-2 pb-4"
                                    >
                                        <Link href={item.githubUrl} passHref>
                                            <button className="px-5 mt-4 py-2.5 text-center text-black bg-white hover:bg-gradient-to-r from-teal-500 to-teal-900 rounded-md text-md font-medium hover:text-white">
                                                Github
                                            </button>
                                        </Link>
                                        <Link href={item.demoUrl} passHref>
                                            <button className="px-5 mt-4 py-2.5 text-center text-black bg-white hover:bg-gradient-to-r from-teal-500 to-teal-900 rounded-md text-md font-medium hover:text-white">
                                                Visit
                                            </button>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </Link>
                        );
                    })
                }
            </motion.div>
        </motion.section>
    );
}

export default Projects;

