'use client'

import React from 'react'
import SidebarToggle from '@/components/sidebar-toggle'
import { useSidebar } from '@/components/ui/sidebar'
import NewChat from '@/components/new-chat'
import InputBox from '@/components/input-box'


const Chat = () => {
  const { open } = useSidebar();
  return (
    <div className='relative min-h-[88vh] w-full flex justify-center'>
      {
        !open && <SidebarToggle />
      }
      
      <NewChat />
      <InputBox />
    </div>
  )
}

export default Chat