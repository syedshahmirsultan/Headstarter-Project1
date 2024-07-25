import Link from 'next/link';
import React from 'react';
import Hamburger from './Hamburger';

const NavBar = () => {
    return (
        <section className="h-16 w-full bg-slate-900 flex items-center">
           {/*Logo*/} 
           <Link href="/"><p className="hover:text-teal-300 text-gray-100 text-2xl tracking-widest font-extrabold ml-8 uppercase">Shahmir</p></Link>
        <div className="hidden md:flex ml-80 gap-x-16 items-center text-lg font-semibold ">
        <Link href="" className=" text-gray-400 hover:text-white">About</Link>
        <Link href="" className=" text-gray-400 hover:text-white">Skills</Link>
        <Link href="" className=" text-gray-400 hover:text-white">Experience</Link>
        <Link href="" className=" text-gray-400 hover:text-white">Contact</Link>
        </div>
        <Hamburger/>
        </section>
    );
}

export default NavBar;
