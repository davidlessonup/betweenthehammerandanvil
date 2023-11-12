import React from "react";
import ReactDOM from "react-dom/client";
import { SlideDeck } from "./SlideDeck.tsx";
import "react-svg-radar-chart/build/css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SlideDeck />
  </React.StrictMode>,
);
