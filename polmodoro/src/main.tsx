import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { CyclesContextsProvider } from "./contexts/CyclesContexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CyclesContextsProvider>
      <RouterProvider router={router} />
    </CyclesContextsProvider>
  </React.StrictMode>
);
