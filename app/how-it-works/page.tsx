import HowItWorks from "@/components/landing/how-it-works";
import Header from "@/components/landing/header";

export default function HowItWorksPage() {
    return(
        <div>
            <main>
                <Header />
                <div className="container mx-auto flex flex-col items-center justify-center gap-10 mt-20">
                   <HowItWorks />
                </div>
              
            </main>
        </div>
    )
}