import React from "react";
import Heading from "./Heading.jsx";
import List from "./List.jsx";

const name = "Eva";
const year = new Date().getFullYear();
const img = "https://picsum.photos/seed/picsum/200/300";

function App() {
  return (
    <div>
      <Heading />
      <List />
      <div>
        <img src={img + "?grayscale"} alt="" />
      </div>
      <p>Created getElementById @ {name} </p>
      <p>Copyright @ {year} </p>
    </div>
  );
}

export default App;
