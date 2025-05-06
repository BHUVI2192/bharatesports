
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TalkEsportContentProps {
  isLoading: boolean;
  articles: any[];
}

const TalkEsportContent = ({ isLoading, articles = [] }: TalkEsportContentProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array(5).fill(0).map((_, index) => (
          <Card key={index} className="bg-navy-800 border-blue-500/30">
            <CardHeader>
              <Skeleton className="h-6 w-full" />
            </CardHeader>
            <CardFooter>
              <Skeleton className="h-10 w-32" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ScrollArea className="h-[600px]">
        <div className="space-y-4 pr-4">
          {articles.length > 0 ? (
            articles.map((article: any, index: number) => (
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
            ))
          ) : (
            <Card className="bg-navy-800 border-blue-500/30">
              <CardContent className="text-center py-8">
                <p className="text-gray-400">No articles available at the moment.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TalkEsportContent;
