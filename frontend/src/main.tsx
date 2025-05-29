import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "../views/LandingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
