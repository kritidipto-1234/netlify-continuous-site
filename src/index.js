import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

if (location.href.includes('about')) alert("About refresh")