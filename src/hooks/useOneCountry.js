import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function useOneCountry(countryName) {
  
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + countryName)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 404) {
          setCountry(data);
        } else {
          setCountry(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, [countryName]);

  return [country];
}

useOneCountry.propTypes = {
  countryName: PropTypes.string.isRequired
}
