"use client"
import {motion} from 'framer-motion'
import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const icons = [{
    url:"https://www.linkedin.com/in/syedshahmirsultan/",
    icon:<FaLinkedinIn size={23}/>
},
{
    url:"https://github.com/syedshahmirsultan",
    icon:<FaGithub size={23}/>
},
{
    url:"https://www.facebook.com/profile.php?id=100093155077830",
    icon:<FaFacebookF size={23}/>
}
]

const Hero = () => {
    return (
        <div className='flex flex-col gap-y-3 pt-40 md:pt-0 md:justify-center items-center h-full'>
        <motion.h1 initial={{x:-2000}} animate={{x:0}}
        transition={{duration:"2"
        }}
        className='text-[24px] md:text-6xl font-bold text-gray-100'>Hi, I 'm <span className="text-teal-400">Syed Shahmir Sultan</span></motion.h1>
        <motion.p  initial={{x:-2000}} animate={{x:0}}
        transition={{duration:"2"
        }}
        className="text-white font-bold text-xl md:text-5xl"
        > A Full-Stack Web Developer</motion.p>
       <div className="flex gap-x-4 mt-2">
        {
            icons.map((item,index)=> {
            return (
                <motion.div key={index} initial={{x:-2000}} animate={{x:0}}
                transition={{duration:"2"
                }} className=' w-10 h-10 rounded-full flex items-center justify-center bg-gray-600 hover:bg-gray-400 cursor-ponter'>
                    <Link href={item.url}>{item.icon}</Link>

                </motion.div>
            )
            })
        }
     
       </div> 

       <motion.button initial={{x:-2000}} animate={{x:0}}
                transition={{duration:"2"}} className=" mt-6 px-6 border-2 border-white hover:border-teal-300 py-3 text-gray-950 hover:bg-gradient-to-r from-teal-500  to-teal-900  hover:text-gray-200 text-md font-semibold bg-white rounded-md">Resume</motion.button>
        </div>
    );
}

export default Hero;