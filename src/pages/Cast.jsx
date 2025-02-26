function Cast({ cast }) {
  return (
    <div>
      <h1>Cast</h1>
      <hr />
      <ul>
        {cast.length > 0 ? (
          cast.map((actor, index) => (
            <li key={index}>
              {actor.character} : {actor.original_name}
            </li>
          ))
        ) : (
          <li>No cast information available</li>
        )}
      </ul>
    </div>
  );
}

export default Cast;
