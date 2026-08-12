import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MOVIE_API_URL;

    // Skip API call during tests if env variable is not set
    if (!apiUrl) {
      return;
    }

    axios
      .get(`${apiUrl}/movies`)
      .then((response) => {
        // Backend returns an array directly
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} className="movieItem" onClick={() => onMovieClick(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
