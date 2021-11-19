import { React, useEffect, useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  function getFavorites() {
    fetch(`http://localhost:3000/favorites`)
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
      });
  }

  function deleteFromFav(id) {
    fetch(` http://localhost:3000/favorites/${id}`, {
      method: "DELETE",
    }).then(() => {
      setFavorites((favorites) =>
        favorites.filter((fav) => {
          return fav.id !== id;
        })
      );
    });
  }

  const maxMoviesPerRow = 4;

  function createLayout() {
    const numMovies = favorites.length;
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
    for (
      index;
      counter < maxMoviesPerRow && index < favorites.length;
      index++
    ) {
      const movie = favorites[index];
      movieRow.push(
        <div className=" image-container col">
          <img alt={movie.Title} src={movie.Poster}></img>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <div className="overlay d-flex align-items-center justify-content center">
            <button
              onClick={() => deleteFromFav(movie.id)}
              type="button"
              className="btn btn-warning justify-content-center"
            >
              Delete From Favorites
            </button>
          </div>
        </div>
      );
      counter++;
    }

    return movieRow;
  }

  return <div>{createLayout()}</div>;
}

export default Favorites;
