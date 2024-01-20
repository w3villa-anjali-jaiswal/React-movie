import axios from "axios";
import endpoints from "./endpoint";

export const movieapi = async (search, page) => {
  const url = endpoints.Movie.Movielist(search, page);

  try {
    const response = await axios.get(url);
    return response.data.Search || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
