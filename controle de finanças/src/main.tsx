import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
