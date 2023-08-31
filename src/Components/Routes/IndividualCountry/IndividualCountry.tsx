import { useParams, useNavigate, Link } from "react-router-dom";
import { MdKeyboardBackspace } from 'react-icons/md'
import { useContext, useState, useEffect } from "react";
import { myContext } from "../../Contexts/MyContexts";
import * as C from './IndividualCountrystyles'
import { CountriesTs } from "../../Types/MyTypes";
import { CountriesType } from "../../Types/CountriesType";




const IndividualCountry = () => {
    const [matchingCountry, setMatchingCountry] = useState<CountriesTs | undefined>(undefined);

    const { name } = useParams();
    const individualContext = useContext(myContext);
    const navigate = useNavigate()



    useEffect(() => {
        const country = individualContext?.jsonResponse.find(country => country.name.common === name) as CountriesTs;
        setMatchingCountry(country);
    }, [name, individualContext]);



    if (!matchingCountry) {
        return <p>Loading...</p>;
    }





    const nativeNames: { [index: string]: { common: string, official: string } } = matchingCountry ? matchingCountry.name.nativeName : {};
    const currencies: { [index: string]: { name: string } } = matchingCountry ? matchingCountry.currencies : {};
    const languages: { [index: string]: string } = matchingCountry ? matchingCountry.languages : {};
    return (
        <C.Individual>
            <div className="back">
                <div className="arrow" onClick={() => navigate('/')}><MdKeyboardBackspace style={{ fontSize: '22px', marginRight: '5px' }} />Back</div>
            </div>

            <div className="single_grid">
                <div className="image">
                    <img src={matchingCountry?.flags.png} alt={matchingCountry?.flags.alt} />
                </div>

                <div className="first">
                    <h1>{matchingCountry?.name.common}</h1>
                    <h4>Native Name: <span>{Object.keys(nativeNames).map((nativeNameKey, index) => (
                        <span key={index}>
                            {nativeNames[nativeNameKey].common}
                        </span>
                    ))}</span>  </h4>
                    <h4>Population: <span>{matchingCountry?.population}</span></h4>
                    <h4>Region: <span>{matchingCountry?.region}</span></h4>
                    <h4>Sub Region: <span>{matchingCountry?.subregion}</span></h4>
                    <h4>Capital: <span>{matchingCountry?.capital}</span></h4>
                </div>
                <div className="second">
                    <h4>Top Level Domain: <span>{matchingCountry?.tld}</span></h4>
                    <h4>Currencies: <span>{Object.keys(currencies).map((currencyKey, index) => (
                        <span key={index}>
                            {currencies[currencyKey].name}
                        </span>
                    ))}</span></h4>

                    <h4>Languages: <span>{Object.keys(languages).map((languageKey, index) => (
                        <span key={index}>
                            {languages[languageKey]}
                        </span>
                    ))}</span></h4>

                </div>
                <div className="third">
                    <h4>Border Countries:</h4>
                    {matchingCountry?.borders ? (
                        matchingCountry.borders.map((borderCountryAbbreviation, index) => {
                            const borderCountryObj = individualContext?.jsonResponse.find(
                                (country: CountriesType) => country.cca3 === borderCountryAbbreviation
                            );

                            if (borderCountryObj) {
                                return (
                                    <Link
                                        className="borders"
                                        key={index}
                                        to={`/${borderCountryObj.name.common}`}>
                                        {borderCountryObj.name.common} {index !== matchingCountry.borders.length - 1 ? "" : ""}
                                    </Link>
                                );
                            }

                            return null; // Return null if border country not found
                        })
                    ) : (
                        <p>No border countries available.</p>
                    )}
                </div>
            </div>

        </C.Individual >
    )
}

export default IndividualCountry