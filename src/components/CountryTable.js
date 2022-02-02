import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function CountryTable(props) {
  let countries = props.countries;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Population</th>
          <th>Language</th>
          <th>Region</th>
        </tr>
      </thead>
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
                    { country.languages
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
    </Table>
  );
}
