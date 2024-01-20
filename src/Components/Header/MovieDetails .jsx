import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=3c3865de&i=${params.id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    getMovie();
  }, [params.id]);

  const { Poster, Title, Year, Type } = movie;

  return (
    <div className="desc-body dark:bg-gray-900 m-6 p-4 text-center">
      <div className="container">
        <h2 className="display-4  text-gray-800 mb-4">{Title}</h2>

        <div className="mx-auto mb-4" style={{ maxWidth: "400px" }}>
          <img
            className="img-fluid rounded-md"
            src={Poster}
            alt={Title}
          />
        </div>
        <p className="lead text-gray-500 dark:text-gray-300">
          {`"${Title}" is an exciting ${Type} released in ${Year}. `}
          {`Follow the gripping story of [Lead Actor/Actress] as they navigate through `}
          {`twists and turns, offering a thrilling experience for all movie enthusiasts.`}
        </p>

        <span className="badge bg-slate-300 text-slate-800">{Year}</span>
        <span className="badge bg-slate-300 text-slate-800 ml-4">{Type}</span>

        <div className="mt-2">
          <Link
            href="#"
            className="btn btn-primary "
          >
            Watch Online
          </Link>

          <Link
            href="#"
            className="btn btn-success m-2"
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
