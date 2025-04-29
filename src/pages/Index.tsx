
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedGames from '@/components/FeaturedGames';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedGames />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
