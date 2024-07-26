import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

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

const Footer = () => {
    return (
        <section className="h-16 bg-slate-800 w-full flex justify-between md:gap-x-40">
        <div className='flex gap-x-0.5'>
        <h2 className="text-white font-bold text-lg">Email :</h2>
        <p className='text-teal-400 text-md font-semibold'>syedshahmirsultan@gmail.com</p>
        </div>
        <div className='flex flex-col gap-y-2'>
        <p className='text-white font-bold text-xl'>Social Links</p>
        <div className="flex gap-x-2 ">
            {
                icons.map((item,index) => {
                    return (
                      <Link href={item.url} key={index}> <div className=' flex justify-center items-center w-10 h-10 bg-gray-700 hover:bg-gray-300 rounded-full'>{item.icon}
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
