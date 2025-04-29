
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const newsArticles = [
  {
    id: '1',
    title: 'Bharat Esport Express Announces Major National Tournament',
    date: 'April 25, 2025',
    author: 'Rahul Sharma',
    content: `
      <p>Bharat Esport Express is thrilled to announce its largest national tournament to date, featuring competitive play across multiple titles with a combined prize pool of ₹50 lakhs.</p>
      
      <p>The tournament will feature qualifying rounds in major cities across India, including Delhi, Mumbai, Bangalore, Hyderabad, and Kolkata, with the grand finals to be held in a state-of-the-art arena in Gurugram.</p>
      
      <p>Registration will open next week for all skill levels, with separate divisions for amateur and professional teams. This marks a significant milestone in our mission to grow the esports ecosystem in India and provide opportunities for talented players to showcase their skills on a national stage.</p>
      
      <p>"We're incredibly excited to create this platform for Indian gamers," said Vikram Mehta, Founder of Bharat Esport Express. "This tournament represents our commitment to fostering competitive gaming and building a sustainable career path for aspiring esports professionals in India."</p>
      
      <p>In addition to the main tournament, the event will feature meet-and-greets with popular gaming influencers, product showcases from leading gaming hardware manufacturers, and workshops on professional gaming careers.</p>
    `,
    image: 'tournament.jpg'
  },
  {
    id: '2',
    title: 'New Gaming Center Opens in Bengaluru with Bharat Esport Express Partnership',
    date: 'April 20, 2025',
    author: 'Priya Patel',
    content: `
      <p>A state-of-the-art gaming center has opened its doors in Bengaluru's Koramangala district through a partnership with Bharat Esport Express, offering high-end gaming stations and training facilities for aspiring professional gamers.</p>
      
      <p>The 5,000 square foot facility features over 50 gaming stations equipped with the latest hardware, dedicated coaching areas, and a small arena for hosting local tournaments.</p>
      
      <p>This marks the first of several planned gaming centers that will serve as hubs for the Bharat Esport Express community, providing accessible high-end gaming equipment and structured training programs.</p>
      
      <p>"Many talented gamers in India lack access to the equipment and coaching needed to compete at the highest levels," explained Ananya Desai, Operations Director at Bharat Esport Express. "These centers aim to bridge that gap and nurture the incredible gaming talent we have in our country."</p>
      
      <p>The center will offer hourly play packages as well as monthly memberships with additional benefits such as coaching sessions, tournament entry fees, and exclusive community events.</p>
    `,
    image: 'gaming-center.jpg'
  },
  {
    id: '3',
    title: 'Bharat Esport Express Teams Up with Leading PC Brand for Gaming Laptops',
    date: 'April 15, 2025',
    author: 'Arjun Singh',
    content: `
      <p>Bharat Esport Express has announced a strategic partnership with a leading PC manufacturer to create a new line of gaming laptops specifically designed for the Indian esports market.</p>
      
      <p>The collaboration will result in high-performance gaming laptops at more accessible price points, with configurations optimized for popular competitive titles. Each device will come with Bharat Esport Express branding and exclusive in-game content.</p>
      
      <p>"We've worked closely with professional players to identify the optimal specifications for competitive gaming while keeping the price point reasonable for serious gamers," said Ravi Kumar, Technical Director at Bharat Esport Express. "These machines deliver exceptional performance without unnecessary features that drive up costs."</p>
      
      <p>The initial lineup will include three models at different price points, catering to entry-level, mid-range, and professional gamers. Each purchase will include a one-year membership to Bharat Esport Express premium services, including tournament entry vouchers and coaching sessions.</p>
      
      <p>Pre-orders will begin next month, with the first units expected to ship by the end of the quarter.</p>
    `,
    image: 'gaming-laptop.jpg'
  }
];

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsArticles.find(article => article.id === id);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-cyber-dark text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-cyber font-bold mb-6">Article Not Found</h1>
          <Button asChild>
            <Link to="/#news">
              <ArrowLeft className="mr-2" /> Back to News
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <Link to="/#news" className="inline-flex items-center text-neon-blue hover:text-neon-pink transition-colors mb-6 font-cyber">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
          </Link>
          
          <Card className="bg-cyber-dark/60 backdrop-blur-md border border-neon-blue/20 overflow-hidden">
            <div className="h-64 bg-cyber-navy/50 flex items-center justify-center">
              {/* In a real app, this would be an actual image */}
              <div className="p-4 rounded-full bg-neon-blue/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
            </div>
            
            <CardContent className="p-6 md:p-8">
              <h1 className="text-2xl md:text-4xl font-cyber font-bold mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-400 mb-6 gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{article.author}</span>
                </div>
              </div>
              
              <Separator className="mb-6 bg-gray-800" />
              
              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </CardContent>
          </Card>
          
          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-cyber font-bold mb-6">More News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {newsArticles
                .filter(a => a.id !== id)
                .slice(0, 2)
                .map(relatedArticle => (
                  <Card key={relatedArticle.id} className="bg-cyber-dark/60 backdrop-blur-md border border-gray-800 hover:border-neon-blue/50 transition-all">
                    <div className="h-40 bg-cyber-navy/50 flex items-center justify-center">
                      {/* Placeholder for image */}
                      <div className="p-3 rounded-full bg-neon-blue/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="text-lg font-cyber font-bold mb-2 line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{relatedArticle.date}</p>
                      <Button asChild size="sm" variant="outline" className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                        <Link to={`/news/${relatedArticle.id}`}>
                          Read Article
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
