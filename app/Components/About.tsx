
"use client"
import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
};

const About = () => {
    return (
        <section id="about" className="ml-8 pt-40 md:pt-60 flex flex-col items-center">
            <motion.h1 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="text-4xl md:text-6xl font-bold text-white text-center md:text-start tracking-wider mb-2"
            >
                About Me
            </motion.h1>
            <motion.span 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="block h-3 rounded-full bg-gradient-to-r  from-teal-500 to-teal-700 w-48 md:w-80"
            ></motion.span>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="mt-20 flex flex-col md:flex-row gap-y-16 md:justify-between"
            >
                <Image
                    src="/images/shahmir.png"
                    alt="Syed Shahmir Sultan Image"
                    width={350}
                    height={350}
                    className="pr-4 md:p-0 object-contain md:object-cover"
                />
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    className='flex flex-col gap-y-1 mt-0 md:mt-2 ml-1 md:ml-12'
                >
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="text-lg md:text-xl pr-2 md:pr-4 font-medium text-gray-100"
                    >
                        I am a 17 years old High School 3rd year student who is passionate about 
                        <motion.span className="text-teal-400 font-bold"> Programming </motion.span> 
                         and 
                        <motion.span className="font-bold text-teal-400"> AI</motion.span>.
                    </motion.p>
                    <h2 className="text-white mt-2 tracking-wider font-extrabold text-xl md:text-2xl">
                        Technologies I work with:
                    </h2>

                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="mt-1 text-lg md:text-xl text-white font-medium"
                    >
                        ● <motion.span className="text-teal-400 font-extrabold">Frontend </motion.span>: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS
                    </motion.p>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="mt-1 text-lg md:text-xl text-white font-medium"
                    >
                        ● <motion.span className="text-teal-400 font-extrabold">Backend </motion.span>: Node.js, FastAPI, Python
                    </motion.p>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="mt-1 text-lg md:text-xl text-white font-medium"
                    >
                        ● <motion.span className="text-teal-400 font-extrabold">Databases </motion.span>: Postgresql, Drizzle ORM, SQLModel
                    </motion.p>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="mt-1 text-lg md:text-xl text-white font-medium"
                    >
                        ● <motion.span className="text-teal-400 font-extrabold">Tools & Services </motion.span>: Stripe, Sanity, Poetry, Kinde Auth
                    </motion.p>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="mt-1 text-lg md:text-xl text-white font-medium"
                    >
                        ● <motion.span className="text-teal-400 font-extrabold">Libraries </motion.span>: Shadcn UI , Daisy UI
                    </motion.p>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="pr-2 md:pr-4 mt-6 md:mt-4 text-xl text-white font-medium"
                    >
                        I am committed to continuously learning and integrating the latest technologies into my projects. This approach not only enhances my work but also deepens my expertise in cutting-edge development tools.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default About;
