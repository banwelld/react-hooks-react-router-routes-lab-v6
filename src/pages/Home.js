import { useEffect, useState } from "react";
import { NavBar, MovieCard } from '../components'

function Home() {

  // STATE VARIABLES

  const [movies, setMovies] = useState([]);

  // CALLBACK VARIABLES

  const getMovies = () => {
    fetch('http://localhost:4000/movies')
     .then(r => r.json())
     .then(data => setMovies(data));
  };

  // UTILITY CODE

  useEffect(getMovies, []);

  const movieList = movies.map(m => <MovieCard title={m.title} id={m.id} key={m.id} />);

  // JSX RENDER

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.length ? movieList : <h2>Loading movies...</h2>}
      </main>
    </>
  );
};

export default Home;
