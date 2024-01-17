// MovieList.js

import React, { useState, useEffect } from 'react';
import Rating from '../circleRating/Rating';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = '3c3865de';
      const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=movie`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.Search) {
          setMovies(data.Search);
        } else {
          console.error('Error fetching movie data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
  }, []);

  const generateRandomRating = () => Math.floor(Math.random() * 10) + 1;

  return (
    <div className="container">
      <h1>Movie List</h1>
      <div className="row">
        {movies.map(movie => (
          <div key={movie.imdbID} className="col-md-4 mb-4">
            <div className="card">
              <img src={movie.Poster} className="card-img-top" alt={`${movie.Title} Poster`} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
                 <h2> <span>rating</span> <Rating rating={generateRandomRating()} /></h2>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
