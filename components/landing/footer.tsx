import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return(
      <footer className="bg-black text-white pb-20 relative">
       <div className="flex flex-col md:flex-row items-start justify-between gap-6 px-4 md:px-8 py-4">
            <div>
            <Image src="/logos/duelogue-logo-dark.svg" alt="Duelogue Logo" width={200} height={100} className="h-8 w-auto" />
            </div>
            <div> 
                <h4>Pages</h4>
                <p className="text-gray-300"><Link href="/how-it-works">How it works</Link></p>
                <p className="text-gray-300"><a href="mailto:timi.agbaje.mail@gmail.com">Contact</a></p>
                <p className="text-gray-300"><a href="#features">Features</a></p>
            </div>
       </div>
        <p className="absolute left-4 md:left-8 bottom-4 text-gray-400">@ {new Date().getFullYear()} Duelogue</p>
      </footer>
    )
}