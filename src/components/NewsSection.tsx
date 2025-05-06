
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Search, ExternalLink, Play, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { useDeviceType } from '@/hooks/use-mobile';
import { 
  fetchRSSFeed, 
  fetchTalkEsport, 
  fetchEsportsMatches, 
  fetchYoutubeVideos 
} from '@/services/api';

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
  
  // Add states for integrated content
  const [rssFeedItems, setRssFeedItems] = useState([]);
  const [talkEsportItems, setTalkEsportItems] = useState([]);
  const [esportsMatches, setEsportsMatches] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [isLoadingRSS, setIsLoadingRSS] = useState(true);
  const [isLoadingTalkEsport, setIsLoadingTalkEsport] = useState(true);
  const [isLoadingMatches, setIsLoadingMatches] = useState(true);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  // Scheduler function for daily updates at 12 PM IST
  const scheduleNextUpdate = () => {
    const now = new Date();
    const nextUpdate = new Date();
    
    // Set to 12 PM IST (UTC+5:30)
    nextUpdate.setUTCHours(6); // 12 PM IST is 6:30 AM UTC
    nextUpdate.setUTCMinutes(30);
    nextUpdate.setSeconds(0);
    nextUpdate.setMilliseconds(0);
    
    // If it's already past 12 PM IST today, schedule for tomorrow
    if (now > nextUpdate) {
      nextUpdate.setDate(nextUpdate.getDate() + 1);
    }
    
    const timeUntilUpdate = nextUpdate.getTime() - now.getTime();
    
    // Schedule the next update
    setTimeout(() => {
      fetchAllContent();
      // After updating, schedule the next one for tomorrow
      scheduleNextUpdate();
    }, timeUntilUpdate);
    
    console.log(`Next content update scheduled for: ${nextUpdate.toLocaleString()}`);
  };

  // Function to fetch all external content
  const fetchAllContent = async () => {
    try {
      setIsLoadingRSS(true);
      const rssData = await fetchRSSFeed();
      setRssFeedItems(rssData);
      setIsLoadingRSS(false);
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
      setIsLoadingRSS(false);
    }
    
    try {
      setIsLoadingTalkEsport(true);
      const talkEsportData = await fetchTalkEsport();
      setTalkEsportItems(talkEsportData);
      setIsLoadingTalkEsport(false);
    } catch (error) {
      console.error('Error fetching TalkEsport:', error);
      setIsLoadingTalkEsport(false);
    }
    
    try {
      setIsLoadingMatches(true);
      const matchesData = await fetchEsportsMatches();
      setEsportsMatches(matchesData);
      setIsLoadingMatches(false);
    } catch (error) {
      console.error('Error fetching esports matches:', error);
      setIsLoadingMatches(false);
    }
    
    try {
      setIsLoadingVideos(true);
      const videosData = await fetchYoutubeVideos();
      setYoutubeVideos(videosData);
      setIsLoadingVideos(false);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      setIsLoadingVideos(false);
    }
  };

  // Initial fetch on component mount and schedule updates
  useEffect(() => {
    fetchAllContent();
    scheduleNextUpdate();
    
    // Clean up the scheduler when component unmounts
    return () => {
      // Clear any active timeouts
      // This is a simplified cleanup - in a real app with a backend,
      // you'd need a more robust solution
    };
  }, []);

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
  
  // Format date for esports matches
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
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
        
        {/* Tabs for different content types */}
        <Tabs defaultValue="articles" className="w-full mb-8">
          <TabsList className={`${isMobile ? 'w-full overflow-x-auto' : 'w-fit'} bg-navy-900 mb-6`}>
            <TabsTrigger value="articles" className="text-sm md:text-base">Articles</TabsTrigger>
            <TabsTrigger value="rss" className="text-sm md:text-base">Gaming News</TabsTrigger>
            <TabsTrigger value="talkesport" className="text-sm md:text-base">Headlines</TabsTrigger>
            <TabsTrigger value="matches" className="text-sm md:text-base">Tournaments</TabsTrigger>
            <TabsTrigger value="videos" className="text-sm md:text-base">Videos</TabsTrigger>
          </TabsList>
          
          {/* Regular news articles */}
          <TabsContent value="articles" className="mt-0">
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
          </TabsContent>
          
          {/* RSS Feed Content */}
          <TabsContent value="rss" className="mt-0">
            <div className="space-y-6">
              {isLoadingRSS ? (
                Array(5).fill(0).map((_, index) => (
                  <Card key={index} className="bg-navy-800 border-blue-500/30">
                    <div className="flex flex-col md:flex-row gap-4 p-4">
                      <Skeleton className="h-48 w-full md:w-64 rounded-md" />
                      <div className="flex-1 space-y-4">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-10 w-32" />
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                rssFeedItems?.map((item: any, index: number) => (
                  <Card key={index} className="bg-navy-800 border-blue-500/30 overflow-hidden">
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
                      {item.thumbnail && (
                        <div className={`${isMobile ? 'w-full h-56' : 'w-64 h-auto'}`}>
                          <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop';
                            }}
                          />
                        </div>
                      )}
                      <div className="flex-1 p-4">
                        <CardHeader className="p-0 pb-2">
                          <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                          <CardDescription className="text-gray-300">
                            {new Date(item.pubDate).toLocaleDateString()}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 py-2">
                          <p className="text-gray-200 line-clamp-2">
                            {item.description?.replace(/<[^>]*>?/gm, '') || 'Read more on the website'}
                          </p>
                        </CardContent>
                        <CardFooter className="p-0 pt-2">
                          <Button 
                            asChild 
                            className="bg-blue-500 hover:bg-blue-600 mt-2"
                          >
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              Read More <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))
              )}
              
              {!isLoadingRSS && rssFeedItems?.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-400">No gaming news articles available at the moment.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* TalkEsport Content */}
          <TabsContent value="talkesport" className="mt-0">
            <div className="space-y-4">
              {isLoadingTalkEsport ? (
                Array(5).fill(0).map((_, index) => (
                  <Card key={index} className="bg-navy-800 border-blue-500/30">
                    <CardHeader>
                      <Skeleton className="h-6 w-full" />
                    </CardHeader>
                    <CardFooter>
                      <Skeleton className="h-10 w-32" />
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <ScrollArea className="h-[600px]">
                  <div className="space-y-4 pr-4">
                    {talkEsportItems?.map((article: any, index: number) => (
                      <Card key={index} className="bg-navy-800 border-blue-500/30">
                        <CardHeader>
                          <CardTitle className="text-white">{article.title}</CardTitle>
                        </CardHeader>
                        <CardFooter>
                          <Button 
                            asChild 
                            className="bg-emerald-500 hover:bg-emerald-600"
                          >
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                              Read Article <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                    
                    {talkEsportItems?.length === 0 && (
                      <Card className="bg-navy-800 border-blue-500/30">
                        <CardContent className="text-center py-8">
                          <p className="text-gray-400">No articles available at the moment.</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </ScrollArea>
              )}
            </div>
          </TabsContent>
          
          {/* Esports Matches Content */}
          <TabsContent value="matches" className="mt-0">
            <div className="space-y-6">
              {isLoadingMatches ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array(6).fill(0).map((_, index) => (
                    <Card key={index} className="bg-navy-800 border-blue-500/30 h-64">
                      <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex justify-between">
                          <Skeleton className="h-12 w-24" />
                          <div className="flex items-center">
                            <Skeleton className="h-8 w-8 mx-2" />
                          </div>
                          <Skeleton className="h-12 w-24" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4" />
                            <Skeleton className="h-4 w-32" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {esportsMatches?.slice(0, 6).map((match: any, index: number) => (
                    <Card key={index} className="bg-navy-800 border-blue-500/30">
                      <CardHeader>
                        <CardTitle className="text-lg text-white">
                          {match.name || 'Upcoming Match'}
                        </CardTitle>
                        <CardDescription className="text-blue-400 uppercase font-semibold">
                          {match.videogame?.name || 'Esports Event'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-6">
                          <div className="text-center">
                            <p className="font-bold">{match.opponents?.[0]?.opponent?.name || 'TBD'}</p>
                          </div>
                          <div className="text-xl font-bold text-gray-400">VS</div>
                          <div className="text-center">
                            <p className="font-bold">{match.opponents?.[1]?.opponent?.name || 'TBD'}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-300 gap-2">
                            <Calendar className="h-4 w-4 text-blue-400" />
                            <span>{match.begin_at ? formatDate(match.begin_at) : 'Date TBD'}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-300 gap-2">
                            <Clock className="h-4 w-4 text-blue-400" />
                            <span>{match.begin_at ? formatTime(match.begin_at) : 'Time TBD'}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  {esportsMatches?.length === 0 && (
                    <Card className="col-span-full bg-navy-800 border-blue-500/30">
                      <CardContent className="text-center py-8">
                        <p className="text-gray-400">No upcoming matches available at the moment.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* YouTube Videos Content */}
          <TabsContent value="videos" className="mt-0">
            <div className="space-y-6">
              {isLoadingVideos ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array(6).fill(0).map((_, index) => (
                    <Card key={index} className="bg-navy-800 border-blue-500/30">
                      <div className="space-y-3">
                        <Skeleton className="h-48 w-full rounded-t-lg" />
                        <CardHeader className="px-4 pb-0">
                          <Skeleton className="h-5 w-full" />
                          <Skeleton className="h-4 w-3/4 mt-2" />
                        </CardHeader>
                        <CardFooter className="px-4 pt-0">
                          <Skeleton className="h-10 w-full" />
                        </CardFooter>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {youtubeVideos?.map((video: any) => (
                    <Card key={video.id.videoId} className="bg-navy-800 border-blue-500/30 overflow-hidden flex flex-col">
                      <div className="relative">
                        <img 
                          src={video.snippet.thumbnails.high.url} 
                          alt={video.snippet.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <CardHeader className="flex-grow">
                        <CardTitle className="text-white text-base line-clamp-2">{video.snippet.title}</CardTitle>
                        <p className="text-gray-400 text-sm mt-1">{video.snippet.channelTitle}</p>
                      </CardHeader>
                      <CardFooter>
                        <Button 
                          asChild 
                          className="w-full bg-red-600 hover:bg-red-700"
                        >
                          <a 
                            href={`https://www.youtube.com/watch?v=${video.id.videoId}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Play className="mr-2 h-4 w-4" /> Watch Video
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  {(!youtubeVideos || youtubeVideos.length === 0) && (
                    <Card className="col-span-full bg-navy-800 border-blue-500/30">
                      <CardContent className="text-center py-8">
                        <p className="text-gray-400">No videos available at the moment.</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default NewsSection;
