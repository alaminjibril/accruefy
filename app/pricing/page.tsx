import BlogInsights from "@/components/BlogInsights";
import PlanBlock from "@/components/PlanBlock";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";


export default function Home() {
    return (
        <main className="min-h-screen">
            <Pricing />
            <PlanBlock />
            <Testimonials />
            <BlogInsights />
        </main>
    );
}
