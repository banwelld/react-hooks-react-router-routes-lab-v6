function PersonCard({ name, movies }) {

  const filmList = movies.map(m => <li key={m}>{m}</li>);
  
  return (
    <article>
        <h2>{name}</h2>
        <h3>Films of note:</h3>
        <ul>{filmList}</ul>
    </article>
  );
};
  
  export default PersonCard;