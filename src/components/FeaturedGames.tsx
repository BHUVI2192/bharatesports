
import React from "react";
import { Button } from "@/components/ui/button";

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
  const games = [
    { id: 1, title: "Speed Racer", category: "Racing" },
    { id: 2, title: "Tactical Strike", category: "FPS" },
    { id: 3, title: "Fantasy Quest", category: "RPG" },
    { id: 4, title: "Adventure Valley", category: "Adventure" },
    { id: 5, title: "Mind Maze", category: "Puzzle" },
    { id: 6, title: "Combat Zone", category: "Action" },
  ];

  return (
    <section id="games" className="section-padding bg-navy-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-500">Featured</span>{" "}
              <span className="text-white">Games</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Discover the most exciting titles in our catalog, from
              heart-pounding racing to mind-bending puzzles.
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10">
            View All Games
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {games.map((game) => (
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
