import { createContext } from 'react';
import { CountriesTs } from '../Types/MyTypes';

export const themeSetting = {
    light: {
        text: 'hsl(200, 15%, 8%)',
        background: 'hsl(0, 0%, 98%)',
    },
    dark: {
        text: 'hsl(0, 0%, 100%)',
        background: 'hsl(207, 26%, 17%)',
    },
};


interface ThemeAndApi {
    // isDark: boolean;
    setTheme: (theme: boolean) => void;
    theme: boolean
    toggle: () => void;
    jsonResponse: CountriesTs[];
    search: string;
    setSearch: (e: string) => void;
    select: string;
    setSelect: (e: string) => void;

}

export const myContext = createContext<ThemeAndApi | undefined>(undefined);