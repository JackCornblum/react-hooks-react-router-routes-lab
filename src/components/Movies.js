import React from "react";
import { movies } from "../data";

function Movies() {
  let movieList = movies.map(obj => {
    let genres = obj.genres.map(genre => <li key={genre}>{genre}</li>)
    return (
      <div key={obj.title}>
        <h2>{obj.title} Time : {obj.time}</h2>
        <ul>{genres}</ul>
      </div>
    )
  })

  return <div><h1>Movies Page</h1>{movieList}</div>;
}

export default Movies;
