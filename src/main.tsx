import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MainPage } from "@features";

import "@styles";

const root = document.getElementById("root");
createRoot(root!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);