
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface VideosContentProps {
  isLoading: boolean;
  videos: any[];
}

const VideosContent = ({ isLoading, videos = [] }: VideosContentProps) => {
  if (isLoading) {
    return (
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
    );
  }

  if (!videos || videos.length === 0) {
    return (
      <Card className="col-span-full bg-navy-800 border-blue-500/30">
        <CardContent className="text-center py-8">
          <p className="text-gray-400">No videos available at the moment.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video: any) => (
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
    </div>
  );
};

export default VideosContent;
