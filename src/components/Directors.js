import React from "react";
import { directors } from "../data";

function Directors() {

  let directorData = directors.map(obj => {
    let movies = obj.movies.map(movie => <li key={movie}>{movie}</li>)
    return (
      <div key={obj.name}>
        <h2>{obj.name}</h2>
        <ul>{movies}</ul>
      </div>
    )
  })

  return <div><h1>Directors Page</h1>{directorData}</div>;
}

export default Directors;
