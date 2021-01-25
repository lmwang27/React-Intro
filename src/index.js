import React from "react";
import ReactDom from "react-dom";

const name = "Eva";
const year = new Date().getFullYear();

ReactDom.render(
  <div>
    <h1>Hello, I'm {name},My favourite food:</h1>
    <ul>
      <li>Vegies</li>
      <li>Fruit</li>
      <li>Seafood</li>
    </ul>
    <h1>Created getElementById @ {name} </h1>
    <h1>Copyright @ {year} </h1>
  </div>,
  document.getElementById("root")
);
