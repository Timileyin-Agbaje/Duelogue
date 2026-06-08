import Image from "next/image"
import { PanelRight } from 'lucide-react'

export default function sidebarHeader() {
    return(
        <div>
            <header className="flex flex-row justify-between">
                <Image src="/logos/duelogue-logo.svg" alt="Duelogue Logo" width={200} height={50} className="h-8 w-auto"/>
                <PanelRight className="cursor-pointer" />
            </header>
        </div>
    )
}