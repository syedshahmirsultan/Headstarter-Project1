"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Hamburger = () => {
    const [isOpen,setIsOpen] = useState(false);

    function toggle(){
        setIsOpen(true);
    }

    return (
       <div className='flex md:hidden items-center ml-8'>
{isOpen ?(<RxHamburgerMenu color={'white'} onClick={()=> setIsOpen(false)}/>) : (<IoMdClose onClick={toggle} color={'white'} />
) }
       </div> 
    );
}

export default Hamburger;
