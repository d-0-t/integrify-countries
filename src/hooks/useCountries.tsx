import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { fetchCountries } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { CountryType, KeywordType, RootState } from "../types";

export default function useCountries(keyword: KeywordType) {
  const dispatch = useDispatch();
  const { countries } = useSelector(
    (state: RootState) => state.countriesReducer
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  let [countrySearch, setCountrySearch] = useState([]);
  let previousCountrySearch = countrySearch;

  useEffect(() => {
    let searchedCountries = countries.filter((country: CountryType) => {
      return (
        country.name.common.toLowerCase().search(keyword.toLowerCase()) !== -1
      );
    });
    if (
      JSON.stringify(previousCountrySearch) !==
      JSON.stringify(searchedCountries)
    ) {
      setCountrySearch(searchedCountries);
    }
  }, [countries, keyword, previousCountrySearch]);

  return [countrySearch];
}

useCountries.propTypes = {
  keyword: PropTypes.string,
};
