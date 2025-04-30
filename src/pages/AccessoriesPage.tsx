
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, Keyboard, Gamepad, Monitor, Mouse, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const accessories = [
  // Gaming Headsets
  {
    id: 1,
    title: "Pro Gaming Headset",
    description: "Immersive 7.1 surround sound with noise-cancelling mic",
    price: "₹6,999",
    icon: Headphones,
    link: "https://www.amazon.in",
    category: "headsets",
    features: [
      "7.1 Virtual Surround Sound",
      "50mm Audio Drivers",
      "Detachable Noise-Cancelling Microphone",
      "Memory Foam Ear Cushions",
      "RGB Lighting with 16.8 Million Colors"
    ]
  },
  {
    id: 2,
    title: "Wireless Tournament Headset",
    description: "Low-latency wireless with 30-hour battery life",
    price: "₹12,499",
    icon: Headphones,
    link: "https://www.flipkart.com",
    category: "headsets",
    features: [
      "Ultra-Low Latency Wireless Connection",
      "30-Hour Battery Life",
      "Active Noise Cancellation",
      "Dual Wireless + Bluetooth",
      "Custom-Tuned EQ Profiles"
    ]
  },
  {
    id: 3,
    title: "Budget Gaming Headset",
    description: "Quality sound at an affordable price point",
    price: "₹2,999",
    icon: Headphones,
    link: "https://www.amazon.in",
    category: "headsets",
    features: [
      "Stereo Sound",
      "Padded Headband",
      "Adjustable Microphone",
      "In-Line Audio Controls",
      "Multi-Platform Compatibility"
    ]
  },
  
  // Keyboards
  {
    id: 4,
    title: "Mechanical RGB Keyboard",
    description: "Tactile mechanical switches with customizable RGB",
    price: "₹8,499",
    icon: Keyboard,
    link: "https://www.flipkart.com",
    category: "keyboards",
    features: [
      "Cherry MX Blue Switches",
      "Full RGB Per-Key Backlighting",
      "Aircraft-Grade Aluminum Frame",
      "Programmable Macro Keys",
      "Detachable Wrist Rest"
    ]
  },
  {
    id: 5,
    title: "Compact Tournament Keyboard",
    description: "60% form factor with premium switches",
    price: "₹7,999",
    icon: Keyboard,
    link: "https://www.amazon.in",
    category: "keyboards",
    features: [
      "Optical Switches (20ms Faster Actuation)",
      "Hot-Swappable Key Design",
      "Double-Shot PBT Keycaps",
      "Onboard Memory for Multiple Profiles",
      "Customizable RGB Lighting"
    ]
  },
  {
    id: 6,
    title: "Wireless Gaming Keyboard",
    description: "Low-latency wireless with programmable keys",
    price: "₹11,499",
    icon: Keyboard,
    link: "https://www.flipkart.com",
    category: "keyboards",
    features: [
      "1ms Response Rate Wireless",
      "40-Hour Battery Life",
      "TenKeyLess Design",
      "Media Control Keys",
      "Dual Bluetooth + 2.4GHz Connectivity"
    ]
  },
  
  // Controllers
  {
    id: 7,
    title: "Elite Gaming Controller",
    description: "Precision control with programmable buttons",
    price: "₹9,999",
    icon: Gamepad,
    link: "https://www.amazon.in",
    category: "controllers",
    features: [
      "Adjustable-Tension Thumbsticks",
      "Hair-Trigger Locks",
      "Remappable Paddles",
      "Interchangeable Components",
      "40-Hour Battery Life"
    ]
  },
  {
    id: 8,
    title: "Pro Controller",
    description: "Premium controller for competitive gaming",
    price: "₹12,499",
    icon: Gamepad,
    link: "https://www.flipkart.com",
    category: "controllers",
    features: [
      "Adaptive Triggers",
      "Haptic Feedback",
      "Built-in Microphone",
      "Motion Controls",
      "Customizable Button Mapping"
    ]
  },
  {
    id: 9,
    title: "Mobile Gaming Controller",
    description: "Turn your smartphone into a gaming console",
    price: "₹4,499",
    icon: Gamepad,
    link: "https://www.amazon.in",
    category: "controllers",
    features: [
      "Universal Phone Compatibility",
      "Bluetooth 5.0 Connection",
      "Rechargeable Battery",
      "Ergonomic Design",
      "Tactile Buttons and Triggers"
    ]
  },
  
  // Monitors
  {
    id: 10,
    title: "240Hz Gaming Monitor",
    description: "Ultra-smooth gameplay with 1ms response time",
    price: "₹24,999",
    icon: Monitor,
    link: "https://www.flipkart.com",
    category: "monitors",
    features: [
      "240Hz Refresh Rate",
      "1ms GTG Response Time",
      "Full HD Resolution",
      "Adaptive Sync Technology",
      "HDR Support"
    ]
  },
  {
    id: 11,
    title: "4K HDR Gaming Monitor",
    description: "Stunning visuals with 144Hz refresh rate",
    price: "₹39,999",
    icon: Monitor,
    link: "https://www.amazon.in",
    category: "monitors",
    features: [
      "4K UHD Resolution",
      "HDR1000 Certified",
      "144Hz Refresh Rate",
      "1ms MPRT Response Time",
      "95% DCI-P3 Color Gamut"
    ]
  },
  {
    id: 12,
    title: "Ultra-wide Curved Monitor",
    description: "Immersive 34-inch curved gaming experience",
    price: "₹34,999",
    icon: Monitor,
    link: "https://www.flipkart.com",
    category: "monitors",
    features: [
      "34\" Ultra-wide 21:9 Format",
      "3440 x 1440 Resolution",
      "1800R Curvature",
      "165Hz Refresh Rate",
      "1ms Response Time"
    ]
  },
  
  // Mice
  {
    id: 13,
    title: "Lightweight Gaming Mouse",
    description: "20K DPI optical sensor with programmable buttons",
    price: "₹4,999",
    icon: Mouse,
    link: "https://www.amazon.in",
    category: "mice",
    features: [
      "Ultra-Lightweight (63g)",
      "20K DPI Optical Sensor",
      "8 Programmable Buttons",
      "RGB Lighting with 16.8 Million Colors",
      "PTFE Skates for Smooth Glide"
    ]
  },
  {
    id: 14,
    title: "Wireless Pro Mouse",
    description: "Lag-free wireless with 70 hour battery life",
    price: "₹7,499",
    icon: Mouse,
    link: "https://www.flipkart.com",
    category: "mice",
    features: [
      "25K DPI Optical Sensor",
      "70-Hour Battery Life",
      "Sub-1ms Wireless Connection",
      "Lightweight Design (80g)",
      "Onboard Memory Profiles"
    ]
  },
  {
    id: 15,
    title: "MMO Gaming Mouse",
    description: "12 side buttons perfect for MMO gaming",
    price: "₹5,999",
    icon: Mouse,
    link: "https://www.amazon.in",
    category: "mice",
    features: [
      "12 Programmable Side Buttons",
      "19 Programmable Buttons Total",
      "16K DPI Optical Sensor",
      "Interchangeable Side Plates",
      "5 Onboard Profiles"
    ]
  }
];

const categories = [
  { value: "all", label: "All Accessories" },
  { value: "headsets", label: "Headsets" },
  { value: "keyboards", label: "Keyboards" },
  { value: "controllers", label: "Controllers" },
  { value: "monitors", label: "Monitors" },
  { value: "mice", label: "Mice" }
];

const AccessoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredAccessories = accessories.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.price.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout 
      title="ELITE GEAR" 
      subtitle="Level up your game with premium accessories trusted by professional esports athletes"
    >
      <div className="mb-12 max-w-xl mx-auto">
        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Search accessories..."
            value={searchQuery}
            onChange={handleSearch}
            className="bg-navy-900 border-navy-700 pl-10 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="flex w-full h-auto flex-wrap bg-navy-900">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value}
                value={category.value}
                className="flex-grow data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      {filteredAccessories.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No accessories found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccessories.map((item) => (
            <div key={item.id} className="group">
              <Card className="h-full bg-navy-800 border border-navy-700 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-soft">
                <CardContent className="relative pt-8">
                  <div className="p-4 rounded-lg mb-4 inline-block bg-blue-500/10 text-blue-400">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {item.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
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
      )}
    </PageLayout>
  );
};

export default AccessoriesPage;
