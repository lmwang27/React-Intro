import React from "react";
import PI, { doublePi, triplePi } from "./math.js";

function List() {
  return (
    <ul>
      <li>Bacon</li>
      <li>Banana</li>
      <li>Beef</li>
      <li>{PI}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  );
}

export default List;
