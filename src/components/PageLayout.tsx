
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useDeviceType } from '@/hooks/use-mobile';

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
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  return (
    <div className={`min-h-screen w-full ${bgColor} text-white`}>
      <Navbar />
      
      <div className="pt-16 pb-6 md:pt-24 md:pb-10 lg:pt-28 bg-navy-900">
        <div className="container-custom text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">{title}</h1>
          {subtitle && <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      </div>
      
      <main className="container-custom py-6 md:py-10 lg:py-16 px-4">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
