
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from "lucide-react";

const newsArticles = [
  {
    id: '1',
    title: 'Bharat Esport Express Announces Major National Tournament',
    excerpt: 'Registration opens next week for our largest tournament yet, featuring a ₹50 lakh prize pool across multiple game titles.',
    date: 'April 25, 2025',
    image: 'tournament.jpg'
  },
  {
    id: '2',
    title: 'New Gaming Center Opens in Bengaluru with Bharat Esport Express Partnership',
    excerpt: 'State-of-the-art facility features 50+ gaming stations, coaching areas, and a mini-arena for local tournaments.',
    date: 'April 20, 2025',
    image: 'gaming-center.jpg'
  },
  {
    id: '3',
    title: 'Bharat Esport Express Teams Up with Leading PC Brand for Gaming Laptops',
    excerpt: 'New line of gaming laptops specifically designed for the Indian esports market to launch next month.',
    date: 'April 15, 2025',
    image: 'gaming-laptop.jpg'
  },
  {
    id: '4',
    title: 'Rising Star Wins Bharat Esport Express Invitational',
    excerpt: '17-year-old prodigy from Chennai takes home the trophy and ₹5 lakhs in prize money after an impressive performance.',
    date: 'April 10, 2025',
    image: 'tournament-winner.jpg'
  },
  {
    id: '5',
    title: 'Bharat Esport Express Launches Scholarship Program for Young Gamers',
    excerpt: 'New initiative will provide financial support, equipment, and mentorship to promising esports talent across India.',
    date: 'April 5, 2025',
    image: 'scholarship.jpg'
  },
  {
    id: '6',
    title: 'Mobile Gaming Series Announced for Tier 2 and 3 Cities',
    excerpt: 'Upcoming tournament series aims to discover untapped gaming talent in smaller cities and rural areas.',
    date: 'April 1, 2025',
    image: 'mobile-gaming.jpg'
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding bg-navy-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">LATEST</span>{" "}
            <span className="text-blue-500">NEWS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest developments, tournaments, and announcements from the world of esports
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="group">
              <Card className="h-full bg-navy-800 border border-navy-700 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-soft">
                <div className="h-48 bg-navy-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-blue-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">
                    {article.excerpt}
                  </p>
                </CardContent>
                
                <CardFooter className="border-t border-navy-700 p-4">
                  <Button 
                    asChild
                    variant="ghost" 
                    className="w-full justify-between text-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <Link to={`/news/${article.id}`}>
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 text-lg px-8"
          >
            View All News <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
