
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Approaches from "@/components/Approaches";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import BlogInsights from "@/components/BlogInsights";

export default function Home() {
  return (
    <main className="min-h-screen">
     
      <Hero />
      <AboutUs />
      <Services />
      <Approaches />
      <Testimonials />
      <CtaBanner />
      <Team />
      <Pricing />
      <BlogInsights />
    </main>
  );
}
