
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface MatchesContentProps {
  isLoading: boolean;
  matches: any[];
}

const MatchesContent = ({ isLoading, matches = [] }: MatchesContentProps) => {
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

  if (isLoading) {
    return (
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
    );
  }

  if (matches.length === 0) {
    return (
      <Card className="col-span-full bg-navy-800 border-blue-500/30">
        <CardContent className="text-center py-8">
          <p className="text-gray-400">No upcoming matches available at the moment.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {matches.slice(0, 6).map((match: any, index: number) => (
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
    </div>
  );
};

export default MatchesContent;
