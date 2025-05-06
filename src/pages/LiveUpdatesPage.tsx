
import React from 'react';
import PageLayout from '@/components/PageLayout';
import NewsFeed from '@/components/NewsFeed';
import EsportsMatches from '@/components/EsportsMatches';
import VideosFeed from '@/components/VideosFeed';
import WebScraper from '@/components/WebScraper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDeviceType } from '@/hooks/use-mobile';

const LiveUpdatesPage = () => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  return (
    <PageLayout
      title="LIVE UPDATES"
      subtitle="Stay informed with the latest news, matches, and videos from the Indian esports scene"
    >
      <div className="space-y-8">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className={`${isMobile ? 'w-full overflow-x-auto' : 'w-fit'} bg-navy-900 mb-6`}>
            <TabsTrigger value="news" className="text-sm md:text-base">News Feed</TabsTrigger>
            <TabsTrigger value="scraper" className="text-sm md:text-base">TalkEsport</TabsTrigger>
            <TabsTrigger value="matches" className="text-sm md:text-base">Upcoming Matches</TabsTrigger>
            <TabsTrigger value="videos" className="text-sm md:text-base">Youtube</TabsTrigger>
          </TabsList>
          
          <TabsContent value="news" className="mt-0">
            <NewsFeed />
          </TabsContent>
          
          <TabsContent value="scraper" className="mt-0">
            <WebScraper />
          </TabsContent>
          
          <TabsContent value="matches" className="mt-0">
            <EsportsMatches />
          </TabsContent>
          
          <TabsContent value="videos" className="mt-0">
            <VideosFeed />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default LiveUpdatesPage;
