import { useParams, useNavigate } from "react-router-dom";
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

    return (
        <C.Individual>
            <p onClick={() => navigate('/')}><MdKeyboardBackspace style={{ fontSize: '22px', marginRight: '5px' }} />Back</p>

            <div className="single_grid">
                <div className="image">
                    <img src={matchingCountry?.flags.png} alt={matchingCountry?.flags.alt} />
                </div>
                <div className="right">
                    <div className="first">
                        <h1>{matchingCountry?.name.common}</h1>
                        <h4>Native Name: </h4>
                        <h4>Population: <span>{matchingCountry?.population}</span></h4>
                        <h4>Region: <span>{matchingCountry?.region}</span></h4>
                        <h4>Sub Region: <span>{matchingCountry?.subregion}</span></h4>
                        <h4>Capital: <span>{matchingCountry?.capital}</span></h4>
                    </div>
                    <div className="second">
                        <h4>Top Level Domain: <span>{matchingCountry?.tld}</span></h4>
                        <h4>Currencies: <span></span></h4>
                        <h4>Languages: <span></span></h4>
                    </div>
                    <div className="third">
                        <h4>Border Countries:</h4>
                    </div>
                </div>

            </div>

        </C.Individual >
    )
}

export default IndividualCountry