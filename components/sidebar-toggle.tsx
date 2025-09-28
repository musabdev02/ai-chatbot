'use client'

import React from 'react'
import Image from 'next/image';
import { useSidebar } from './ui/sidebar'


const SidebarToggle = () => {
    const { toggleSidebar }  = useSidebar();


    return (
        <Image
            src={"/sidebar-toggle.svg"}
            width={20}
            height={20}
            alt='sidebar-toggle'
            onClick={toggleSidebar}
            className='cursor-pointer'
           
        />
    )
}

export default SidebarToggle