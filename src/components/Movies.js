import React from "react";
import { movies } from "../data";

function Movies() {
  {movies.map((movie) => renderMovies(movie))}

  return(
    <div key={movies.title}>
      <h3>{movies.title}</h3>
      <p>Time: {movies.title}</p>
      <p>Genres: </p>
      <ul>
        {movies.genres.map((genre) => (<li key={genre}>{genre}</li>))}
      </ul>
    </div>
  )
}

export default Movies;
