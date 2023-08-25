import { useContext } from "react";
import { myContext } from "../../Contexts/MyContexts";
import * as C from './CountriesStyles';
import { Link } from "react-router-dom";

const Countries = () => {
    const Countries = useContext(myContext)
    return (
        <C.Countriesstyle>
            {
                Countries?.jsonResponse.map(country => (
                    <div key={country.cca2} className="grid">
                        <Link to={`./${country.name.common}`}>
                            <img src={country.flags.png} alt={country.flags.alt} />
                            <div className="height">
                                <h1>{country.name.common}</h1>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                <p>Capital: <span>{country.capital}</span></p>
                            </div>
                        </Link>

                    </div>
                ))
            }
        </C.Countriesstyle>
    )
}

export default Countries