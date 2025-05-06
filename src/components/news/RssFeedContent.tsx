
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useDeviceType } from '@/hooks/use-mobile';

interface RssFeedContentProps {
  isLoading: boolean;
  feedItems: any[];
}

const RssFeedContent = ({ isLoading, feedItems = [] }: RssFeedContentProps) => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  if (isLoading) {
    return (
      <div className="space-y-6">
        {Array(5).fill(0).map((_, index) => (
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

  if (!feedItems || feedItems.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No gaming news articles available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {feedItems.map((item: any, index: number) => (
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
    </div>
  );
};

export default RssFeedContent;
