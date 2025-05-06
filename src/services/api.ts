
import axios from 'axios';

// RSS feed conversion
export const fetchRSSFeed = async () => {
  try {
    const response = await axios.get('https://api.rss2json.com/v1/api.json', {
      params: {
        rss_url: 'https://www.indiatodaygaming.com/rss',
        api_key: 'zsbkxnlw3fxp4lzcemqo8otmxwiextwbrz17allj',
        count: 5
      }
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    // Return mock data if API call fails
    return [
      {
        title: "BGMI: How to Get Free Desert Fossil M16A4",
        pubDate: "2025-05-05 10:30:00",
        link: "https://www.example.com/bgmi-fossil",
        thumbnail: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2940&auto=format&fit=crop",
        description: "Learn how to obtain the exclusive Desert Fossil M16A4 skin in BGMI without spending any UC."
      },
      {
        title: "Valorant: Team India Qualifies for Asian Championship",
        pubDate: "2025-05-04 15:45:00",
        link: "https://www.example.com/valorant-india",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop",
        description: "Indian Valorant team secures a spot in the upcoming Asian Championship after defeating top regional teams."
      },
      {
        title: "New Gaming Cafe Chain Launching Across India",
        pubDate: "2025-05-03 09:15:00",
        link: "https://www.example.com/gaming-cafes",
        thumbnail: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2940&auto=format&fit=crop",
        description: "A new chain of high-end gaming cafes is set to open in 10 major Indian cities by the end of the year."
      },
      {
        title: "Mobile Gaming Tournament Announces ₹50 Lakh Prize Pool",
        pubDate: "2025-05-02 14:20:00",
        link: "https://www.example.com/mobile-tournament",
        thumbnail: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2940&auto=format&fit=crop",
        description: "The largest mobile gaming tournament in India announces a record-breaking prize pool for its upcoming season."
      },
      {
        title: "Indian Game Developer Secures Major International Investment",
        pubDate: "2025-05-01 11:10:00",
        link: "https://www.example.com/game-developer",
        thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2940&auto=format&fit=crop",
        description: "A Mumbai-based game studio has secured $15 million in funding from international investors for its upcoming RPG."
      }
    ];
  }
};

// TalkEsport scraper endpoint - this would normally be a backend service
// For frontend-only demonstration, we're using an API endpoint that can scrape websites
export const fetchTalkEsport = async () => {
  try {
    // Note: In a production environment, this would be a backend API endpoint using Axios + Cheerio
    const response = await axios.get('https://api.allorigins.win/raw?url=https://www.talkesport.com/');
    
    // Since we can't run cheerio in the browser, we'll use regex for demo purposes
    // This is a simplified version and not recommended for production use
    const htmlContent = response.data;
    const articles = [];
    const titleRegex = /<h2 class="title"><a href="([^"]+)"[^>]*>([^<]+)<\/a><\/h2>/g;
    
    let match;
    let count = 0;
    while ((match = titleRegex.exec(htmlContent)) && count < 5) {
      articles.push({
        link: match[1],
        title: match[2],
      });
      count++;
    }
    
    return articles;
  } catch (error) {
    console.error('Error fetching TalkEsport content:', error);
    // Return mock data if API call fails
    return [
      {
        title: "Velocity Gaming secures top spot in Valorant Champions Tour South Asia",
        link: "https://www.example.com/velocity-gaming"
      },
      {
        title: "ESL Play announces new CSGO tournament with Indian qualifiers",
        link: "https://www.example.com/esl-tournament"
      },
      {
        title: "Indian PUBG Mobile players form new organization after game's return",
        link: "https://www.example.com/pubg-return"
      },
      {
        title: "Mumbai to host major LAN event featuring Dota 2 and Valorant",
        link: "https://www.example.com/mumbai-lan"
      },
      {
        title: "Indian esports organization announces expansion into Southeast Asian market",
        link: "https://www.example.com/expansion-sea"
      }
    ];
  }
};

