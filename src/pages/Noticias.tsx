import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import WelcomeMessage from "@/components/WelcomeMessage";

const Noticias = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
};

export default Noticias;
