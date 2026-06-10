import Image from "next/image"


export default function sidebarHeader() {
    return(
        <div>
            <header >
                <Image src="/logos/duelogue-logo.svg" alt="Duelogue Logo" width={200} height={50} className="h-8 w-auto"/>
            </header>
        </div>
    )
}