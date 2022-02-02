import { useState, useCallback } from "react";

import useCountries from "../hooks/useCountries";
import CountryTable from "./CountryTable/CountryTable";
import Search from "./Search";
import Title from "./Title";

export default function Home() {
  let [keyword, setKeyword] = useState("");
  let [countrySearch] = useCountries(keyword);

  const handleChange = useCallback((event) => {
    let newKeyword = event.target.value;
    setKeyword(newKeyword);
  }, []);

  return (
    <div className="page">
      <Search value={keyword} handleChange={handleChange} />
      <Title count={countrySearch.length} />
      <CountryTable countries={countrySearch} />
    </div>
  );
}
