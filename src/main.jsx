import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";
import "./index.css";
import { ContextProvider } from "./store/filter-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
