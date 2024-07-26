
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
        <section className="ml-8 pt-40 md:pt-60">
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
                className="block h-2 rounded-full bg-gradient-to-r ml-14 md:ml-0 from-teal-500 to-teal-700 w-48 md:w-80"
            ></motion.span>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="mt-16 flex flex-col md:flex-row gap-y-16 md:justify-between"
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
                        I am a 17 year old High School 3rd year student who is passionate about 
                        <motion.span className="text-teal-400 font-bold"> Programming </motion.span> 
                         and 
                        <motion.span className="font-bold text-teal-400"> Technology</motion.span>.
                    </motion.p>
                    <h2 className="text-white mt-2 font-bold text-lg md:text-xl">
                        𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 𝐈 𝐰𝐨𝐫𝐤 𝐰𝐢𝐭𝐡:
                    </h2>

                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="mt-1 text-xl text-white font-medium"
                    >
                        ● <motion.span className="text-teal-400 font-semibold">𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝</motion.span>: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS
                    </motion.p>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="mt-1 text-xl text-white font-medium"
                    >
                        ● <motion.span className="text-teal-400 font-semibold">𝐁𝐚𝐜𝐤𝐞𝐧𝐝</motion.span>: Node.js, FastAPI, Python
                    </motion.p>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="mt-1 text-xl text-white font-medium"
                    >
                        ● <motion.span className="text-teal-400 font-semibold">𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬</motion.span>: Postgresql, Drizzle ORM, SQLModel
                    </motion.p>
                    <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInVariants}
                        className="mt-1 text-xl text-white font-medium"
                    >
                        ● <motion.span className="text-teal-400 font-semibold">𝐓𝐨𝐨𝐥𝐬 & 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬</motion.span>: Stripe, Sanity, Poetry, Kinde Auth
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
