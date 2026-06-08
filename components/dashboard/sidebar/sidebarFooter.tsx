import {Settings} from "lucide-react"

export default function sidebarFooter() {
    return(
        <div>
            <footer className="absolute bottom-1 w-full p-4">
            <button className="flex flex-row gap-2">
                <Settings/>Settings
            </button>
        </footer>
        </div>
        
    )
}