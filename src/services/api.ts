
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
    return [];
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
    return [];
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
    return [];
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
    return [];
  }
};
