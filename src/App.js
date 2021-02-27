import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import usersData from './data/data.json'

function App() {
  const [users,setUsers]= useState([]);
  useEffect(()=>{
    setUsers(usersData);
  },[])
  const addCountryClick=(country)=>{
    const newCountryList=[...addedCountries,country];
    setAddedCountries(newCountryList);
  }
  const [addedCountries,setAddedCountries]= useState([]);

  const totalPopulation=addedCountries.reduce((acc,cn)=>acc+=cn.population,0);

  
  const [countries,setCountries]= useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Total added country: {addedCountries.length}</h1>
        <h2>Total population: {totalPopulation}</h2>
        {
          users.map(user=> <h2>{user.first_name}</h2> )
        }
        <img src={logo} className="App-logo" alt="logo" />
        {
          countries.map(country=> <Country country={country} addCountryClick={addCountryClick}></Country> )
        }
      </header>
    </div>
  );
}

export default App;
