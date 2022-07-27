//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const MyName = "Park Chan";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <>
    <p>
      Created by {MyName}
      <br />
      <p>Copyright {currentYear}</p>
    </p>
  </>,
  document.getElementById("root")
);
