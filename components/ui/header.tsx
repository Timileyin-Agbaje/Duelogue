import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div className="flex flex-col items-start justify-between gap-3 px-8 py-4 font-sans sm:flex-row sm:items-center sm:gap-0">
                <Image src="/logos/duelogue-logo.svg" alt="Duelogue Logo" width={200} height={50} className="h-8 w-auto"/>
                <div className="flex w-full flex-wrap items-center justify-start gap-4 text-base font-medium sm:w-auto sm:justify-center sm:gap-8 sm:text-lg">
                    <a href="#how-it-works" className="hover:bg-gray-50 rounded-xl p-1">How it works</a>
                    <a href="mailto:timi.agbaje.mail@gmail.com" className="hover:bg-gray-50 rounded-xl p-1">Contact</a>
                    <a href="#features" className="hover:bg-gray-50 rounded-xl p-1">Features</a>
                </div>
            </div>
        </header>
    );
}