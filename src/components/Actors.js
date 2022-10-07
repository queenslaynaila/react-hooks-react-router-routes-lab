import React from "react";
import { actors } from "../data";

function Actors() {

  const actorElements= actors.map((actor)=>{
    return (
     <div key={actor.name}>
       <h1>{actor.name}</h1>     
       <ul>{actor.movies.map(singleMovie=>{ return <li key={singleMovie}>{singleMovie}</li>})}  </ul>

     </div>
    )
 })

  return (
    <div>
      <h1>Actors Page</h1>
      { actorElements}

    </div>

  );
}
export default Actors;