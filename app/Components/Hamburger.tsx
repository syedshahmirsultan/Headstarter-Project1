"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link'
const Hamburger = () => {
    const [isOpen,setIsOpen] = useState(false);

    function toggle(){
        setIsOpen(!isOpen);
    }

    return (
        <section>
       <div className='flex flex-col ml-20 md:hidden justify-center '>
{isOpen ?   (<IoMdClose size={22} onClick={toggle} color={'white'} className="cursor-pointer"/>) :(<RxHamburgerMenu size={22} color={'white'} onClick={toggle} className="cursor-pointer"/>) 
 }
       </div> 
       {
        isOpen == true ? (<div className="absolute  pt-4 h-48 bg-gray-950 rounded-md self-center w-40 flex flex-col items-center  gap-y-2 text-md font-semibold">
            <Link href="" className="text-gray-500 hover:text-white">About</Link>
            <Link href="" className="text-gray-500 hover:text-white">Skills</Link>
            <Link href="" className="text-gray-500 hover:text-white">Experience</Link>
            <Link href="" className="text-gray-500 hover:text-white">Projects</Link>
            <Link href="" className="text-gray-500 hover:text-white">Contact</Link>

        </div>) :""
       }
       </section>
    );
}

export default Hamburger;
