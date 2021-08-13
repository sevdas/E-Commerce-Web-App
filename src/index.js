import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PhotosContextProvider } from "./Context";

ReactDOM.render(
  <PhotosContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </PhotosContextProvider>,
  document.getElementById("root")
);
