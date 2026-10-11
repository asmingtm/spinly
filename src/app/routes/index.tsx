import { createBrowserRouter } from "react-router";

import { AppProvider } from "@providers";
import { LegalPage, MainPage } from "@features";

export const routes = createBrowserRouter([
    {
        element: <AppProvider />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/legal",
                element: <LegalPage />
            }
        ]
    }
]);