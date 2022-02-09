import {
  CountriesType,
  CountryNameType,
  CountryType,
  KeywordType,
  StateType,
} from "../types";

export function getKeyword(keyword: KeywordType) {
  return {
    type: "GET_KEYWORD",
    payload: {
      keyword,
    },
  };
}

export function getCountries(countries: CountriesType) {
  return {
    type: "GET_COUNTRIES",
    payload: {
      countries,
    },
  };
}

export function fetchCountries() {
  return (dispatch: (arg: StateType) => void) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => dispatch(getCountries(data)))
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
}

export function getOneCountry(country: CountryType) {
  return {
    type: "GET_ONE_COUNTRY",
    payload: {
      country,
    },
  };
}

export function fetchOneCountry(countryName: CountryNameType) {
  return (dispatch: (arg: StateType) => void) => {
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

export function addToCart(item: CountryType) {
  return {
    type: "ADD_TO_CART",
    payload: {
      item,
    },
  };
}

export function removeFromCart(item: CountryType) {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      item,
    },
  };
}
