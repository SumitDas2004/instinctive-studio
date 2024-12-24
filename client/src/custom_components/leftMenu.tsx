import * as React from 'react'
import {Dashboard3} from '@styled-icons/remix-line/Dashboard3'
import {BookRead} from '@styled-icons/remix-line/BookRead'
import {BookWithMark} from '@styled-icons/remix-line/BookWithMark'
import {HelpCircle} from '@styled-icons/boxicons-regular/HelpCircle'
import {DataPie} from '@styled-icons/fluentui-system-regular/DataPie'
import {Settings} from '@styled-icons/remix-line/Settings'

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { NavLink } from 'react-router'

// Menu items.
const items = [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: <Dashboard3 size={21}/>,
    },
    {
      title: "Students",
      url: "students",
      icon: <BookRead size={21}/>
    },
    {
      title: "Chapters",
      url: "chapters",
      icon: <BookWithMark size={21}/>,
    },
    {
      title: "Help",
      url: "help",
      icon: <HelpCircle size={21}/>,
    },
    {
      title: "Reports",
      url: "reports",
      icon: <DataPie size={21}/>,
    },
    {
        title: "Settings",
        url: "settings",
        icon: <Settings size={21}/>,
    },
  ]


export default function LeftMenu(){
    return (
    <Sidebar>
      <SidebarContent className='bg-white'>
        <SidebarGroup>
          <SidebarGroupLabel className=' my-5'>
            <span className='flex items-center'>
                <span className='h-8 w-8 '><img src='./logo.png' className=' invert -rotate-12 h-full w-full'/></span>
                <span className=' text-black font-bold text-2xl exo-700'>Quyl.</span>
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className='font-semibold text-gray-500'>
                  <SidebarMenuButton asChild className='py-5 flex items-center'>
                    <NavLink to={item.url}>
                      <span className='ml-1'>{item.icon}</span>
                      <span className='font-bold'>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
      )
}