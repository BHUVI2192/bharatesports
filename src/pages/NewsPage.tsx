
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
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
    content: 'Bharat Esport Express is excited to announce our largest national tournament to date, with registration opening next week for players across India. The tournament will feature multiple game titles including BGMI, Valorant, and Free Fire, with a combined prize pool of ₹50 lakh. This event represents our commitment to growing the esports ecosystem in India and providing opportunities for players to showcase their talents on a national stage. Qualifiers will be held in 12 cities across the country, with finals being hosted in a state-of-the-art arena in Mumbai with live streaming available on all major platforms.',
    image: 'tournament.jpg'
  },
  {
    id: '2',
    title: 'New Gaming Center Opens in Bengaluru with Bharat Esport Express Partnership',
    excerpt: 'State-of-the-art facility features 50+ gaming stations, coaching areas, and a mini-arena for local tournaments.',
    date: 'April 20, 2025',
    content: 'We are proud to announce our partnership with the newest premium gaming center in Bengaluru, featuring over 50 high-end gaming stations, dedicated coaching areas, and a mini-arena for hosting local tournaments. The facility is equipped with the latest gaming technology, including 240Hz monitors, top-of-the-line PCs, and professional peripherals. As part of this partnership, Bharat Esport Express will be organizing weekly tournaments and training camps at the venue, providing local players with opportunities to improve their skills and compete in a professional environment.',
    image: 'gaming-center.jpg'
  },
  {
    id: '3',
    title: 'Bharat Esport Express Teams Up with Leading PC Brand for Gaming Laptops',
    excerpt: 'New line of gaming laptops specifically designed for the Indian esports market to launch next month.',
    date: 'April 15, 2025',
    content: 'Bharat Esport Express has partnered with a leading PC manufacturer to launch a new line of gaming laptops specifically designed for the Indian esports market. The laptops will feature the latest hardware components optimized for competitive gaming, with special emphasis on thermal performance in Indian climate conditions. The collaboration aims to make professional-grade gaming equipment more accessible to aspiring players across the country. The new laptops will be launched next month with special pricing for Bharat Esport Express community members.',
    image: 'gaming-laptop.jpg'
  },
  {
    id: '4',
    title: 'Rising Star Wins Bharat Esport Express Invitational',
    excerpt: '17-year-old prodigy from Chennai takes home the trophy and ₹5 lakhs in prize money after an impressive performance.',
    date: 'April 10, 2025',
    content: 'The Bharat Esport Express Invitational concluded yesterday with a surprising victory by 17-year-old prodigy from Chennai. The young talent showcased exceptional skills throughout the tournament, defeating several established professionals on his way to claiming the trophy and ₹5 lakhs in prize money. This victory marks a significant milestone in his emerging career and highlights the incredible talent pool developing across India. Bharat Esport Express has invited him to join our talent development program, which provides coaching, resources, and opportunities to compete at international events.',
    image: 'tournament-winner.jpg'
  },
  {
    id: '5',
    title: 'Bharat Esport Express Launches Scholarship Program for Young Gamers',
    excerpt: 'New initiative will provide financial support, equipment, and mentorship to promising esports talent across India.',
    date: 'April 5, 2025',
    content: 'Today marks the launch of our new scholarship program designed to identify and support promising esports talent across India. The program will provide financial assistance, gaming equipment, and professional mentorship to selected candidates, helping them pursue their dreams of becoming professional players. We are committed to discovering and nurturing talented individuals from all backgrounds, with a special focus on regions with limited access to gaming infrastructure. Applications are open now, with the first batch of scholars to be announced in June 2025.',
    image: 'scholarship.jpg'
  },
  {
    id: '6',
    title: 'Mobile Gaming Series Announced for Tier 2 and 3 Cities',
    excerpt: 'Upcoming tournament series aims to discover untapped gaming talent in smaller cities and rural areas.',
    date: 'April 1, 2025',
    content: 'Bharat Esport Express is proud to announce a new mobile gaming tournament series specifically designed to reach players in tier 2 and 3 cities across India. The series will focus on popular mobile titles that require less demanding hardware, making competitive gaming more accessible to players without high-end equipment. Tournaments will be organized in over 30 cities, with online qualifiers available for those unable to attend physical events. This initiative aims to discover untapped talent in regions traditionally underrepresented in the esports scene and provide them with a pathway to professional competition.',
    image: 'mobile-gaming.jpg'
  },
  // Additional articles beyond what was shown on the homepage
  {
    id: '7',
    title: 'Bharat Esport Express Partners with Major Telecom Provider',
    excerpt: 'New partnership aims to improve gaming infrastructure and reduce latency for competitive players across India.',
    date: 'March 25, 2025',
    content: 'We are excited to announce a strategic partnership with one of India\'s leading telecom providers to improve gaming infrastructure nationwide. This collaboration will focus on optimizing network routes for gaming traffic, reducing latency, and providing stable connections for competitive players. Special data plans will be introduced for gamers, featuring prioritized gaming traffic and discounted rates during tournament hours. This partnership represents a significant step forward in addressing one of the biggest challenges facing Indian esports athletes.',
    image: 'partnership.jpg'
  },
  {
    id: '8',
    title: 'College Esports Championship Concludes with Record Viewership',
    excerpt: 'Over 500,000 viewers tuned in to watch the finals of the inter-college esports championship organized by Bharat Esport Express.',
    date: 'March 20, 2025',
    content: 'The finals of our inter-college esports championship concluded last weekend with a record-breaking viewership of over 500,000 concurrent viewers across all streaming platforms. The tournament featured teams from 64 colleges across India competing in multiple game titles. The event has become a landmark in collegiate esports, providing students with a platform to showcase their skills while representing their institutions. The winning team from IIT Bombay secured not only the trophy but also internship opportunities with leading gaming companies partnered with Bharat Esport Express.',
    image: 'college-championship.jpg'
  },
  {
    id: '9',
    title: 'Bharat Esport Express Announces International Tournament Representation',
    excerpt: 'Top teams from our national circuit will represent India at the upcoming Asian Games esports exhibition matches.',
    date: 'March 15, 2025',
    content: 'We are proud to announce that top teams from the Bharat Esport Express national circuit have been selected to represent India at the upcoming Asian Games esports exhibition matches. This marks a significant milestone for Indian esports on the international stage and validates our efforts to develop world-class talent within the country. The selected teams will undergo intensive training camps led by international coaches before the event, ensuring they are fully prepared to compete against the best teams from across Asia.',
    image: 'international.jpg'
  },
  {
    id: '10',
    title: 'New Training Program Launched for Aspiring Esports Athletes',
    excerpt: 'Comprehensive coaching program includes mental conditioning, strategic gameplay, and physical fitness regimens.',
    date: 'March 10, 2025',
    content: 'Bharat Esport Express has launched a comprehensive training program for aspiring esports athletes, covering all aspects of professional gaming. The program includes technical skill development, strategic gameplay analysis, mental conditioning, and physical fitness regimens designed specifically for esports players. Training will be conducted by a team of coaches with experience in both competitive gaming and sports psychology. This holistic approach to player development addresses the unique challenges faced by esports athletes and helps them achieve peak performance while maintaining long-term health and wellbeing.',
    image: 'training.jpg'
  },
  {
    id: '11',
    title: 'Bharat Esport Express Community Crosses One Million Members',
    excerpt: 'Milestone celebration includes special events, giveaways, and exclusive tournaments for community members.',
    date: 'March 5, 2025',
    content: 'We are thrilled to announce that the Bharat Esport Express community has crossed the one million member milestone! To celebrate this achievement, we have planned a month of special events, exclusive tournaments, and giveaways for our community members. This growth reflects the expanding interest in esports across India and the value our platform provides to players, fans, and content creators. We remain committed to fostering a positive, inclusive community that supports the development of esports at all levels throughout the country.',
    image: 'community.jpg'
  },
  {
    id: '12',
    title: 'Industry Leaders Join Bharat Esport Express Advisory Board',
    excerpt: 'Veteran gaming executives and professional players join forces to guide the future of Indian esports development.',
    date: 'March 1, 2025',
    content: 'We are pleased to welcome several industry leaders to the newly formed Bharat Esport Express Advisory Board. The board includes veteran gaming executives, retired professional players, tournament organizers, and content creators, bringing together a wealth of experience from all aspects of the esports ecosystem. This distinguished group will provide strategic guidance as we continue to expand our programs and initiatives across India. Their expertise will be invaluable in shaping the future of Indian esports and ensuring that we address the needs of all stakeholders in this rapidly growing industry.',
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

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState(allNewsArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredNews(allNewsArticles);
    } else {
      const filtered = allNewsArticles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) || 
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNews(filtered);
    }
    setCurrentPage(1);
  };

  const handlePopularSearch = (term: string) => {
    setSearchQuery(term);
    const filtered = allNewsArticles.filter(article => 
      article.title.toLowerCase().includes(term.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(term.toLowerCase()) ||
      article.content.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredNews(filtered);
    setCurrentPage(1);
  };
  
  // Get current news items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  
  return (
    <PageLayout 
      title="LATEST NEWS" 
      subtitle="Stay updated with the latest developments, tournaments, and announcements from the world of esports"
    >
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
    </PageLayout>
  );
};

export default NewsPage;
