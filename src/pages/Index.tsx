
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedGames from '@/components/FeaturedGames';
import NewsSection from '@/components/NewsSection';
import AccessoriesSection from '@/components/AccessoriesSection';
import AboutUs from '@/components/AboutUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedGames />
      <NewsSection />
      <AccessoriesSection />
      <div className="relative z-10 bg-cyber-dark" id="contact">
        <AboutUs />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
