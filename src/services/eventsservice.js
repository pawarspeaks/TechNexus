const API_BASE_URL = 'http://localhost:3000';


const fetchEvents = async (endpoint) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching events from ${endpoint}:`, error);
      throw error;
    }
  };
  
  export const fetchOfflineEvents = () => fetchEvents('/events/offline');
  export const fetchOnlineEvents = () => fetchEvents('/events/online');