// Pandascore API for esports matches
export const fetchEsportsMatches = async () => {
  try {
    // Note: In a production app, you would store this key in a backend environment variable
    // For demonstration purposes only
    const API_KEY = 'WcQsmHHDLCpuEKW3pOplspIjNVC7Qig75yHAweT33SWZYDLL9WU';
    
    const response = await axios.get('https://api.pandascore.co/matches/upcoming', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      },
      params: {
        'per_page': 5,
        'page': 1
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching Pandascore matches:', error);
    // Return mock data if API call fails
    return [
      {
        name: "TSM vs Cloud9",
        begin_at: "2025-05-10T14:00:00Z",
        videogame: { name: "League of Legends" },
        opponents: [
          { opponent: { name: "TSM" } },
          { opponent: { name: "Cloud9" } }
        ]
      },
      {
        name: "Velocity Gaming vs Global Esports",
        begin_at: "2025-05-11T12:30:00Z",
        videogame: { name: "Valorant" },
        opponents: [
          { opponent: { name: "Velocity Gaming" } },
          { opponent: { name: "Global Esports" } }
        ]
      },
      {
        name: "Fnatic vs Team Secret",
        begin_at: "2025-05-12T16:00:00Z",
        videogame: { name: "CS:GO" },
        opponents: [
          { opponent: { name: "Fnatic" } },
          { opponent: { name: "Team Secret" } }
        ]
      },
      {
        name: "Team Vitality vs Natus Vincere",
        begin_at: "2025-05-13T15:00:00Z",
        videogame: { name: "Dota 2" },
        opponents: [
          { opponent: { name: "Team Vitality" } },
          { opponent: { name: "Natus Vincere" } }
        ]
      },
      {
        name: "Soul vs GodLike Esports",
        begin_at: "2025-05-14T13:00:00Z",
        videogame: { name: "BGMI" },
        opponents: [
          { opponent: { name: "Soul" } },
          { opponent: { name: "GodLike Esports" } }
        ]
      }
    ];
  }
};

// YouTube API for esports videos
export const fetchYoutubeVideos = async () => {
  try {
    // Note: In a production app, you would store this key in a backend environment variable
    // For demonstration purposes only
    const API_KEY = 'AIzaSyDW_GYlXbfK6YaUsRGgGDYs1QNuXJvTRUk';
    
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        q: 'esports India',
        type: 'video',
        key: API_KEY,
        order: 'date'
      }
    });
    
    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    // Return mock data if API call fails
    return [
      {
        id: { videoId: "video1" },
        snippet: {
          title: "Top Plays from BGMI Masters Series Season 2",
          channelTitle: "Indian Esports Channel",
          thumbnails: {
            high: { url: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2940&auto=format&fit=crop" }
          }
        }
      },
      {
        id: { videoId: "video2" },
        snippet: {
          title: "Indian Valorant Teams Going Global - Analysis",
          channelTitle: "Esports Analyst",
          thumbnails: {
            high: { url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop" }
          }
        }
      },
      {
        id: { videoId: "video3" },
        snippet: {
          title: "Next Level Gaming: Behind the Scenes with Team India",
          channelTitle: "Gaming Spotlight",
          thumbnails: {
            high: { url: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2940&auto=format&fit=crop" }
          }
        }
      },
      {
        id: { videoId: "video4" },
        snippet: {
          title: "BGMI Tournament Highlights - May 2025",
          channelTitle: "Mobile Esports",
          thumbnails: {
            high: { url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2940&auto=format&fit=crop" }
          }
        }
      },
      {
        id: { videoId: "video5" },
        snippet: {
          title: "Indian Gaming Industry: Current State and Future Prospects",
          channelTitle: "Tech Insights",
          thumbnails: {
            high: { url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2940&auto=format&fit=crop" }
          }
        }
      }
    ];
  }
};
