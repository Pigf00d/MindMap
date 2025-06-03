import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "../views/LandingPage.tsx";
import RegistrationPage from "../views/RegistrationPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
