import * as React from "react"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import SidebarToggle from "./sidebar-toggle"
import { Ellipsis, Plus, Pen, Trash2, ArrowUpRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { NavUser } from "./nav-user"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="p-3.5">
        <SidebarGroup>
          <SidebarContent className="flex-row items-center justify-between w-full p-0">
            <div className="flex items-center gap-3">
              <Image
                src={"/logo.svg"}
                width={35}
                height={35}
                alt="logo"
              />
              <h3 className="font-medium text-lg">Bee Ai</h3>
            </div>
            <SidebarToggle />
          </SidebarContent>
        </SidebarGroup>
        <SidebarSeparator className="mt-1" />
        <Button className="mt-2 cursor-pointer justify-between" variant={"secondary"}>
          <p className="flex items-center gap-2">
            <Plus />
            New Chat
          </p>
          <p className="bg-zinc-800 px-2 py-1 rounded-sm text-xs">ctrl + n</p>
        </Button>
      </SidebarHeader>
      <SidebarGroup>
        <SidebarContent>
          <h3 className="font-bold text-zinc-400 text-sm">Chats</h3>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <SidebarMenuButton className="justify-between">
                  Design Meetup Invitation..
                  <DropdownMenuTrigger asChild>
                      <Ellipsis size={18} className="ml-auto cursor-pointer" />
                  </DropdownMenuTrigger>
                </SidebarMenuButton>

                <DropdownMenuContent
                  side="right"
                  sideOffset={20}
                  align="start"
                  className="w-[150px]"
                >
                  <DropdownMenuItem>
                    <ArrowUpRight />
                    <span>Open</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Pen />
                    <span>Rename</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">
                    <Trash2 />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
            <SidebarMenuSkeleton showIcon={true} className="w-full"/>
            
          </SidebarMenu>
        </SidebarContent>
      </SidebarGroup>
      <SidebarFooter className="mt-auto">
        <NavUser user={{
          name: "Musab",
          email: "musabdev65@gmail.com",
          avatar: "https://avatars.githubusercontent.com/u/176317305?v=4"
        }}/>
      </SidebarFooter>
    </Sidebar>
  )
}
