import type { ReactNode, Dispatch, SetStateAction } from "react";

export interface ContextProvider{
    children: ReactNode;
}

export interface OptionObject{
    color: string;
    content: string;
    weight: number;
}

export interface OptionsContextValue {
    options: OptionObject[];
    setOptions: Dispatch<SetStateAction<OptionObject[]>>;
}