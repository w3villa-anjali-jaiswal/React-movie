import endpoints from "./endpoint";

export const movieapi = async (search,page) => {
  const url = endpoints.Movie.Movielist(search,page); 
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.Search || []; 
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; 
  }
};

