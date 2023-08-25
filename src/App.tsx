import './App.css';
import Header from './Components/Header/Header';
import MyRoute from './Components/Routes/MyRoute';
import { useState, useEffect } from 'react';
import { CountriesTs } from './Components/Types/MyTypes';
import { myContext } from './Components/Contexts/MyContexts';
import { ThemeProvider } from 'styled-components';
import { themeSetting } from './Components/Contexts/MyContexts';

const url = `https://restcountries.com/v3.1/all`;


function App() {

  const [theme, setTheme] = useState(false);
  const [countries, setCountries] = useState<CountriesTs[]>([]);
  const [search, setSearch] = useState('');



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

  const typingAndSelecting = search.toLowerCase();

  const filterCountries = countries.filter(country => country
    .name.common.toLowerCase().includes(typingAndSelecting) ||
    country.region.toLowerCase().includes(typingAndSelecting));

  return (
   
      <myContext.Provider value={{
        theme: theme,
        setTheme:setTheme,
        toggle: toggle,
        jsonResponse: filterCountries,
        search: search,
        setSearch: setSearch
      }}>
        <Header />
        <MyRoute />
      </myContext.Provider>
    

  );
}

export default App;
