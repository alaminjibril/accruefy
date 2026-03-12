import AboutJourney from "@/components/about/AboutJourney";
import AboutValues from "@/components/about/AboutValues";
import Brands from "@/components/about/Brands";
import AboutHero from "@/components/about/hero";
import BlogInsights from "@/components/BlogInsights";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";


export default function Home() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <Brands />
            <AboutJourney />
            <AboutValues />
            <Team />
            <Pricing />
            <BlogInsights />
        </main>
    );
}
