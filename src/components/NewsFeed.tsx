
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRSSFeed } from '@/services/api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useDeviceType } from '@/hooks/use-mobile';
import { ExternalLink } from 'lucide-react';

const NewsFeed = () => {
  const { data: newsItems, isLoading, error } = useQuery({
    queryKey: ['rssFeed'],
    queryFn: fetchRSSFeed
  });
  
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
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
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-4 bg-navy-900/50 rounded-lg">Error loading news feed. Please try again later.</div>;
  }

  return (
    <div className="space-y-6">
      {newsItems?.map((item: any, index: number) => (
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
      ))}
      
      {newsItems?.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">No news articles available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
