import { useContext } from 'react'
import { myContext } from '../Contexts/MyContexts';
import { useParams, useNavigate } from 'react-router-dom';
import { CountriesTs } from '../Types/MyTypes';

import { MdKeyboardBackspace } from 'react-icons/md'
import * as C from './IndividualCountry/IndividualCountrystyles'


const Border = () => {
    const { code } = useParams();
    const borderContext = useContext(myContext);
    const navigate = useNavigate()

    const matchingBorders: CountriesTs | undefined = borderContext?.jsonResponse.find(border => border.cca2 === code)



    return (
        <C.Individual>
            <p onClick={() => navigate('/')}><MdKeyboardBackspace style={{ fontSize: '22px', marginRight: '5px' }} />Back</p>

            <div className="single_grid">
                <div className="image">
                    <img src={matchingBorders?.flags.png} alt='wrong' />
                </div>
                <div className="right">
                    <div className="first">
                        <h1>{matchingBorders?.name.common}</h1>
                        {/* <h4>Native Name: <span>{Object.keys(nativeNames).map((nativeNameKey, index) => (
                            <span key={index}>
                                {nativeNames[nativeNameKey].common}
                            </span>
                        ))}</span>  </h4> */}
                        <h4>Population: <span>{matchingBorders?.population}</span></h4>
                        <h4>Region: <span>{matchingBorders?.region}</span></h4>
                        <h4>Sub Region: <span>{matchingBorders?.subregion}</span></h4>
                        <h4>Capital: <span>{matchingBorders?.capital}</span></h4>
                    </div>
                    <div className="second">
                        <h4>Top Level Domain: <span>{matchingBorders?.tld}</span></h4>
                        {/* <h4>Currencies: <span>{Object.keys(currencies).map((currencyKey, index) => (
                            <span key={index}>
                                {currencies[currencyKey].name}
                            </span>
                        ))}</span></h4> */}

                        {/* <h4>Languages: <span>{Object.keys(languages).map((languageKey, index) => (
                            <span key={index}>
                                {languages[languageKey]}
                            </span>
                        ))}</span></h4> */}

                    </div>
                    <div className="third">
                        <h4>Border Countries:</h4>
                        {/* {matchingCountry?.borders ? (
                            matchingCountry.borders.map((borderCountry, index) => (
                                <Link key={index} to={`/${matchingCountry.name.common}/${borderCountry}`}>
                                    <div className="borders" >
                                        {borderCountry}
                                        {index !== matchingCountry.borders.length - 1 && ""}
                                    </div>
                                </Link>

                            ))
                        ) : (
                            <p>No border countries available.</p>
                        )} */}
                    </div>

                </div>

            </div>

        </C.Individual >

    )
}

export default Border