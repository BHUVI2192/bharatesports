
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

// Extended news articles array with more items for archive
const allNewsArticles = [
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
  },
  // Archive articles
  {
    id: '7',
    title: 'Bharat Esport Express Partners with Major Telecom Provider',
    excerpt: 'New partnership aims to improve gaming infrastructure and reduce latency for competitive players across India.',
    date: 'March 25, 2025',
    image: 'partnership.jpg'
  },
  {
    id: '8',
    title: 'College Esports Championship Concludes with Record Viewership',
    excerpt: 'Over 500,000 viewers tuned in to watch the finals of the inter-college esports championship organized by Bharat Esport Express.',
    date: 'March 20, 2025',
    image: 'college-championship.jpg'
  },
  {
    id: '9',
    title: 'Bharat Esport Express Announces International Tournament Representation',
    excerpt: 'Top teams from our national circuit will represent India at the upcoming Asian Games esports exhibition matches.',
    date: 'March 15, 2025',
    image: 'international.jpg'
  },
  {
    id: '10',
    title: 'New Training Program Launched for Aspiring Esports Athletes',
    excerpt: 'Comprehensive coaching program includes mental conditioning, strategic gameplay, and physical fitness regimens.',
    date: 'March 10, 2025',
    image: 'training.jpg'
  },
  {
    id: '11',
    title: 'Bharat Esport Express Community Crosses One Million Members',
    excerpt: 'Milestone celebration includes special events, giveaways, and exclusive tournaments for community members.',
    date: 'March 5, 2025',
    image: 'community.jpg'
  },
  {
    id: '12',
    title: 'Industry Leaders Join Bharat Esport Express Advisory Board',
    excerpt: 'Veteran gaming executives and professional players join forces to guide the future of Indian esports development.',
    date: 'March 1, 2025',
    image: 'advisory-board.jpg'
  }
];

const popularSearches = [
  "BGMI Tournaments", 
  "Esports Scholarships", 
  "Gaming Laptops", 
  "PC Components", 
  "Mobile Gaming"
];

const NewsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState(allNewsArticles.slice(0, 6)); // Default to first 6 items
  const [showAllNews, setShowAllNews] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredNews(showAllNews ? allNewsArticles : allNewsArticles.slice(0, 6));
    } else {
      const filtered = allNewsArticles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) || 
        article.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNews(filtered);
    }
    setCurrentPage(1);
  };

  const handlePopularSearch = (term: string) => {
    setSearchQuery(term);
    const filtered = allNewsArticles.filter(article => 
      article.title.toLowerCase().includes(term.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredNews(filtered);
    setCurrentPage(1);
  };

  const handleViewAllNews = () => {
    setShowAllNews(true);
    setFilteredNews(allNewsArticles);
    setCurrentPage(1);
  };
  
  // Get current news items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  
  return (
    <section id="news" className="section-padding bg-navy-950">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">LATEST</span>{" "}
            <span className="text-blue-500">NEWS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest developments, tournaments, and announcements from the world of esports
          </p>
        </div>

        <div className="mb-10 max-w-xl mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={handleSearch}
              className="bg-navy-900 border-navy-700 pl-10 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-gray-400">Popular searches:</span>
            {popularSearches.map(term => (
              <button
                key={term}
                onClick={() => handlePopularSearch(term)}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((article) => (
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
        
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No news articles found matching your search.</p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination className="my-8">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={() => setCurrentPage(prev => prev - 1)} />
                </PaginationItem>
              )}
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    isActive={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => setCurrentPage(prev => prev + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
        
        <div className="text-center mt-12">
          <Button 
            className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 text-lg px-8"
            onClick={handleViewAllNews}
          >
            View All News <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
