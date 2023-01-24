import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director,index) => {
      return (
        <ul key={index}>
          <h2 key={director.name}>{director.name}</h2>
          {director.movies.map((movie, index)=>{
            return <li key={index}>{movie}</li>
          })}
        </ul>
      )
    })}
  </div>;
}

export default Directors;
