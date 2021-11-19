import React from "react";
import MoviesList from "./MovieList";

function Home({ sendToFav, movies }) {
  return (
    <div className="container-fluid movie-app  ">
      <div className="text-center">
        <h1>Welcome To My-Movies</h1>
        <h2>Search Movies or TV shows above by Title</h2>
      </div>

      <MoviesList sendToFav={sendToFav} movies={movies} />
    </div>
  );
}

export default Home;
