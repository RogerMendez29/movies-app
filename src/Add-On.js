import { useState, React } from "react";

function AddOn() {
  const [formData, setformData] = useState({
    Title: "",
    Year: "",
    Type: "",
    Poster: "",
  });
  function handleChange(event) {
    console.log(event.target.value);

    setformData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    fetch(" http://localhost:3000/favorites", {
      method: "POST",

      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    });
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
            placeholder="Url"
            value={formData.Poster}
            onChange={handleChange}
          />
          <label>Poster</label>
        </div>

        <button className="  w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddOn;
