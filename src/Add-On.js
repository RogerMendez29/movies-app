import { useState, React } from "react";

function AddOn() {
  const defaultImage =
    "https://static.facegfx.com/vector/2013/12/12/facegfx-vector-different-film-and-movie-mix-vector-04.jpg";
  const [success, setSuccess] = useState([]);
  const [error, setError] = useState([]);
  const [formData, setformData] = useState({
    Title: "",
    Year: "",
    Type: "",
    Poster: "",
  });
  function handleChange(event) {
    setformData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    console.log(formData);

    event.preventDefault();
    if (formData.Title.length > 0) {
      if (formData.Year.length > 3) {
        if (formData.Poster.length === 0) {
          formData.Poster = defaultImage;
          fetch(" http://localhost:3000/favorites", {
            method: "POST",

            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData),
          });
          setError([]);
          setSuccess(["Succesful Addition"]);
          formData.Poster = "";
        } else {
          fetch(" http://localhost:3000/favorites", {
            method: "POST",

            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData),
          });
          setError([]);
          setSuccess(["Succesful Addition"]);
        }
      } else {
        setError(["Year is Required & must be a 4 digit number!"]);
        setSuccess([]);
      }
    } else {
      setError(["Title is Required"]);
      setSuccess([]);

      if (formData.Year.length <= 3) {
        setError(["Title is Required & Year must be four digits"]);
        setSuccess([]);
      }
    }
  }
  return (
    <div className="container w-50  text-light">
      <form onSubmit={handleSubmit} className=" ">
        <h1 className="form-group text-center">
          Add any Movie or TV Show Below
        </h1>

        <div className="form-floating   text-dark">
          <input
            type="text"
            name="Title"
            className="form-control"
            id="floatingTitle"
            placeholder="Movie Title"
            value={formData.Title}
            onChange={handleChange}
          />
          <label>Title</label>
        </div>
        <div className=" form-floating  text-dark  ">
          <input
            type="number"
            name="Year"
            className="form-control"
            id="floatingYear"
            placeholder=""
            value={formData.Year}
            onChange={handleChange}
          />
          <label>Year</label>
        </div>
        <div className=" form-floating   text-dark">
          <select
            name="Type"
            value={formData.Type}
            onChange={handleChange}
            className="form-control"
            id="select"
          >
            <option>Movie</option>
            <option>TV Show</option>
            <option>Video Game</option>
          </select>
        </div>

        <div className="form-floating   text-dark  ">
          <input
            name="Poster"
            type="url"
            className="form-control"
            id="floatingImage"
            placeholder="url"
            value={formData.Poster}
            onChange={handleChange}
          />
          <label>Image url</label>
        </div>

        <button className="  w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
      {console.log(error)}
      <div>
        {error.length > 0
          ? error.map((error, index) => (
              <p key={index} style={{ color: "red" }}>
                {error}
              </p>
            ))
          : null}
        {success.length > 0
          ? success.map((success, index) => (
              <p key={index} style={{ color: "green" }}>
                {success}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}

export default AddOn;
