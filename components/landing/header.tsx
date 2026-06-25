import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="flex flex-col items-start justify-between gap-3 px-4 sm:px-8 py-4 font-sans sm:flex-row sm:items-center sm:gap-0">
                <Image src="/logos/duelogue-logo.svg" alt="Duelogue Logo" width={200} height={50} className="h-8 w-auto"/>
                <nav className="flex w-full flex-wrap items-center justify-start gap-4 text-base font-medium sm:w-auto sm:justify-center sm:gap-8 sm:text-lg">
                    <Link href="/how-it-works" className="hover:bg-gray-100 rounded-lg p-2">How it works</Link>
                    <a href="mailto:timi.agbaje.mail@gmail.com" className="hover:bg-gray-100 rounded-xl p-2">Contact</a>
                    <Link href="/#features" className="hover:bg-gray-100 rounded-xl p-2">Features</Link>
                </nav>
            </div>
        </header>
    );
}