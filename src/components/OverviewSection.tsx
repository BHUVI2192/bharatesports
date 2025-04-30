
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface OverviewSectionProps {
  title: string;
  description: string;
  image: string;
  children?: React.ReactNode;
  reverse?: boolean;
  color?: string;
}

const OverviewSection = ({ 
  title, 
  description, 
  image, 
  children, 
  reverse = false,
  color = "blue"
}: OverviewSectionProps) => {
  const isMobile = useIsMobile();
  
  const colorClasses = {
    blue: "from-blue-500/20 to-transparent",
    green: "from-emerald-500/20 to-transparent",
    purple: "from-purple-500/20 to-transparent",
  };
  
  const gradientClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  
  return (
    <div className={`flex flex-col ${!isMobile && reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 lg:gap-12 items-center`}>
      <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
        <div className="aspect-video w-full overflow-hidden rounded-lg relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} opacity-60`}></div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 space-y-3 md:space-y-4 px-2 md:px-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-center md:text-left">
          {title.split(' ').map((word, index) => (
            <span key={index} className={index % 2 === 0 ? "text-white" : `text-${color}-500`}>{word} </span>
          ))}
        </h2>
        
        <p className="text-gray-300 text-base md:text-lg text-center md:text-left">
          {description}
        </p>
        
        <div className="flex justify-center md:justify-start">
          {children}
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
