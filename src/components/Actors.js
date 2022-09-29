import React from "react";
import { actors } from "../data";
const actorlist = actors.map((act)=>{
  return (
    <div key={act.name}>
      <h2>{act.name}</h2>
      <ul>
        {act.movies.map((m)=>{
          return <li key={m}>{m}</li>
        })}
      </ul>
    </div>
  )
})
function Actors() {
  return (<div>
    <h1>Actors Page</h1>
    {actorlist}
  </div>);
}

export default Actors;
