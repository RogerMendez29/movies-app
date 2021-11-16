import { React, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import SignUp from "./SignUp";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import NavBar from "./NavBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [searching, setSearching] = useState("");
  const [favorites, setFavorites] = useState([]);

  function sendToFav(movie) {
    const itemData = {
      Title: movie.Title,
      Year: movie.Year,
      Type: movie.Type,
      Poster: movie.Poster,
    };

    fetch(" http://localhost:3000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((res) => res.json())
      .then((data) => setFavorites([...favorites, data]));
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${searching}&plot=full&apikey=98bb517d`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, [searching]);
  return (
    <>
      <NavBar searching={searching} setSearching={setSearching} />

      <Switch>
        <Route path="/favorites">
          <Favorites setFavorites={setFavorites} favorites={favorites} />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home sendToFav={sendToFav} movies={movies} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
