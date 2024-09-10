import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./components/card";
import Home from "./modules/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Card />
    <Home/>
  </React.StrictMode>
);
