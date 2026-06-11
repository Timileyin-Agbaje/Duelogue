"use client"

import { useSidebar } from "@/components/dashboard/context/SidebarContext"
import SidebarHeader from "@/components/dashboard/sidebar/sidebarHeader"
import SidebarItems from "@/components/dashboard/sidebar/sidebarItems"
import SidebarFooter from "@/components/dashboard/sidebar/sidebarFooter"
import { PanelRight } from 'lucide-react'


export default function Sidebar( ) {
    const { isCollapsed, toggle } = useSidebar();
    return(
           <aside className={`${isCollapsed ? "w-16 items-center-safe"  : "w-64"} flex flex-col h-screen left-0 space-y-2 bg-gray-50 border-r`}>
            <div className="flex flex-row justify-between p-2"><SidebarHeader /> <button onClick={toggle}><PanelRight className="cursor-pointer" /></button></div>
            <div>
                <SidebarItems />
                <SidebarFooter /> 
            </div>
           </aside>
    )
}