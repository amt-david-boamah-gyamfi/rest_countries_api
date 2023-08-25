import { useParams, useNavigate, Link } from "react-router-dom";
import { MdKeyboardBackspace } from 'react-icons/md'
import { useContext } from "react";
import { myContext } from "../../Contexts/MyContexts";
import * as C from './IndividualCountrystyles'
import { CountriesTs } from "../../Types/MyTypes";




const IndividualCountry = () => {
    const { name } = useParams();
    const individualContext = useContext(myContext);
    const navigate = useNavigate()

    const matchingCountry: CountriesTs | undefined = individualContext?.jsonResponse.find(country => country.name.common === name)

    // const selectCountry = countries.find(country => country.cca3 === countryCode)

    const nativeNames: { [index: string]: { common: string, official: string } } = matchingCountry ? matchingCountry.name.nativeName : {};
    const currencies: { [index: string]: { name: string } } = matchingCountry ? matchingCountry.currencies : {};
    const languages: { [index: string]: string } = matchingCountry ? matchingCountry.languages : {};
    return (
        <C.Individual>
            <div className="back">
                <p onClick={() => navigate('/')}><MdKeyboardBackspace style={{ fontSize: '22px', marginRight: '5px' }} />Back</p>
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
                        matchingCountry.borders.map((borderCountry, index) => (



                            <Link className="borders" key={index} to={`/`}>   {borderCountry}  {index !== matchingCountry.borders.length - 1 && ""}</Link>




                        ))
                    ) : (
                        <p>No border countries available.</p>
                    )}
                </div>



            </div>

        </C.Individual >
    )
}

export default IndividualCountry