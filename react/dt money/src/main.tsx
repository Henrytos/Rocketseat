import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { Home } from "./pages/Home";
import { TransactionProvider } from "./contexts/TransactionsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TransactionProvider>
      <Home />
    </TransactionProvider>
  </React.StrictMode>
);
