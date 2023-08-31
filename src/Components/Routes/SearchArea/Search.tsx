import * as C from './SearchStyles';
import { BiSearch } from 'react-icons/bi';
import { useContext } from 'react';
import { myContext } from '../../Contexts/MyContexts';


const Search = () => {
    const searchContext = useContext(myContext);


    return (
        <C.MySearch>

            <BiSearch className="search-icon" />
            <input
                type='text'
                placeholder='Search for a Country'

                onChange={(e) => searchContext?.setSearch(e.target.value)}
                value={searchContext?.search}

            />
            <select onChange={(e) => searchContext?.setSelectedContinent(e.target.value)}>
                <option value="Filter by Region" selected disabled>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>



        </C.MySearch>
    )
}

export default Search