import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ searching, setSearching }) {
  function handleSearch(event) {
    setSearching(event.target.value);
    console.log(searching);
  }
  return (
    <>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="60"
                fill="currentColor"
                className="bi bi-film"
                viewBox="0 0 16 16"
              >
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
              </svg>
            </NavLink>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink
                  style={{ color: "grey" }}
                  activeStyle={{
                    color: "white",
                  }}
                  to="/home"
                  className="nav-link px-2  "
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "grey" }}
                  activeStyle={{
                    color: "white",
                  }}
                  to="/favorites"
                  className="nav-link px-2 "
                >
                  Favorites
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "grey" }}
                  activeStyle={{
                    color: "white",
                  }}
                  to="/addon"
                  className="nav-link px-2 "
                >
                  Add-On
                </NavLink>
              </li>
            </ul>
            {setSearching ? (
              <form
                id="searchBar"
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              >
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Type Here..."
                  aria-label="Search"
                  value={searching}
                  onChange={handleSearch}
                />
              </form>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
