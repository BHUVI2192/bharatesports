
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Gamepad } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-navy-950">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">ABOUT</span>{" "}
            <span className="text-blue-500">US</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        </div>
        
        <Card className="bg-navy-800 border border-navy-700 overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="mb-10">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <img 
                    src="/lovable-uploads/4ce209e6-a051-4f8f-8d93-b1cb7c888568.png" 
                    alt="Bharat Esport Express Logo" 
                    className="w-48 h-48 object-contain"
                  />
                </div>
                
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    Bharat Esport Express
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    India's premier gaming community, dedicated to elevating the esports ecosystem through tournaments, content creation, and professional player development.
                  </p>
                  <p className="text-gray-400">
                    Founded in 2023, we've quickly grown into one of the most respected names in Indian esports, connecting gamers nationwide and showcasing local talent on the global stage.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col items-center text-center p-6 bg-navy-900/70 rounded-lg border border-navy-700">
                  <div className="p-3 rounded-full bg-blue-500/20 mb-4">
                    <Trophy className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Elite Competitions</h4>
                  <p className="text-gray-400">Organizing high-stakes tournaments across multiple game titles with substantial prize pools</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-navy-900/70 rounded-lg border border-navy-700">
                  <div className="p-3 rounded-full bg-blue-500/20 mb-4">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Community First</h4>
                  <p className="text-gray-400">Building a supportive network of players, creators, and fans united by their passion for gaming</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-navy-900/70 rounded-lg border border-navy-700">
                  <div className="p-3 rounded-full bg-blue-500/20 mb-4">
                    <Gamepad className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">Future of Gaming</h4>
                  <p className="text-gray-400">Promoting professional gaming as a viable career path for talented players across India</p>
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
