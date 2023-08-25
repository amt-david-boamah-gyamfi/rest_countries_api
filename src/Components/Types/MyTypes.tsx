export interface CountriesTs {
    name: {
        common: string,
        nativeName: {
            [index: string]: {
                
                common: string,
                official: string,
            }
        }
    }

    subregion: string

    currencies: {
        [index: string]: {
            name: string
        }
    }

    languages: {
        [index: string]: string
    }

    borders: string[]

    tld: string[]

    capital: string[]

    population: number

    region: string

    cca2: string

    flags: {
        alt: string,
        png: string,
        svg: string
    }
}