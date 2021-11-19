import React, { Fragment } from "react";
import Details from "./details";

function MoviesList({ sendToFav, movies }) {
  const maxMoviesPerRow = 4;

  function createLayout() {
    const numMovies = movies.length;
    const numRows = Math.ceil(numMovies / maxMoviesPerRow);

    const rows = [];
    for (let index = 0; index < numRows; index++) {
      rows.push("Placeholder");
    }

    let movieIndex = 0;

    const layout = rows.map(() => {
      const row = (
        <div key={movieIndex} className="row">
          {getMovieRow(movieIndex)}
        </div>
      );
      movieIndex += maxMoviesPerRow;
      return row;
    });

    return layout;
  }

  function getMovieRow(index) {
    return movies.slice(index, index + maxMoviesPerRow).map((movie) => {
      return (
        <Fragment key={movie.imdbID}>
          <div className=" image-container col">
            <img alt={movie.Title} src={movie.Poster}></img>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <div className=" overlay d-flex">
              <button
                onClick={() => sendToFav(movie)}
                type="button"
                className="btn btn-warning p-2"
              >
                Add To Favorites
              </button>

              <button
                data-bs-toggle="modal"
                data-bs-target={"#" + movie.imdbID}
                type="button"
                className="btn btn-warning p-2 ml-auto"
              >
                More Info
              </button>
            </div>
          </div>

          <Details movie={movie} />
        </Fragment>
      );
    });
  }

  return <div>{createLayout()}</div>;
}

export default MoviesList;
