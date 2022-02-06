import { useCallback } from "react";

import useCountries from "../hooks/useCountries";
import CountryTable from "./CountryTable/CountryTable";
import Search from "./Search";
import Title from "./Title";

import { getKeyword } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  let { keyword } = useSelector((state) => state.keywordReducer);
  let [countrySearch] = useCountries(keyword);

  const handleChange = useCallback(
    (event) => {
      let newKeyword = event.target.value;
      // Only search for actual characters and spaces
      // Needed because an asterisk symbol (*) will crash the app
      const illegalChars = /[^a-zA-Z\s]/g;
      newKeyword = newKeyword.replaceAll(illegalChars, "");

      dispatch(getKeyword(newKeyword));
    },
    [dispatch]
  );

  return (
    <div className="page">
      <Search value={keyword} handleChange={handleChange} />
      <Title count={countrySearch.length} />
      <CountryTable countries={countrySearch} />
    </div>
  );
}
