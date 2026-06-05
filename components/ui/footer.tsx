import Image from "next/image"

export default function Footer() {
    return(
      <footer className="bg-black text-white pb-20 relative">
       <div className="flex flex-row items-start justify-between px-8 py-4">
            <div>
            <Image src="/logos/duelogue-logo-dark.svg" alt="Duelogue Logo" width={200} height={100} />
            </div>
            <div> 
                <h4>Pages</h4>
                <p className="text-gray-300">How it works</p>
                <p className="text-gray-300">Contact</p>
                <p className="text-gray-300">Features</p>
            </div>
       </div>
        <p className="absolute left-8 bottom-4 text-gray-400">@ {new Date().getFullYear()} Duelogue</p>
      </footer>
    )
}