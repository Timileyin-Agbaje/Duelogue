import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div className="flex items-center justify-between px-8 py-4 font-sans">
                <Image src="/logos/duelogue-logo.svg" alt="Duelogue Logo" width={200} height={50} className="h-8 w-auto"/>
                <div className="flex items-center justify-center gap-8 text-lg font-medium">
                    <a href="#how-it-works" className="hover:bg-gray-50 rounded-xl p-1">How it works</a>
                    <Link href="mailto:timi.agbaje.mail@gmail.com" className="hover:bg-gray-50 rounded-xl p-1">Contact</Link>
                    <a href="#features" className="hover:bg-gray-50 rounded-xl p-1">Features</a>
                </div>
            </div>
        </header>
    );
}