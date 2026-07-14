import { useEffect } from "react";

import { CareerTools } from "@/components/landing/CareerTools";
import { EmployerSection } from "@/components/landing/EmployerSection";
import { FAQ } from "@/components/landing/FAQ";
import { FeaturedJobs } from "@/components/landing/FeaturedJobs";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Navbar } from "@/components/landing/Navbar";
import { Stats } from "@/components/landing/Stats";
import { Testimonials } from "@/components/landing/Testimonials";

export function LandingPage() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    return () => document.documentElement.classList.remove("motion-ready");
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ede8de]">
      <Navbar />
      <main className="pt-[var(--navbar-height)]">
        <Hero />
        <Stats />
        <FeaturedJobs />
        <CareerTools />
        <HowItWorks />
        <EmployerSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
