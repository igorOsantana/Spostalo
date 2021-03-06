import React, { createContext, ReactNode, useState } from "react";

interface ThemeContextData {
    theme: boolean;
    switchTheme: (parament: boolean) => void;
}

interface ThemeContextProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProps) {
    const [theme, setTheme] = useState(false);

    const switchTheme = (theme: boolean) => setTheme(!theme);

    return (
        <ThemeContext.Provider
            value={{
                switchTheme,
                theme
            }}>
            {children}
        </ThemeContext.Provider>
    );
};


