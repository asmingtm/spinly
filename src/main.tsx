import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LandingPage } from "@features";

const root = document.getElementById("root");
createRoot(root!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);