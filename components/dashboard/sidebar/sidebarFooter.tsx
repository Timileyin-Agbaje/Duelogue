"use client"

import { Settings } from "lucide-react"
import { useSidebar } from "@/components/dashboard/context/SidebarContext"

export default function SidebarFooter() {
    const { isCollapsed } = useSidebar();
    return (
        <div>
            <footer className="absolute bottom-1 w-full mb-2">
                <button className="hover:bg-gray-100 p-2 rounded-lg flex flex-row gap-1 items-center text-sm text-gray-900">
                    <Settings />
                    <p className={`${isCollapsed ? "hidden" : "block"}`}>Settings</p>
                </button>
            </footer>
        </div>
    )
}