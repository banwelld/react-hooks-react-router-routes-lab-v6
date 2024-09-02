import { useEffect, useState } from "react";
import { NavBar, PersonCard } from '../components';


function Directors() {

  // STATE VARIABLES

  const [directors, setDirectors] = useState([]);

  // CALLBACK FUNCTIONS

  const getDirectors = () => {
    fetch('http://localhost:4000/directors')
     .then(r => r.json())
     .then(data => setDirectors(data));
  };

  // UTILITY CODE

  useEffect(getDirectors, []);

  // JSX RENDER

  const directorList = directors.map(d => <PersonCard name={d.name} movies={d.movies} key={d.id} />);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.length ? directorList  : <h2>Loading director data...</h2>}
      </main>
    </>
  );
};

export default Directors;
