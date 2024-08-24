import React from "react";

import Header from "@/components/header";
import Hero from "@/components/hero";
import CookiesAllow from "@/components/cookiesAllow";
import Categories from "@/components/sections/categories";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="relative -mt-[30vh] z-[99999999999] px-3 bg-background">
        <Categories />
      </div>
      <CookiesAllow />
    </main>
  );
}
