
// Scheduler function for daily updates at 12 PM IST
export const scheduleNextUpdate = (fetchAllContent: () => Promise<void>) => {
  const now = new Date();
  const nextUpdate = new Date();
  
  // Set to 12 PM IST (UTC+5:30)
  nextUpdate.setUTCHours(6); // 12 PM IST is 6:30 AM UTC
  nextUpdate.setUTCMinutes(30);
  nextUpdate.setSeconds(0);
  nextUpdate.setMilliseconds(0);
  
  // If it's already past 12 PM IST today, schedule for tomorrow
  if (now > nextUpdate) {
    nextUpdate.setDate(nextUpdate.getDate() + 1);
  }
  
  const timeUntilUpdate = nextUpdate.getTime() - now.getTime();
  
  // Schedule the next update
  setTimeout(() => {
    fetchAllContent();
    // After updating, schedule the next one for tomorrow
    scheduleNextUpdate(fetchAllContent);
  }, timeUntilUpdate);
  
  console.log(`Next content update scheduled for: ${nextUpdate.toLocaleString()}`);
};
