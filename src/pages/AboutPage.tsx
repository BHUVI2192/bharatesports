
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Gamepad, Calendar, MapPin, Mail, Instagram } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutPage = () => {
  return (
    <PageLayout 
      title="ABOUT US" 
      subtitle="India's premier gaming community, dedicated to elevating the esports ecosystem"
    >
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="flex w-full h-auto mb-8 bg-navy-900">
          <TabsTrigger 
            value="about"
            className="flex-grow data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
          >
            Our Story
          </TabsTrigger>
          <TabsTrigger 
            value="mission"
            className="flex-grow data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
          >
            Mission
          </TabsTrigger>
          <TabsTrigger 
            value="team"
            className="flex-grow data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
          >
            Our Team
          </TabsTrigger>
        </TabsList>
        
        {/* About Section */}
        <TabsContent value="about" className="mt-0">
          <Card className="bg-navy-800 border border-navy-700 overflow-hidden mb-8">
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
                      Our Journey
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Founded in 2023, Bharat Esport Express began with a simple yet ambitious vision: to transform the Indian esports landscape and create opportunities for talented gamers across the country.
                    </p>
                    <p className="text-gray-400 mb-4">
                      What started as a passionate community of competitive gamers has evolved into a comprehensive esports ecosystem that spans tournaments, content creation, player development, and gaming accessories.
                    </p>
                    <p className="text-gray-400">
                      We've quickly grown into one of the most respected names in Indian esports, connecting gamers nationwide and showcasing local talent on the global stage.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
          
          <div className="bg-navy-800 border border-navy-700 rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">50+</p>
                <p className="text-gray-300">Tournaments Hosted</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">₹1CR+</p>
                <p className="text-gray-300">Prize Money Awarded</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">1M+</p>
                <p className="text-gray-300">Community Members</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">15</p>
                <p className="text-gray-300">Cities Reached</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Mission Section */}
        <TabsContent value="mission" className="mt-0">
          <Card className="bg-navy-800 border border-navy-700 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-xl text-blue-400 font-semibold italic">
                  "To create a thriving esports ecosystem that empowers Indian gamers to compete at the highest level of professional gaming."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-white">What We Do</h4>
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Organize professional tournaments with substantial prize pools</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Provide coaching and mentorship to aspiring esports athletes</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Create content that educates and entertains the gaming community</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Connect players with sponsors, teams, and other opportunities</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Provide access to quality gaming gear and accessories</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Our Vision For 2030</h4>
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Establish India as a top-tier contender in global esports competitions</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Create sustainable careers for 10,000+ professional players across the country</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Build esports training facilities in 50 major cities</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Host international tournaments attracting global talent to compete in India</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-500 mr-3">•</span>
                      <span className="text-gray-300">Develop esports education programs in partnership with universities</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <h4 className="text-xl font-bold mb-3 text-white">Our Values</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4">
                    <h5 className="font-bold text-blue-400 mb-2">Excellence</h5>
                    <p className="text-gray-300 text-sm">We strive for excellence in everything we do, from tournament organization to player development.</p>
                  </div>
                  <div className="p-4">
                    <h5 className="font-bold text-blue-400 mb-2">Inclusivity</h5>
                    <p className="text-gray-300 text-sm">We believe gaming is for everyone, regardless of background, gender, or experience level.</p>
                  </div>
                  <div className="p-4">
                    <h5 className="font-bold text-blue-400 mb-2">Innovation</h5>
                    <p className="text-gray-300 text-sm">We continuously explore new ways to improve the esports experience for players and fans alike.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Team Section */}
        <TabsContent value="team" className="mt-0">
          <Card className="bg-navy-800 border border-navy-700 overflow-hidden mb-8">
            <CardContent className="p-8 md:p-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 text-white">Leadership Team</h3>
                <p className="text-gray-300">
                  Meet the passionate individuals driving our mission forward
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {[
                  {
                    name: "Shaik Shahul",
                    position: "Founder & CEO",
                    bio: "Visionary leader with extensive experience in esports management and a passion for developing the Indian gaming ecosystem.",
                    instagram: "https://www.instagram.com/ig_sparkzzz?igsh=c3JhaGZueGhreWpv"
                  },
                  {
                    name: "Bhuvan N",
                    position: "Co-founder & Managing Director",
                    bio: "Strategic business developer focused on expanding Bharat Esports' reach and creating opportunities for players across India.",
                    instagram: "https://www.instagram.com/damn_itx.bhuvi?igsh=MWZzN3Z5MHU0anVwaA=="
                  }
                ].map((member, index) => (
                  <div key={index} className="bg-navy-900 p-6 rounded-lg border border-navy-700">
                    <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-blue-400 font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white text-center mb-1">{member.name}</h4>
                    <p className="text-blue-400 text-sm text-center mb-3">{member.position}</p>
                    <p className="text-gray-400 text-sm text-center mb-4">{member.bio}</p>
                    <div className="flex justify-center">
                      <a 
                        href={member.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>Follow on Instagram</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-navy-800 border border-navy-700 rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Connect With Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center p-4">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300">Andhra Pradesh, Karnataka</p>
              </div>
              <div className="flex items-center justify-center p-4">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300">bharatesports.bgmi@gmail.com</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default AboutPage;
