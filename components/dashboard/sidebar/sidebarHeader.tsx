import Image from "next/image"
import { useSidebar } from "@/components/dashboard/context/SidebarContext"


export default function sidebarHeader() {
     const { isCollapsed, toggle } = useSidebar();
    return(
        <div>
            <header >
                <Image src="/logos/duelogue-logo.svg" alt="Duelogue Logo" width={200} height={50} className={`${isCollapsed ? "hidden" : "block"} h-8 w-auto`}/>
            </header>
        </div>
    )
}