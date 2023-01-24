import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>

   <h1>Actors Page</h1>


    {actors.map((actor,index) => {
      return(
        <ul key={index}>
          <h2 key={actor.name}>{actor.name}</h2>
         { actor.movies.map((movie,index) =>{
          return <li key={index}>{movie}</li>
         })}
        </ul>
      )
    })}
  </div>
  )
}

export default Actors;