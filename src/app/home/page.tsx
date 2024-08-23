import React from "react";

import Header from "@/components/header";
import Hero from "@/components/hero";
import CookiesAllow from "@/components/cookiesAllow";

export default function Home() {
  return (
    <main>
      <CookiesAllow />
      <Header />
      <Hero />
    </main>
  );
}
