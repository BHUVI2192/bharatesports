
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from "lucide-react";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

interface ArticleListProps {
  articles: Article[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  onViewAllNews: () => void;
}

const ArticleList = ({ articles, currentPage, setCurrentPage, itemsPerPage, onViewAllNews }: ArticleListProps) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No news articles found matching your search.</p>
      </div>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  return (
    <>
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
          onClick={onViewAllNews}
        >
          View All News <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </>
  );
};

export default ArticleList;
