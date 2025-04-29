
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden grid-background">
      <div className="absolute inset-0 bg-radial-glow z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold font-cyber tracking-tight">
              <span className="block text-neon-pink neon-text">ENTER</span>
              <span className="block text-neon-blue blue-text">THE</span>
              <span className="block text-neon-green green-text">ARENA</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
              Experience the ultimate cybernetic gaming universe with cutting-edge
              graphics and immersive gameplay.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white font-cyber text-lg px-8 py-6 h-auto">
                Play Now
              </Button>
              <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-cyber text-lg px-8 py-6 h-auto">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink to-neon-blue rounded-lg blur-sm animate-border-glow"></div>
            <div className="relative bg-cyber-dark rounded-lg overflow-hidden aspect-video animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-4xl font-bold text-white font-pixel animate-neon-pulse">GAMEPLAY</span>
              </div>
              {/* This would be an actual image or video in production */}
              <div className="bg-cyber-dark w-full h-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyber-dark to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default Hero;
