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
      <div className="relative ">
        <section className="w-full h-[100vh] bg-blue-500">
          <h1>Conteúdo da Nova Seção</h1>
          <p>Isso é conteúdo da seção que vem abaixo do hero.</p>
        </section>
        {/* Você pode adicionar mais seções conforme necessário */}
        <section className="w-full h-[100vh] bg-green-500">
          <h1>Outra Seção</h1>
        </section>
      </div>
    </main>
  );
}
