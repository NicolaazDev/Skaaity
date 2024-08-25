import React from "react";

import Header from "@/components/header";
import Hero from "@/components/hero";
import CookiesAllow from "@/components/cookiesAllow";

import Categories from "@/components/sections/categories";
import Shapes from "@/components/sections/shapes";
import Track from "@/components/sections/track";
import Skateboards from "@/components/sections/skates";
import Acessories from "@/components/sections/acessories";
import DropSection from "@/components/sections/drop";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <div className="relative layout -mt-[30vh] z-[99999999999] bg-background">
        <Shapes />
        <Categories />
        <Track />
        <Acessories />
        <DropSection />
        <Skateboards />
      </div>
      <CookiesAllow />
    </main>
  );
}
