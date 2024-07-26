"use client"
import { motion } from 'framer-motion';
import React from 'react';
import toast from 'react-hot-toast';



const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
  };

const Contact = () => {

    //Handle Submit Function
    async function handleSubmit(event:any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "907c3e71-4a15-4c8d-a342-9a8853f75863");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            
        toast.success(" Message sent Successfully !")
        }
    }
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

            <div className="mt-20">

            </div>
            </section>
    );
}

export default Contact;
