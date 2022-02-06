export function getKeyword(keyword) {
  return {
    type: "GET_KEYWORD",
    payload: {
      keyword,
    },
  };
}

export function getCountries(countries) {
  return {
    type: "GET_COUNTRIES",
    payload: {
      countries,
    },
  };
}

export function fetchCountries() {
  return (dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => dispatch(getCountries(data)))
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
}

export function getOneCountry(country) {
  return {
    type: "GET_ONE_COUNTRY",
    payload: {
      country,
    },
  };
}

export function fetchOneCountry(countryName) {
  return (dispatch) => {
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
