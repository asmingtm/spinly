import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";

import "@styles";
import { routes } from "@routes";

const root = document.getElementById("root");
createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);