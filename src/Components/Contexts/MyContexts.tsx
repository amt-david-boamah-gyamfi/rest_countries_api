import { createContext } from 'react';

import { CountriesType } from '../Types/CountriesType';




interface ThemeAndApi {
    setTheme: (theme: boolean) => void;
    theme: boolean
    toggle: () => void;
    jsonResponse: CountriesType[];
    search: string;
    setSearch: (e: string) => void;
    selectedContinent: string
setSelectedContinent: (e: string) => void;
}

export const myContext = createContext<ThemeAndApi | undefined>(undefined);
