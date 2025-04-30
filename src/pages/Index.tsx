
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OverviewSection from '@/components/OverviewSection';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const sections = [
    {
      id: "news",
      title: "LATEST NEWS",
      description: "Stay updated with the latest developments, tournaments, and announcements from the world of esports in India and beyond.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop",
      buttonText: "View All News",
      link: "/news",
      color: "blue"
    },
    {
      id: "accessories",
      title: "ELITE GEAR",
      description: "Level up your game with premium accessories trusted by professional esports athletes. Find the best gaming peripherals to enhance your performance.",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2940&auto=format&fit=crop",
      buttonText: "Browse Accessories",
      link: "/accessories",
      color: "green"
    },
    {
      id: "about",
      title: "ABOUT US",
      description: "India's premier gaming community, dedicated to elevating the esports ecosystem through tournaments, content creation, and professional player development.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2942&auto=format&fit=crop",
      buttonText: "Learn More",
      link: "/about",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <div className="container-custom py-12 md:py-20 lg:py-24 space-y-16 md:space-y-24 lg:space-y-32">
        {sections.map((section, index) => (
          <OverviewSection 
            key={section.id}
            title={section.title} 
            description={section.description}
            image={section.image}
            reverse={index % 2 !== 0}
            color={section.color}
          >
            <Button 
              asChild
              className={`mt-4 md:mt-6 px-6 ${
                section.color === "blue" ? "bg-blue-500 hover:bg-blue-600" : 
                section.color === "green" ? "bg-emerald-500 hover:bg-emerald-600" : 
                "bg-purple-500 hover:bg-purple-600"
              }`}
            >
              <Link to={section.link}>
                {section.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </OverviewSection>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
