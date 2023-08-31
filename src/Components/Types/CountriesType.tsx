export interface CountriesType {
    name: {
        common: string,
        nativeName: {
            [index: string]: {
                common: string
            }
        }
    }

    capital: string[]

    population: number

    region: string

    cca3: string

    flags: {
        alt: string,
        png: string,
    }
}