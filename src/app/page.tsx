import React from "react";
import { Faq } from "~/components/FaQ";
import DevMatchHero from "~/components/globee";
import CustomHeroParallax from "~/components/Hero";
import { Reviews } from "~/components/Reviews";

// In your homepage component
export default function Home() {
  return (
    <main>
      <DevMatchHero />
      <CustomHeroParallax />
      <section className="text-center">
        <h2 className="text-5xl font-bold text-slate-500">Lets Hear from Our User Devs</h2>
        <p className="text-gray-300 mt-2 text-2xl">What our community has to say about DevMatch</p>
      </section>
      <Reviews />
      <section className="text-center">
        <h2 className="text-5xl font-bold text-slate-500">Some FAQs?</h2>
      </section>
      <Faq />
    </main>
  );
}
