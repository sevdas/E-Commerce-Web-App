import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Context";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);
