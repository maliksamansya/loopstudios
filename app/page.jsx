"use client";
import FeatureSection from "@/components/featureSection.jsx";
import HeroSection from "./../components/heroSection.jsx";
import Image from "next/image";
import CreationSection from "@/components/creationSection.jsx";
import FooterSection from "@/components/footerSection.jsx";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* mobile menu */}
      {/* <MobileSection /> */}

      {/* feature section */}
      <FeatureSection />

      {/* creation section */}
      <CreationSection />

      {/* footer section */}
      <FooterSection />
    </>
  );
}
