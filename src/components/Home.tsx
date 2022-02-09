import { useCallback } from "react";

import useCountries from "../hooks/useCountries";
import CountryTable from "./CountryTable/CountryTable";
import Search from "./Search";
import Title from "./Title";
import ButtonNavigation from "./Buttons/ButtonNavigation";

import { getKeyword } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { StateType } from '../types';

export default function Home() {
  const dispatch = useDispatch();
  let { keyword } = useSelector((state: StateType) => state.keywordReducer);
  let [countrySearch] = useCountries(keyword);
  let { cart } = useSelector((state: StateType) => state.cartReducer);

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
      <header>
        <Search keyword={keyword} handleChange={handleChange} />
        <ButtonNavigation linkToPath="/cart" classToApply="btn btn-primary" buttonText={"My cart (" + cart.length + ")" }/>
      </header>
      <Title count={countrySearch.length} />
      <CountryTable countries={countrySearch} />
    </div>
  );
}
