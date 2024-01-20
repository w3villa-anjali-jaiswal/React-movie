// MovieList.js

import React, { useState, useEffect } from 'react';
import Rating from '../circleRating/Rating';
import "../Header/style.css"
import { movieapi } from '../../Movieapi';
import Header from './Header';
import Paginate from '../Paginate';

const MovieList = () => {
  const [query, setQuery] = useState('movie');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearchQuery = (query) => {
    setQuery(query);
    console.log(query, "bcccc")
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await movieapi(query, currentPage);
        console.log(currentPage, "koip")

        setMovies(result);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [query, currentPage]);

  const generateRandomRating = () => Math.floor(Math.random() * 10) + 1;

  return (
    <>
      <Header onsearch={handleSearchQuery} />

      <div className="container">

        <div className="row d-flex justify-content-around mt-4">
          {movies.map(movie => (
            <div key={movie.imdbID} className="col-md-4 mb-4">
              <div className="card">
                <img src={movie.Poster} className="card-img-top" alt={`${movie.Title} Poster`} />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <h2>  <Rating rating={generateRandomRating()} /></h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Paginate totalPages={10} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default MovieList;
