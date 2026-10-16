import { createContext, useState, useMemo } from "react";
import type { ContextProvider, OptionObject, OptionsContextValue } from "@types";

export const defaultOptions: OptionObject[] = [
    { color: "hsl(270, 80%, 30%)", content: "Example 1", weight: 1 },
    { color: "hsl(0, 80%, 30%)", content: "Example 2", weight: 1 },
];

export const OptionsContext = createContext<OptionsContextValue>({
    options: defaultOptions,
    setOptions: () => {},
});

export function OptionsProvider({ children }: ContextProvider) {
    const [options, setOptions] = useState<OptionObject[]>(defaultOptions);
    const value = useMemo(() => ({ options, setOptions }), [options]);

    return (
        <OptionsContext value={ value }>
            { children }
        </OptionsContext>
    );
}