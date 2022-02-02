import { memo } from 'react';
import { Link } from "react-router-dom";

function CountryTableBody({countries}) {
  return (
    <tbody>
      {countries.map((country) => {
        return (
          <tr key={country.name.common + "-country"}>
            <td>
              <img
                alt={"Flag of " + country.name.common}
                className="flag--small"
                src={country.flags.png}
              />
            </td>
            <td>
              <Link to={`/details/${country.name.common}`}>
                {country.name.common}
              </Link>
            </td>
            <td>{country.population}</td>
            <td>
              {
                <ul>
                  { 
                    country.languages
                    ? Object.keys(country.languages).map((lang) => (
                      <li key={country.name.common + "-" + lang}>
                        {country.languages[lang]}
                      </li>))
                    : <li key={country.name.common + "-none"}>None</li>
                  }
                </ul>
              }
            </td>
            <td>{country.region}</td>
          </tr>
        );
      })}
    </tbody>
  )
}

export default memo(CountryTableBody);
