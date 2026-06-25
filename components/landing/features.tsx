import Image from "next/image";

type FeatureProps = {
    img: string;
    alt: string;
    title: string;
    Description: string;

}

export default function Features({ img, alt, title, Description}: FeatureProps) {
    return(
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 md:px-0">
            <div className= "flex flex-col items-start justify-start gap-4">
                <h2 className="text-xl font-extrabold">{title}</h2>
                <p className="whitespace-pre-line text-gray-600 font-semibold">{Description}</p>
            </div>
            <Image src={img} alt={alt} width={250} height={200} className="w-full max-w-[200px] md:max-w-[250px] h-auto mr-0 md:mr-4" />
        </section>
    )
}