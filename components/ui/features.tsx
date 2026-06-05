import Image from "next/image";

type FeatureProps = {
    id: number;
    img: string;
    alt: string;
    title: string;
    Description: string;

}

export default function Features({ id, img, alt, title, Description}: FeatureProps) {
    return(
        <main className="flex flex-row items-center justify-center gap-15">
            <div className= "flex flex-col items-start justify-start gap-4">
                <h2 className="text-xl font-extrabold">{title}</h2>
                <p className="whitespace-pre-line text-gray-600 font-semibold">{Description}</p>
            </div>
            <Image src={img} alt={alt} width={400} height={350} className="mr-4" />
        </main>
    )
}