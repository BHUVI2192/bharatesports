
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
    <section id="contact" className="section-padding bg-navy-950">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-white">CONNECT</span>{" "}
            <span className="text-blue-500">WITH US</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            Have questions or want to collaborate? Reach out to us directly or join our community on social media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          <Card className="bg-navy-800 border border-navy-700 overflow-hidden h-full">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="bg-navy-900 border-navy-700 focus:border-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-navy-900 border-navy-700 focus:border-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    className="bg-navy-900 border-navy-700 focus:border-blue-500 min-h-[100px] md:min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider py-5 md:py-6 h-auto text-base md:text-lg shadow-button"
                  >
                    {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                    <MessageSquare className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-navy-800 border border-navy-700 overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Follow Us</h3>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://www.instagram.com/bharat_esp0rts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 md:p-4 bg-navy-900 rounded-lg border border-navy-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="p-2 rounded-full bg-blue-500/20">
                      <Instagram className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                    </div>
                    <div className="ml-3 md:ml-4">
                      <h4 className="text-base md:text-lg font-medium text-white">Instagram</h4>
                      <p className="text-gray-400 text-sm md:text-base">@bharat_esp0rts</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://youtube.com/@bharatesportsxpress?si=OTjdfwZYgGk4YAqt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 md:p-4 bg-navy-900 rounded-lg border border-navy-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="p-2 rounded-full bg-blue-500/20">
                      <Youtube className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                    </div>
                    <div className="ml-3 md:ml-4">
                      <h4 className="text-base md:text-lg font-medium text-white">YouTube</h4>
                      <p className="text-gray-400 text-sm md:text-base">Bharat Esports Xpress</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:bharatesports.bgmi@gmail.com" 
                    className="flex items-center p-3 md:p-4 bg-navy-900 rounded-lg border border-navy-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="p-2 rounded-full bg-blue-500/20">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                    </div>
                    <div className="ml-3 md:ml-4">
                      <h4 className="text-base md:text-lg font-medium text-white">Email</h4>
                      <p className="text-gray-400 text-sm md:text-base">bharatesports.bgmi@gmail.com</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-navy-800 border border-navy-700 overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-blue-500">Join Our Community</h3>
                <p className="text-gray-400 text-sm md:text-base mb-4">
                  Connect with other gamers, participate in tournaments, and stay updated on the latest news.
                </p>
                <Button 
                  onClick={() => window.open('https://chat.whatsapp.com/E3pTs9m945m8t2NkNhXeKX', '_blank')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 md:py-5 h-auto shadow-button"
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
