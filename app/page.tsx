import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import PreFooter from "@/components/landing/preFooter";
import Footer from "@/components/landing/footer";

export const viewport = { width: "device-width", initialScale: 1 };

const featuresData = [
    {id:1, img: "/images/diagram-1.svg", alt: "Diagram of Unbiased Perspective", title: "Unbiased Perspective", Description: "Each topic is analyzed for\n pros and cons without\n hidden bias or influence."},
    {id:2, img: "/images/diagram-2.svg", alt: "Diagram of Clear Points", title: "Clear Points", Description: "Quickly Understand key\n points with concise, \n well-formatted breakdowns." },
    {id:3, img: "/images/diagram_3.svg", alt: "Diagram of Actionable Insights", title: "Actionable Insights", Description: "Gain practical next steps\n and real takeaways to\n inform your decisions."}
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-center">
        <Header />
        <Hero />
        <section id="features" className="space-y-16">
          {featuresData.map(feature => (
            <Features key={feature.id} img={feature.img} alt={feature.alt} title={feature.title} Description={feature.Description} />
          ))}
        </section>
        <PreFooter />
        <Footer />
    </div>
  );
}
