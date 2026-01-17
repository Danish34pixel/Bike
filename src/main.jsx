import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BikesGallery from "./BikesGallery.jsx";
import BikeDetail from "./BikeDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<BikesGallery />} />
        <Route path="/bike/:id" element={<BikeDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
