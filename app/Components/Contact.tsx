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

        const response = await fetch("https://api.web3motion.forms.com/submit", {
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
        else if (result.error){
            toast.error(result.error);
        }
    }
    return (
        <motion.section id="contact" className=" pt-40 pb-20 md:pt-60 flex flex-col items-center">
            <motion.h1 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="text-4xl md:text-6xl font-bold text-white text-center md:text-start tracking-wider mb-2"
            >
                Contact Me
            </motion.h1>
            <motion.span 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="block h-3 rounded-full bg-gradient-to-r  from-teal-500 to-teal-700 w-56 md:w-96"
            ></motion.span>

            <motion.div initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} className="mt-20 w-full">
   <motion.form initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} onSubmit={handleSubmit} className="flex flex-col items-center gap-y-4 md:gap-y-8">
    <motion.div initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} className="flex flex-col gap-y-2">
    <motion.p initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} className="text-white font-bold text-2xl">Name </motion.p>
    <motion.input initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} type="text" placeholder="Enter your Name" name='name' required  className=" border-2 rounded-md border-teal-500 text-lg h-12 w-full p-1 md:p-0 md:w-80 outline-teal-400 bg-transparent text-white text-center"/>
    </motion.div>
    <motion.div initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} className="flex flex-col gap-y-2">
    <motion.label initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} className="text-white font-bold text-2xl">Email </motion.label>
    <motion.input initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} type="email" placeholder="Enter your email" name='email' required  className=" border-2 rounded-md border-teal-500 text-lg h-12 w-full p-1 md:p-0 md:w-80 outline-teal-400 bg-transparent text-white text-center"/>
    </motion.div>
    
    <motion.div initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} className="flex flex-col gap-y-2">
    <motion.label initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} className="text-white font-bold text-2xl">Message </motion.label>
    <motion.textarea initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} placeholder="Enter your message" name='message' className='border-2 border-teal-500 rounded-md  text-white h-48 w-full p-1 md:p-0 md:w-80 text-center outline-teal-600 text-lg bg-transparent'/>
</motion.div>

<motion.button initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants} type="submit" className=" mt-2 md:mt-4 cursor-pointer h-12 w-48 rounded-md bg-white text-black flex justify-center items-center text-md font-semibold hover:bg-gradient-to-r from-teal-500  to-teal-900 hover:text-white"> Submit</motion.button>
   </motion.form>
            </motion.div>
            </motion.section>
    );
}

export default Contact;