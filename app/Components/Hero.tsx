"use client"
import {motion} from 'framer-motion'
import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF,FaExternalLinkAlt  } from "react-icons/fa";

const icons = [{
    url:"https://www.linkedin.com/in/syedshahmirsultan/",
    icon:<FaLinkedinIn size={23}/>
},
{
    url:"https://github.com/syedshahmirsultan",
    icon:<FaGithub size={23}/>
},
{
    url:"https://www.linkedin.com/in/syedshahmirsultan/",
    icon:<FaFacebookF size={23}/>
}
]

const Hero = () => {
    return (
        <div className='flex flex-col gap-y-3 pt-44  items-center h-full'>
        <motion.h1 initial={{x:-2000}} animate={{x:0}}
        transition={{duration:"1"
        }}
        className='text-[24px] md:text-6xl font-bold text-gray-100'>Hi, I &apos;m <span className="text-teal-400">Syed Shahmir Sultan</span></motion.h1>
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

       <Link href="/Shahmir-Resume.pdf"><motion.button initial={{x:-2000}} animate={{x:0}}
                transition={{duration:"2"}} className=" flex gap-x-4 items-center mt-6 py-4 px-14 border-2 border-white hover:border-teal-300  text-gray-950 hover:bg-gradient-to-r from-teal-500  to-teal-900  hover:text-gray-200  md:text-xl font-semibold bg-white rounded-md">
                    Resume <FaExternalLinkAlt size={18} />

                    </motion.button></Link>
        </div>
    );
}

export default Hero;
