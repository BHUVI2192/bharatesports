
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDeviceType } from '@/hooks/use-mobile';

// Import new component modules
import SearchBar from './news/SearchBar';
import ArticleList from './news/ArticleList';
import VideosContent from './news/VideosContent';
import { allNewsArticles, popularSearches, staticVideos } from './news/NewsData';
import { scheduleNextUpdate } from './news/NewsUtils';

const NewsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState(allNewsArticles.slice(0, 6)); // Default to first 6 items
  const [showAllNews, setShowAllNews] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  // Loading state for visual consistency
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  // Simulate loading of videos
  useEffect(() => {
    // Brief timeout to simulate loading
    const timer = setTimeout(() => {
      setIsLoadingVideos(false);
    }, 1000);
    
    return () => clearTimeout(timer);
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

        <SearchBar 
          searchQuery={searchQuery}
          onSearch={handleSearch}
          popularSearches={popularSearches}
          onPopularSearch={handlePopularSearch}
        />
        
        <Tabs defaultValue="articles" className="w-full mb-8">
          <TabsList className={`${isMobile ? 'w-full overflow-x-auto' : 'w-fit'} bg-navy-900 mb-6`}>
            <TabsTrigger value="articles" className="text-sm md:text-base">Articles</TabsTrigger>
            <TabsTrigger value="videos" className="text-sm md:text-base">Videos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles" className="mt-0">
            <ArticleList 
              articles={filteredNews}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              itemsPerPage={itemsPerPage}
              onViewAllNews={handleViewAllNews}
            />
          </TabsContent>
          
          <TabsContent value="videos" className="mt-0">
            <VideosContent 
              isLoading={isLoadingVideos}
              videos={staticVideos}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default NewsSection;
