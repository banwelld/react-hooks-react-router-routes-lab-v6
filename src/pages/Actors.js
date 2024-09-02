import { useEffect, useState } from "react";
import { NavBar, PersonCard } from '../components';

function Actors() {

  // STATE VARIABLES

  const [actors, setActors] = useState([]);

  // CALLBACK FUNCTIONS

  const getActors = () => {
    fetch('http://localhost:4000/actors')
     .then(r => r.json())
     .then(data => setActors(data));
  };

  // UTILITY CODE

  useEffect(getActors, []);

  // JSX RENDER

  const actorList = actors.map(a => <PersonCard name={a.name} movies={a.movies} key={a.id} />);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.length ? actorList : <h2>Loading actor data...</h2>}
      </main>
    </>
  );
};

export default Actors;
