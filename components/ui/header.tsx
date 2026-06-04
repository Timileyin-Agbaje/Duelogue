import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div className="flex items-center justify-between px-8 py-4 font-sans">
                <Image src="/logos/duelogue-logo.svg" alt="Duelogue Logo" width={200} height={50} className="h-8 w-auto"/>
                <div className="flex items-center justify-center gap-8 text-lg font-medium">
                    <Link href="#how-it-works">How it works</Link>
                    <Link href="#contact">Contact</Link>
                    <Link href="#features">Features</Link>
                </div>
            </div>
        </header>
    );
}