
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEsportsMatches } from '@/services/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useDeviceType } from '@/hooks/use-mobile';
import { Calendar, Clock } from 'lucide-react';

const EsportsMatches = () => {
  const { data: matches, isLoading, error } = useQuery({
    queryKey: ['esportsMatches'],
    queryFn: fetchEsportsMatches
  });
  
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

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
      <div className="space-y-4">
        {isMobile ? (
          [...Array(3)].map((_, index) => (
            <Card key={index} className="bg-navy-800 border-blue-500/30">
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <Skeleton className="h-12 w-24" />
                  <div className="flex items-center">
                    <Skeleton className="h-8 w-8 mx-2" />
                  </div>
                  <Skeleton className="h-12 w-24" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Carousel>
            <CarouselContent>
              {[...Array(5)].map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-navy-800 border-blue-500/30 h-64">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        )}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-4 bg-navy-900/50 rounded-lg">Error loading esports matches. Please try again later.</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-4">Upcoming Esports Matches</h2>
      
      {isMobile ? (
        <div className="space-y-4">
          {matches?.slice(0, 5).map((match: any, index: number) => (
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
                <div className="flex justify-between items-center mb-3">
                  <div className="text-center">
                    <p className="font-bold text-sm">{match.opponents?.[0]?.opponent?.name || 'TBD'}</p>
                  </div>
                  <div className="text-xl font-bold text-gray-400">VS</div>
                  <div className="text-center">
                    <p className="font-bold text-sm">{match.opponents?.[1]?.opponent?.name || 'TBD'}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-300 mt-2 gap-2">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{match.begin_at ? formatDate(match.begin_at) : 'Date TBD'}</span>
                </div>
                <div className="flex items-center text-sm text-gray-300 mt-1 gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>{match.begin_at ? formatTime(match.begin_at) : 'Time TBD'}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Carousel>
          <CarouselContent>
            {matches?.slice(0, 10).map((match: any, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-navy-800 border-blue-500/30 h-64">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
      
      {(!matches || matches.length === 0) && (
        <Card className="bg-navy-800 border-blue-500/30">
          <CardContent className="text-center py-8">
            <p className="text-gray-400">No upcoming matches available at the moment.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EsportsMatches;
