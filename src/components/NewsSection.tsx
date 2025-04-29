
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// News card component
const NewsCard = ({
  title,
  date,
  excerpt,
  color,
}: {
  title: string;
  date: string;
  excerpt: string;
  color: string;
}) => {
  // Dynamic classes based on color prop
  const colorClasses: Record<string, { text: string; border: string; hover: string }> = {
    pink: {
      text: "text-neon-pink",
      border: "border-neon-pink/30",
      hover: "hover:border-neon-pink",
    },
    blue: {
      text: "text-neon-blue",
      border: "border-neon-blue/30",
      hover: "hover:border-neon-blue",
    },
    green: {
      text: "text-neon-green",
      border: "border-neon-green/30",
      hover: "hover:border-neon-green",
    },
  };

  const classes = colorClasses[color] || colorClasses.pink;

  return (
    <div
      className={`bg-cyber-navy/50 rounded-lg p-6 border ${classes.border} transition-all duration-300 ${classes.hover} hover:shadow-lg hover:-translate-y-1`}
    >
      <span className={`${classes.text} text-sm font-medium`}>{date}</span>
      <h3 className="text-xl font-bold mt-2 text-white">{title}</h3>
      <p className="mt-3 text-gray-400">{excerpt}</p>
      <div className="mt-4">
        <a href="#" className={`inline-flex items-center ${classes.text} font-medium`}>
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Neon Drift Championship Finals Announced",
      date: "2025.04.22",
      excerpt:
        "The biggest racing event of the year is approaching. Get ready for neon-lit tracks and fierce competition.",
      color: "pink",
    },
    {
      id: 2,
      title: "New Digital Nexus Expansion Coming Soon",
      date: "2025.04.15",
      excerpt:
        "Explore the cybernetic wasteland with new characters, weapons, and a completely new storyline.",
      color: "blue",
    },
    {
      id: 3,
      title: "Quantum Break Sets New Player Records",
      date: "2025.04.10",
      excerpt:
        "The action-packed adventure has broken all previous player count records in its first week.",
      color: "green",
    },
  ];

  return (
    <section id="news" className="py-20 bg-cyber-dark relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-4">
              <span className="text-neon-green green-text">Latest</span>{" "}
              <span className="text-white">News</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Stay updated with the latest announcements, updates, and events from
              the Neon Arena universe.
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-transparent border border-neon-green text-neon-green hover:bg-neon-green/10">
            View All News
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              excerpt={item.excerpt}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
