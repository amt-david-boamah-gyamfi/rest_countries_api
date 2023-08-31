import './App.css';
import Header from './Components/Header/Header';
import MyRoute from './Components/Routes/MyRoute';
import { useState, useEffect } from 'react';

import { myContext } from './Components/Contexts/MyContexts';
import { CountriesType } from './Components/Types/CountriesType';


const url = `https://restcountries.com/v3.1/all`;


function App() {

  const [theme, setTheme] = useState(false);
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [search, setSearch] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');



  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(url);
      const jsonResponse = await rawData.json();
      setCountries(jsonResponse);
      console.log(jsonResponse)
    }

    fetchData();
  }, [])



  const toggle = () => {
    setTheme(!theme)
  }


  return (

    <myContext.Provider value={{
      theme: theme,
      setTheme: setTheme,
      toggle: toggle,
      jsonResponse: countries,

      search: search,
      setSearch: setSearch,
      selectedContinent: selectedContinent,
      setSelectedContinent: setSelectedContinent

    }}>
      <Header />
      <MyRoute />
    </myContext.Provider>


  );
}

export default App;
