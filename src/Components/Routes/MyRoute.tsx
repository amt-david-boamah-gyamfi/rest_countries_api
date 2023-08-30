import { Routes, Route } from 'react-router-dom';
import Search from './SearchArea/Search';
import Countries from './Countries/Countries';
import IndividualCountry from './IndividualCountry/IndividualCountry';


const MyRoute = () => {
    return (

        <Routes>
            <Route path='/' element={<div><Search /><Countries /></div>} />
            <Route path='/:name' element={<IndividualCountry />} />
        </Routes>

    )
}

export default MyRoute