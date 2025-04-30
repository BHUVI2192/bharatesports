
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
      
      <div className="pt-20 md:pt-28 lg:pt-32 pb-8 md:pb-12 bg-navy-900">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 px-3">{title}</h1>
          {subtitle && <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">{subtitle}</p>}
        </div>
      </div>
      
      <main className="container-custom py-8 md:py-12 lg:py-16 px-4 md:px-6">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
