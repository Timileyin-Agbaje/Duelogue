import { Button } from "@/components/ui/button";

export default function PreFooter() {
    return(
        <section className="flex flex-col items-center">
            <h3 className="text-3xl font-bold">Ready To Compare?</h3>
            <p className="text-lg text-gray-600 mb-2">Type a topic. Discover Insights</p>
            <Button asChild className="mb-16 mt-7"><a href="#features">Start Now</a></Button>
        </section>
    )
}