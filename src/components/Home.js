import { useEffect, useState } from 'react';
import CountryTable from './CountryTable';

export default function Home() {

  let [ countries, setCountries ] = useState([]);
  let [ countrySearch, setCountrySearch ] = useState([]);
  let [ keyword, setKeyword ] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      setCountries(data);
      setCountrySearch(data);
    })
  }, [])
  
  let handleChange = (event) => {
    let newKeyword = event.target.value; 
    setKeyword(newKeyword);

    let searchedCountries = countries.filter((country) => {
      return (
        country.name.common.toLowerCase().search(newKeyword.toLowerCase()) !== -1
      )
    })
    setCountrySearch(searchedCountries);
  }

  while (countries.length === 0) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <input type="text" className='search-input' placeholder='Search for a country...'
        value={keyword}
        onChange={handleChange}
      ></input>
      <h1>Countries</h1>
      <CountryTable countries={countrySearch} />
    </div>
  )
}