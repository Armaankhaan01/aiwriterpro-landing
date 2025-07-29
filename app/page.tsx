import DemoPreview from "@/components/DemoPreview";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PricingPreview from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DemoPreview />
      <Testimonials />
      <PricingPreview />
      <FAQ />
    </>
  );
}
