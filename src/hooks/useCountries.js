import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function useCountries(keyword) {
  
  let [countries, setCountries] = useState([]);
  let [countrySearch, setCountrySearch] = useState([]);
  let previousCountrySearch = countrySearch;

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

  useEffect(() => {
    let searchedCountries = countries.filter((country) => {
    return (
      country.name.common
      .toLowerCase()
      .search(keyword.toLowerCase()) !== -1
      );
    });
    if (JSON.stringify(previousCountrySearch) !== JSON.stringify(searchedCountries)) {
      setCountrySearch(searchedCountries);
    }
  }, [countries, keyword, previousCountrySearch])

  return [countrySearch];
}

useCountries.propTypes = {
  keyword: PropTypes.string
}

