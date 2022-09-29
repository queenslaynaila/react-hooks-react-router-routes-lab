import React from "react";
import { directors } from "../data";

const directorlist = directors.map((director)=>{
  return (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie)=>{
          return <li key={movie}>{movie}</li>
        })}
      </ul>
    </div>
  )
})

function Directors() {
  return(<div>
    <h1>Directors Page</h1>
    {directorlist}
    </div>);
}

export default Directors;
