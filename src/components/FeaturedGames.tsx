
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Game card component
const GameCard = ({ title, category }: { title: string; category: string }) => {
  return (
    <div className="group">
      <div className="relative rounded-lg overflow-hidden transition-all duration-300 transform group-hover:scale-105 border border-navy-700 shadow-soft">
        <div className="bg-navy-800 aspect-[3/4] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/80"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="text-blue-400 text-xs uppercase tracking-wider font-medium">{category}</span>
            <h3 className="text-white text-lg font-bold mt-1">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedGames = () => {
  const navigate = useNavigate();
  
  const games = [
    { id: 1, title: "Speed Racer", category: "Racing" },
    { id: 2, title: "Tactical Strike", category: "FPS" },
    { id: 3, title: "Fantasy Quest", category: "RPG" },
    { id: 4, title: "Adventure Valley", category: "Adventure" },
    { id: 5, title: "Mind Maze", category: "Puzzle" },
    { id: 6, title: "Combat Zone", category: "Action" },
    { id: 7, title: "Cosmic Explorers", category: "Space Sim" },
    { id: 8, title: "Battle Royale Masters", category: "Battle Royale" },
    { id: 9, title: "Strategy Legends", category: "Strategy" }
  ];

  // Function to handle navigation with scroll to top
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section id="games" className="section-padding bg-navy-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-500">Featured</span>{" "}
              <span className="text-white">News</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Stay updated with the latest developments, tournaments, and announcements from the world of esports
            </p>
          </div>
          <Button 
            className="mt-4 md:mt-0 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10"
            onClick={() => handleNavigation("/news")}
          >
            View All News <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {games.slice(0, 3).map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              category={game.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
