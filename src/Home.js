import React from "react";
import MoviesList from "./MovieList";

function Home({ sendToFav, movies }) {
  return (
    <div className="container-fluid movie-app">
      <MoviesList sendToFav={sendToFav} movies={movies} />
    </div>
  );
}

export default Home;
