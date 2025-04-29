
import React from "react";
import { Button } from "@/components/ui/button";

// Game card component
const GameCard = ({ title, category, color }: { title: string; category: string; color: string }) => {
  // Dynamic classes based on color prop
  const colorClasses: Record<string, { border: string; glow: string }> = {
    pink: { border: "border-neon-pink", glow: "group-hover:shadow-neon-pink" },
    blue: { border: "border-neon-blue", glow: "group-hover:shadow-neon-blue" },
    green: { border: "border-neon-green", glow: "group-hover:shadow-neon-green" },
    purple: { border: "border-neon-purple", glow: "group-hover:shadow-neon-purple" },
    yellow: { border: "border-neon-yellow", glow: "group-hover:shadow-neon-yellow" },
  };

  const classes = colorClasses[color] || colorClasses.pink;

  return (
    <div className="group">
      <div className={`relative rounded-lg overflow-hidden transition-all duration-300 transform group-hover:scale-105 border ${classes.border} group-hover:shadow-lg ${classes.glow}`}>
        <div className="bg-cyber-navy aspect-[3/4] relative">
          {/* This would be an actual game image in production */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-black/80"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className={`text-${color === 'yellow' ? 'neon-yellow' : `neon-${color}`} text-xs uppercase tracking-wider`}>{category}</span>
            <h3 className="text-white text-xl font-bold font-cyber mt-1">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedGames = () => {
  const games = [
    { id: 1, title: "Neon Drift", category: "Racing", color: "pink" },
    { id: 2, title: "Cyber Assault", category: "FPS", color: "blue" },
    { id: 3, title: "Digital Nexus", category: "RPG", color: "green" },
    { id: 4, title: "Synth Runners", category: "Adventure", color: "purple" },
    { id: 5, title: "Electric Dreams", category: "Puzzle", color: "yellow" },
    { id: 6, title: "Quantum Break", category: "Action", color: "pink" },
  ];

  return (
    <section id="games" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-4">
              <span className="text-neon-blue blue-text">Featured</span>{" "}
              <span className="text-white">Games</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Discover the most exciting titles in our neon-drenched universe, from
              heart-pounding racing to mind-bending puzzles.
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10">
            View All Games
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              category={game.category}
              color={game.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
