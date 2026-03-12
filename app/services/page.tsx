import BlogInsights from "@/components/BlogInsights";
import ServicesGrid from "@/components/services/ServicesGrid";
import Testimonials from "@/components/Testimonials";


export default function Home() {
    return (
        <main className="min-h-screen">
            <ServicesGrid />
            <Testimonials />
            <BlogInsights />
        </main>
    );
}
