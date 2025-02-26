import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Normalize
import "modern-normalize/modern-normalize.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
// Özelleştirilmiş SASS
import "./custom.scss";
// Components
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
