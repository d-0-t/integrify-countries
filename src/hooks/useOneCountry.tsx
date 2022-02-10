import { useEffect } from "react";
import PropTypes from "prop-types";

import { fetchOneCountry } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { CountryNameType, RootState } from "../types";

export default function useOneCountry(countryName: CountryNameType) {
  const dispatch = useDispatch();
  const { country } = useSelector((state: RootState) => state.oneCountryReducer);

  useEffect(() => {
    dispatch(fetchOneCountry(countryName));
  }, [dispatch, countryName]);

  return [country];
}

useOneCountry.propTypes = {
  countryName: PropTypes.string.isRequired,
};
