import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return(
    <section className="flex flex-col items-center">
        <div>
            <h1 className="text-5xl font-extrabold md:text-7xl tracking-tight leading-tight mt-20" >Discover Better Answers</h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto text-center" >See both sides of any topic through clear comparision</h2>
            <span className="flex justify-center gap-2 mt-4"><Button className="cursor-pointer">See pros & cons</Button><Button asChild className="cursor-pointer" variant="secondary"><a href="#how-it-works">How it works</a></Button></span>
            <Image src="/images/images.png" alt="Hero Image" width={800} height={600} className="w-full h-auto mt-8 object-contain"/>
        </div>
    </section>
  )

}