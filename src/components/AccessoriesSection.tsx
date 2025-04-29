
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, Keyboard, Gamepad, Monitor, Mouse } from "lucide-react";

const accessories = [
  {
    id: 1,
    title: "Pro Gaming Headset",
    description: "Immersive 7.1 surround sound with noise-cancelling mic",
    price: "₹6,999",
    icon: Headphones,
    color: "neon-pink",
    link: "https://www.amazon.in"
  },
  {
    id: 2,
    title: "Mechanical RGB Keyboard",
    description: "Tactile mechanical switches with customizable RGB",
    price: "₹8,499",
    icon: Keyboard,
    color: "neon-blue",
    link: "https://www.flipkart.com"
  },
  {
    id: 3,
    title: "Elite Gaming Controller",
    description: "Precision control with programmable buttons",
    price: "₹9,999",
    icon: Gamepad,
    color: "neon-green",
    link: "https://www.amazon.in"
  },
  {
    id: 4,
    title: "240Hz Gaming Monitor",
    description: "Ultra-smooth gameplay with 1ms response time",
    price: "₹24,999",
    icon: Monitor,
    color: "neon-blue",
    link: "https://www.flipkart.com"
  },
  {
    id: 5,
    title: "Lightweight Gaming Mouse",
    description: "20K DPI optical sensor with programmable buttons",
    price: "₹4,999",
    icon: Mouse,
    color: "neon-pink",
    link: "https://www.amazon.in"
  },
  {
    id: 6,
    title: "Pro Controller",
    description: "Premium controller for competitive gaming",
    price: "₹12,499",
    icon: Gamepad,
    color: "neon-green",
    link: "https://www.flipkart.com"
  }
];

const AccessoriesSection = () => {
  return (
    <section id="accessories" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-transparent to-cyber-dark z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
            <span className="text-neon-blue blue-text">ELITE</span> <span className="text-white">GEAR</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Level up your game with premium accessories trusted by professional esports athletes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((item) => (
            <div key={item.id} className="group">
              <Card className="relative h-full bg-cyber-dark/60 backdrop-blur-md border border-gray-800 overflow-hidden transition-all duration-300 group-hover:border-neon-blue/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-navy/50 to-cyber-dark opacity-80"></div>
                
                <div className={`absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 rounded-full blur-3xl bg-${item.color}/20 group-hover:bg-${item.color}/30 transition-all duration-500`}></div>
                
                <CardContent className="relative z-10 pt-8">
                  <div className={`p-4 rounded-lg mb-4 inline-block bg-${item.color}/10 text-${item.color}`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-cyber font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-2">
                    {item.description}
                  </p>
                  <p className="text-lg font-cyber font-bold text-white">
                    {item.price}
                  </p>
                </CardContent>
                
                <CardFooter className="relative z-10 border-t border-gray-800 bg-cyber-dark/80">
                  <Button 
                    onClick={() => window.open(item.link, '_blank')}
                    className="w-full bg-transparent hover:bg-neon-blue/10 text-neon-blue border border-neon-blue/50 hover:border-neon-blue font-cyber"
                  >
                    Buy Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
