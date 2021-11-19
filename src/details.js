import { React, useState } from "react";

function Details({ movie }) {
  const [movieInfo, setMovieInfo] = useState({});

  fetch(`https://www.omdbapi.com/?t=${movie.Title}&plot=Short&apikey=98bb517d`)
    .then((res) => res.json())
    .then((data) => {
      setMovieInfo(data);
    });

  return (
    <div
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      role="dialog"
      id={movie.imdbID}
    >
      <div className="modal-dialog text-dark  " role="document">
        <div className="modal-content rounded-6 shadow">
          <div className="modal-header border-bottom-0">
            <h4 className="modal-title  ">
              {movieInfo.Title}({movieInfo.Year})
            </h4>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body py-2">
            <ul>
              <li>Rated: {movieInfo.Rated}</li>
              <li>Genre: {movieInfo.Genre}</li>
              <li>Director: {movieInfo.Director}</li>
              <li>Writer: {movieInfo.Writer}</li>
              <li>Actors: {movieInfo.Actors}</li>
              <li>Runtime: {movieInfo.Runtime}</li>
            </ul>
            <p> {movieInfo.Plot}</p>
          </div>
          <div className="modal-footer flex-column border-top-0">
            <button
              type="button"
              className="btn btn-lg btn-light w-100 mx-0"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
