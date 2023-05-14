import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import configureStore from "./Page/store/configureStore";
import "./Page/styles/styles.scss";
import { HomePage } from "./Page/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/app/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
