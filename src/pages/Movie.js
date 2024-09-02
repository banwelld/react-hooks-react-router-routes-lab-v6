import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from '../components';

function Movie() {

  // STATE VARIABLES

  const [movie, setMovie] = useState([]);

  // NON-STATE VARIABLES

  const params = useParams();
  const movieId = params.id;

  // CALLBACK FUNCTIONS

  const getMovieInfo = () => {
    fetch(`http://localhost:4000/movies/${movieId}`)
     .then(r => r.json())
     .then(data => setMovie(data));
  };

  //UTILITY CODE

  useEffect(getMovieInfo, [movieId]);

  // JSX OUTPUT

  if (!movie.title) {
    return <p>Loading movie data...</p>;
  }

  const lastGenre = movie.genres.length - 1;

  const genres = movie.genres.map((g, index) => {
    index < lastGenre ?
    <span key={g}>{g}, </span> :
    <span key={g}>{g}</span>
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time} minutes</p>
        <h3>Genres:</h3>
        {genres}
      </main>
    </>
  );
};

export default Movie;
