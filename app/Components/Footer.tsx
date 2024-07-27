
import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

const icons = [{
    url:"https://www.linkedin.com/in/syedshahmirsultan/",
    icon:<FaLinkedinIn size={18}/>
},
{
    url:"https://github.com/syedshahmirsultan",
    icon:<FaGithub size={18}/>
},
{
    url:"https://www.facebook.com/profile.php?id=100093155077830",
    icon:<FaFacebookF size={18}/>
}
]



const Footer = () => {
    return (
        <section  className="h-auto p-2 md:p-0 md:h-24 pt-4 bg-slate-900 w-full flex flex-col md:flex-row gap-y-6 md:gap-x-80">
        <div className='flex flex-col items-center md:justify-start md:flex-row gap-y-2 gap-x-1 ml-4 pt-4'>
        <h2 className="text-white font-bold text-xl">Email : </h2>
        <p className='text-teal-400 text-lg font-semibold'> syedshahmirsultan@gmail.com</p>
        </div>
        <div className='flex flex-col pt-0 md:pt-4 items-center gap-y-3'>
        <p className='text-white font-bold text-xl'>Social Links</p>
        <div className="flex gap-x-2 ">
            {
                icons.map((item,index) => {
                    return (
                      <Link href={item.url} key={index}> <div  className=' flex justify-center items-center w-8 h-8 bg-gray-700 hover:bg-gray-300 rounded-full'>{item.icon}
                      </div></Link>
                    )
                })
            }

        </div>

        </div>
        </section>
    );
}

export default Footer;
