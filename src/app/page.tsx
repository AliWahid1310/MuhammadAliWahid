import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RealSkills from "@/components/RealSkills";
import RealProjects from "@/components/RealProjects";
import AiPlayground from "@/components/AiPlayground";
import RealExperience from "@/components/RealExperience";
import BrandMarquee from "@/components/BrandMarquee";
import RealContact from "@/components/RealContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <main>
        <Hero />
        <RealSkills />
        <RealProjects />
        <AiPlayground />
        <RealExperience />
        <BrandMarquee />
        <RealContact />
      </main>
      <Footer />
    </div>
  );
}
