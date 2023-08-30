import { createContext } from 'react';
import { CountriesTs } from '../Types/MyTypes';




interface ThemeAndApi {
    setTheme: (theme: boolean) => void;
    theme: boolean
    toggle: () => void;
    jsonResponse: CountriesTs[];
    search: string;
    setSearch: (e: string) => void;
    

}

export const myContext = createContext<ThemeAndApi | undefined>(undefined);
