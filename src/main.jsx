import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./providers/AppProvider";
import AppRouter from "./router/AppRouter";
import "./assets/styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </Router>
  </StrictMode>
);
