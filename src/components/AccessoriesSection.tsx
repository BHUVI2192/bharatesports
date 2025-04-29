
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
    link: "https://www.amazon.in"
  },
  {
    id: 2,
    title: "Mechanical RGB Keyboard",
    description: "Tactile mechanical switches with customizable RGB",
    price: "₹8,499",
    icon: Keyboard,
    link: "https://www.flipkart.com"
  },
  {
    id: 3,
    title: "Elite Gaming Controller",
    description: "Precision control with programmable buttons",
    price: "₹9,999",
    icon: Gamepad,
    link: "https://www.amazon.in"
  },
  {
    id: 4,
    title: "240Hz Gaming Monitor",
    description: "Ultra-smooth gameplay with 1ms response time",
    price: "₹24,999",
    icon: Monitor,
    link: "https://www.flipkart.com"
  },
  {
    id: 5,
    title: "Lightweight Gaming Mouse",
    description: "20K DPI optical sensor with programmable buttons",
    price: "₹4,999",
    icon: Mouse,
    link: "https://www.amazon.in"
  },
  {
    id: 6,
    title: "Pro Controller",
    description: "Premium controller for competitive gaming",
    price: "₹12,499",
    icon: Gamepad,
    link: "https://www.flipkart.com"
  }
];

const AccessoriesSection = () => {
  return (
    <section id="accessories" className="section-padding bg-navy-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-500">ELITE</span>{" "}
            <span className="text-white">GEAR</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Level up your game with premium accessories trusted by professional esports athletes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((item) => (
            <div key={item.id} className="group">
              <Card className="h-full bg-navy-800 border border-navy-700 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-soft">
                <CardContent className="relative pt-8">
                  <div className="p-4 rounded-lg mb-4 inline-block bg-blue-500/10 text-blue-400">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-2">
                    {item.description}
                  </p>
                  <p className="text-lg font-bold text-white">
                    {item.price}
                  </p>
                </CardContent>
                
                <CardFooter className="border-t border-navy-700 bg-navy-800/80">
                  <Button 
                    onClick={() => window.open(item.link, '_blank')}
                    className="w-full bg-transparent hover:bg-blue-500/10 text-blue-400 border border-blue-500/50 hover:border-blue-500"
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
