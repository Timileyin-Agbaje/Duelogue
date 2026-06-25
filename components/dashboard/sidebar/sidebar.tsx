"use client"

import { useSidebar } from "@/components/dashboard/context/SidebarContext"
import SidebarHeader from "@/components/dashboard/sidebar/sidebarHeader"
import SidebarItems from "@/components/dashboard/sidebar/sidebarItems"
import { useIsMobile } from "@/hooks/use-mobile"
import { PanelRight, X } from 'lucide-react'

export default function Sidebar() {
    const { isCollapsed, toggle, isMobileOpen, toggleMobile, closeMobile } = useSidebar();
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <>
                <button
                    type="button"
                    aria-label="Open sidebar"
                    onClick={toggleMobile}
                    className="fixed top-2 left-2 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md border"
                >
                    <PanelRight className="h-5 w-5 text-gray-700" />
                </button>

                {isMobileOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black/40"
                        onClick={closeMobile}
                    />
                )}

                <aside
                    className={`fixed left-0 top-0 z-50 flex flex-col h-screen w-64 bg-gray-50 border-r shadow-xl transition-transform duration-300 ease-in-out p-2 ${
                        isMobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                    role="navigation"
                >
                    <div className="flex flex-row justify-between p-2">
                        <SidebarHeader />
                        <button
                            type="button"
                            aria-label="Close sidebar"
                            onClick={closeMobile}
                        >
                            <X className="cursor-pointer h-5 w-5 text-gray-700" />
                        </button>
                    </div>
                    <div>
                        <SidebarItems />
                    </div>
                </aside>
            </>
        )
    }

    return(
        <aside
            className={`${isCollapsed ? "w-16 items-center-safe" : "w-64"} flex flex-col h-screen left-0 space-y-2 bg-gray-50 border-r ease-in-out duration-300 p-2 hidden md:flex`}
            role="navigation"
        >
            <div className="flex flex-row justify-between p-2">
                <SidebarHeader />
                <button
                    type="button"
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    onClick={toggle}
                >
                    <PanelRight className="cursor-pointer" />
                </button>
            </div>
            <div>
                <SidebarItems />
            </div>
        </aside>
    )
}
