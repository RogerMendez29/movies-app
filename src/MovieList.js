import React from "react";
import Details from "./details";

function MoviesList({ sendToFav, movies }) {
  const maxMoviesPerRow = 4;

  function createLayout() {
    const numMovies = movies.length;
    const numRows = Math.ceil(numMovies / maxMoviesPerRow);

    // Creates array of length numRows
    const rows = [];
    for (let index = 0; index < numRows; index++) {
      rows.push("Placeholder");
    }

    let movieIndex = 0;

    const layout = rows.map(() => {
      const row = <div className="row">{getMovieRow(movieIndex)}</div>;
      movieIndex += maxMoviesPerRow;
      return row;
    });

    return layout;
  }

  function getMovieRow(index) {
    const movieRow = [];
    let counter = 0;
    for (index; counter < maxMoviesPerRow && index < movies.length; index++) {
      const movie = movies[index];
      movieRow.push(
        <div className=" image-container col">
          <img alt={movie.Title} src={movie.Poster}></img>
          <Details movie={movie} />
          <div className="overlay d-flex align-items-center justify-content center">
            <button
              onClick={() => sendToFav(movie)}
              type="button"
              className="btn btn-warning"
            >
              Add To Favorites
            </button>

            <button
              data-bs-toggle="modal"
              data-bs-target="#modalSheet"
              type="button"
              className="btn btn-warning"
            >
              More Info
            </button>
          </div>
        </div>
      );
      counter++;
    }

    return movieRow;
  }

  return (
    <div>
      <div>{createLayout()}</div>
      <div
        class="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        role="dialog"
        id="modalSheet"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-6 shadow">
            <div class="modal-header border-bottom-0">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body py-0">
              <p>
                This is a modal sheet, a variation of the modal that docs itself
                to the bottom of the viewport like the newer share sheets in
                iOS.
              </p>
            </div>
            <div class="modal-footer flex-column border-top-0">
              <button
                type="button"
                class="btn btn-lg btn-primary w-100 mx-0 mb-2"
              >
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-lg btn-light w-100 mx-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
