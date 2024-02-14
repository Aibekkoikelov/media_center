import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Media Center",
  description: "This is Home for Startup Nextjs Template",
    // icons:
  // other metadata
};

export default function Home() {
  return (
    <>
        <Head>
            <link rel="icon" href="../public/favicon.ico"/>
        </Head>
        <ScrollUp />
        <Hero />
        <Features />
        <Pricing />
        <Contact />
    </>
  );
}
