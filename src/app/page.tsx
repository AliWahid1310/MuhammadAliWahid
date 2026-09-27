import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RealSkills from "@/components/RealSkills";
import RealProjects from "@/components/RealProjects";
import RealExperience from "@/components/RealExperience";
import RealAwards from "@/components/RealAwards";
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
        <RealExperience />
        <RealAwards />
        <RealContact />
      </main>
      <Footer />
    </div>
  );
}
