
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  popularSearches: string[];
  onPopularSearch: (term: string) => void;
}

const SearchBar = ({ searchQuery, onSearch, popularSearches, onPopularSearch }: SearchBarProps) => {
  return (
    <div className="mb-10 max-w-xl mx-auto">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={onSearch}
          className="bg-navy-900 border-navy-700 pl-10 focus:border-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <span className="text-sm text-gray-400">Popular searches:</span>
        {popularSearches.map(term => (
          <button
            key={term}
            onClick={() => onPopularSearch(term)}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
