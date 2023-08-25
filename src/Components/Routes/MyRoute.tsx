import { Routes, Route } from 'react-router-dom';
import Search from './SearchArea/Search';
import Countries from './Countries/Countries';
import IndividualCountry from './IndividualCountry/IndividualCountry';
import Border from './Border';

const MyRoute = () => {
    return (

        <Routes>
            <Route path='/' element={<div><Search /><Countries /></div>} />
            <Route path='/:name' element={<IndividualCountry />} />
            <Route path='/:name/:code' element={<Border />} />
        </Routes>

    )
}

export default MyRoute