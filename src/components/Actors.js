import React from "react";
import { actors } from "../data";

function Actors() {

  let actorData = actors.map(obj => {
    let movies = obj.movies.map(movie => <li key={movie}>{movie}</li>)
    return (
      <div key={obj.name}>
        <h2>{obj.name}</h2>
        <ul>{movies}</ul>
      </div>
    )
  })

  return <div><h1>Actors Page</h1>{actorData}</div>;
}

export default Actors;
