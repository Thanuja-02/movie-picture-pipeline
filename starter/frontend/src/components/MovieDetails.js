import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieDetail({ movie }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MOVIE_API_URL;

    if (!apiUrl) {
      return;
    }

    axios
      .get(`${apiUrl}/movies/${movie.id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [movie]);

  if (!details) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.description}</p>
    </div>
  );
}

export default MovieDetail;
