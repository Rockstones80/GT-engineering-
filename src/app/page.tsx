import { Approach } from "@/components/Approach";
import { Capability } from "@/components/Capability";
import { Catalogue } from "@/components/Catalogue";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Motion } from "@/components/Motion";
import { Platforms } from "@/components/Platforms";
import { Principle } from "@/components/Principle";
import { Quality } from "@/components/Quality";
import { SiteHeader } from "@/components/SiteHeader";
import { Stratose } from "@/components/Stratose";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-bg">
      <Motion />
      <SiteHeader />
      <Hero />
      <Principle />
      <Capability />
      <Approach />
      <Catalogue />
      <Stratose />
      <Platforms />
      <Quality />
      <Contact />
    </main>
  );
}
