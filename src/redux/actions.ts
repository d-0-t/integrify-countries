import {
  AddToCartType,
  CountriesType,
  CountryNameType,
  CountryType,
  GetCountriesType,
  GetKeywordType,
  GetOneCountryType,
  KeywordType,
  RemoveFromCartType,
} from "../types";
import { Dispatch } from "redux";

const GET_KEYWORD = "GET_KEYWORD";
const GET_COUNTRIES = "GET_COUNTRIES";
const GET_ONE_COUNTRY = "GET_ONE_COUNTRY";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function getKeyword(keyword: KeywordType): GetKeywordType {
  return {
    type: GET_KEYWORD,
    payload: {
      keyword,
    },
  };
}

export function getCountries(countries: CountriesType): GetCountriesType {
  return {
    type: GET_COUNTRIES,
    payload: {
      countries,
    },
  };
}

export function fetchCountries() {
  return (dispatch: Dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => dispatch(getCountries(data)))
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
}

export function getOneCountry(country: CountryType): GetOneCountryType {
  return {
    type: GET_ONE_COUNTRY,
    payload: {
      country,
    },
  };
}

export function fetchOneCountry(countryName: CountryNameType) {
  return (dispatch: Dispatch) => {
    fetch("https://restcountries.com/v3.1/name/" + countryName)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 404) {
          dispatch(getOneCountry(data));
        } else {
          dispatch(getOneCountry(data[0]));
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
}

export function addToCart(item: CountryType): AddToCartType {
  return {
    type: ADD_TO_CART,
    payload: {
      item,
    },
  };
}

export function removeFromCart(item: CountryType): RemoveFromCartType {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      item,
    },
  };
}
