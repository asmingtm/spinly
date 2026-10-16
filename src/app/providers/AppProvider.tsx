import { Outlet } from "react-router";
import { OptionsProvider } from "@contexts";

export function AppProvider() {
    return (
        <OptionsProvider>
            <Outlet />
        </OptionsProvider>
    );
}