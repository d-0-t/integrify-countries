import { useEffect, useState } from "react";
import CountryTable from "./CountryTable";
import Search from "./Search";

export default function Home() {
  let [countries, setCountries] = useState([]);
  let [countrySearch, setCountrySearch] = useState([]);
  let [keyword, setKeyword] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setCountrySearch(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  const handleChange = (event) => {
    let newKeyword = event.target.value;
    setKeyword(newKeyword);
    let searchedCountries = countries.filter((country) => {
      return (
        country.name.common.toLowerCase().search(newKeyword.toLowerCase()) !==
        -1
      );
    });
    setCountrySearch(searchedCountries);
  };

  while (countries.length === 0) {
    return <div className="page">Loading...</div>;
  }

  return (
    <div className="page">
      <Search value={keyword} handleChange={handleChange} />
      <h1>Countries</h1>
      <CountryTable countries={countrySearch} />
    </div>
  );
}
