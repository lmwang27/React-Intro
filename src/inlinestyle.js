import React from "react";
import ReactDom from "react-dom";

const name = "Eva";
const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black"
};

const date = new Date();
const currentTime = date.getHours();

const greeting = function (currentTime) {
  if (currentTime < 12) {
    return "Good Morning";
  } else if (currentTime < 18) {
    return "Good Afternoon";
  } else {
    return "Good Night";
  }
};

customStyle.color = "red";
ReactDom.render(
  <h1 style={customStyle}>{greeting(currentTime)}</h1>,
  document.getElementById("root")
);
