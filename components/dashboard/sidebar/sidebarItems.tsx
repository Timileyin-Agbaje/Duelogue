import { MessageCircle, History} from 'lucide-react'
import { useSidebar } from "@/components/dashboard/context/SidebarContext"

export default function sidebarItems() {
    const { isCollapsed, toggle } = useSidebar();
    return(
        <div>
            <section className={`${isCollapsed ? "gap-3" : "gap-1"} flex flex-col mt-10`}>
                <button title="New Chat" className=" hover:bg-gray-100 focus:bg-gray-200  w-10/12 p-2 rounded-lg flex flex-row gap-1 items-center text-sm text-gray-800">
                <MessageCircle className="w-6 h-6 shrink-0"/>
                <p className={`${isCollapsed ? "hidden" : "block"}`}>New chat</p>
                </button>
                <button title="History" className="hover:bg-gray-100 focus:bg-gray-200  w-10/12 p-2 rounded-lg flex flex-row gap-1 items-center text-sm  text-gray-800">
                    <History className="w-6 h-6 shrink-0"/> <p className={`${isCollapsed ? "hidden" : "block"}`} >History</p>
                </button>
            </section>
        </div>
    )
}