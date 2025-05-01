
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Gamepad } from "lucide-react";
import { useDeviceType } from '@/hooks/use-mobile';

const AboutUs = () => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  
  return (
    <section id="about" className="section-padding bg-navy-950" style={{ backdropFilter: 'none', WebkitBackdropFilter: 'none' }}>
      <div className="container-custom" style={{ overflow: 'hidden' }}>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-white">ABOUT</span>{" "}
            <span className="text-blue-500">US</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
        </div>
        
        <Card className="bg-navy-800 border border-navy-700 overflow-hidden" style={{ backdropFilter: 'none' }}>
          <CardContent className={`p-${isMobile ? '4' : '6'} md:p-8 lg:p-10`}>
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <img 
                    src="/lovable-uploads/4ce209e6-a051-4f8f-8d93-b1cb7c888568.png" 
                    alt="Bharat Esport Express Logo" 
                    className="w-36 h-36 md:w-48 md:h-48 object-contain"
                  />
                </div>
                
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
                    Bharat Esport Express
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
                    India's premier gaming community, dedicated to elevating the esports ecosystem through tournaments, content creation, and professional player development.
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    Founded in 2023, we've quickly grown into one of the most respected names in Indian esports, connecting gamers nationwide and showcasing local talent on the global stage.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8">
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-navy-900/70 rounded-lg border border-navy-700">
                  <div className="p-3 rounded-full bg-blue-500/20 mb-3 md:mb-4">
                    <Trophy className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 text-white">Elite Competitions</h4>
                  <p className="text-gray-400 text-sm md:text-base">Organizing high-stakes tournaments across multiple game titles with substantial prize pools</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-navy-900/70 rounded-lg border border-navy-700">
                  <div className="p-3 rounded-full bg-blue-500/20 mb-3 md:mb-4">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 text-white">Community First</h4>
                  <p className="text-gray-400 text-sm md:text-base">Building a supportive network of players, creators, and fans united by their passion for gaming</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-navy-900/70 rounded-lg border border-navy-700 sm:col-span-2 md:col-span-1">
                  <div className="p-3 rounded-full bg-blue-500/20 mb-3 md:mb-4">
                    <Gamepad className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2 text-white">Future of Gaming</h4>
                  <p className="text-gray-400 text-sm md:text-base">Promoting professional gaming as a viable career path for talented players across India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutUs;
