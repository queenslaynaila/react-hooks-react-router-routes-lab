import React from "react";
import { movies } from "../data";

const movielist = movies.map((movie)=>{
  return (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>
      <ul key={movie.title}>
        {movie.genres.map((genre)=>{
          return <li key={genre}>{genre}</li>
        })}
      </ul>
    </div>

  )
})
function Movies() {
  return( <div>
    <h1>Movies Page</h1>
     {movielist}
  </div>);
}

export default Movies;
