import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // CSS Import
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JS Import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
