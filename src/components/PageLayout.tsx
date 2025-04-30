
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  bgColor?: string;
}

const PageLayout = ({ 
  children, 
  title,
  subtitle,
  bgColor = "bg-navy-950" 
}: PageLayoutProps) => {
  return (
    <div className={`min-h-screen ${bgColor} text-white overflow-x-hidden`}>
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-12 bg-navy-900">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      </div>
      
      <main className="container-custom py-12 md:py-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
