import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Domains from "@/components/Domains";
import AiPlayground from "@/components/AiPlayground";
import Projects from "@/components/Projects";
import SkillsMatrix from "@/components/SkillsMatrix";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Domains />
        <AiPlayground />
        <Projects />
        <SkillsMatrix />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
