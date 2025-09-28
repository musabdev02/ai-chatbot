import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

const ChatLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
        <SidebarProvider>
            <AppSidebar />
            <main className='py-10 px-7.5 w-full bg-[#131313]'>
              
                {children}
            </main>

        </SidebarProvider>
    </div>
  )
}

export default ChatLayout