
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Instagram, Youtube, Mail, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Format WhatsApp message
      const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
      
      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://chat.whatsapp.com/JRZJANi7MfLKtyB7yC0IT9`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form and show success toast
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-dark z-0"></div>
      <div className="absolute inset-0 bg-grid-background opacity-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-2">
            <span className="text-white">CONNECT</span> <span className="text-neon-green green-text">WITH US</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us directly or join our community on social media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-cyber-dark/60 backdrop-blur-md border border-neon-green/20 overflow-hidden relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-green/5"></div>
            <div className="absolute -inset-px bg-gradient-to-r from-neon-green/20 to-neon-blue/20 opacity-20 blur-sm group-hover:opacity-30 transition duration-300"></div>
            
            <CardContent className="relative p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-cyber">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="bg-cyber-dark/80 border-gray-700 focus:border-neon-green font-cyber"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-cyber">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-cyber-dark/80 border-gray-700 focus:border-neon-green font-cyber"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-cyber">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    className="bg-cyber-dark/80 border-gray-700 focus:border-neon-green min-h-[120px] font-cyber"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neon-green hover:bg-neon-green/80 text-cyber-dark font-bold tracking-wider py-6 h-auto font-cyber text-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                    <MessageSquare className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="bg-cyber-dark/60 backdrop-blur-md border border-neon-blue/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 to-neon-blue/5"></div>
              <div className="absolute -inset-px bg-gradient-to-r from-neon-blue/20 to-neon-pink/20 opacity-20 blur-sm group-hover:opacity-30 transition duration-300"></div>
              
              <CardContent className="relative p-8">
                <h3 className="text-2xl font-cyber font-bold mb-6 text-white">Follow Us</h3>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-cyber-navy/30 rounded-lg border border-gray-800 hover:border-neon-pink transition-all duration-300"
                  >
                    <div className="p-2 rounded-full bg-neon-pink/20">
                      <Instagram className="h-6 w-6 text-neon-pink" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-cyber font-medium text-white">Instagram</h4>
                      <p className="text-gray-400">@bharatesportexpress</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-cyber-navy/30 rounded-lg border border-gray-800 hover:border-neon-blue transition-all duration-300"
                  >
                    <div className="p-2 rounded-full bg-neon-blue/20">
                      <Youtube className="h-6 w-6 text-neon-blue" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-cyber font-medium text-white">YouTube</h4>
                      <p className="text-gray-400">Bharat Esport Express</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@bharatesportexpress.com" 
                    className="flex items-center p-4 bg-cyber-navy/30 rounded-lg border border-gray-800 hover:border-neon-green transition-all duration-300"
                  >
                    <div className="p-2 rounded-full bg-neon-green/20">
                      <Mail className="h-6 w-6 text-neon-green" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-cyber font-medium text-white">Email</h4>
                      <p className="text-gray-400">info@bharatesportexpress.com</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-cyber-dark/60 backdrop-blur-md border border-gray-800 overflow-hidden relative group animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent"></div>
              <CardContent className="relative p-8">
                <h3 className="text-xl font-cyber font-bold mb-3 text-neon-green">Join Our Community</h3>
                <p className="text-gray-400 mb-4">
                  Connect with other gamers, participate in tournaments, and stay updated on the latest news.
                </p>
                <Button 
                  onClick={() => window.open('https://chat.whatsapp.com/JRZJANi7MfLKtyB7yC0IT9', '_blank')}
                  className="w-full bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-green text-white font-cyber"
                >
                  Join WhatsApp Group
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
