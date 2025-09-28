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
            <main>
                {children}
            </main>

        </SidebarProvider>
    </div>
  )
}

export default ChatLayout