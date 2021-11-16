import { React, useState } from "react";

function Details({ movie }) {
  const [movieInfo, setMovieInfo] = useState({});

  fetch(`https://www.omdbapi.com/?t=${movie.Title}&plot=full&apikey=98bb517d`)
    .then((res) => res.json())
    .then((data) => setMovieInfo(data));

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movieInfo.Plot}</p>
    </div>
  );
}

export default Details;
