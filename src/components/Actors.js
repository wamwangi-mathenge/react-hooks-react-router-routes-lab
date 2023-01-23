import React from "react";
import { actors } from "../data";

function Actors() {


  function renderActors(actor) {

    return(
      <div key={actor.name}>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((movie) => (<li key={movie}>{movie}</li>))}
        </ul>
      </div>
    )
  }



  return (
    <div>
      <h1>
      {actors.map((actor) => renderActors(actor))}
      </h1>
    </div>
  )
}

export default Actors;
