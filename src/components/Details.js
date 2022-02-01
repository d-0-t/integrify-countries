import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Details() {

  let { countryName } = useParams();
  let [ country, setCountry ] = useState([]);
  
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
      console.error('Error: ', error)
    });
  }, [countryName]);

  while (country.length === 0) {
    return <div className='page'>Loading...</div>
  }
  if (country.status === 404) {
    return (
      <div className='page'>
        <h1>Error 404</h1>
        <p>Invalid request. Country not found.</p>
        <code>
          {JSON.stringify(country)}
        </code>
      </div>
    )}

  return (
    <div className='page'>
      <Link to='/' className="btn btn-primary">˂˂ Go back</Link>
      <h1>{country.name.common}</h1>
      <div className='card'>
        <img alt={"Flag of " + country.name.common} className='card-img-top' src={country.flags.png} />
        <div className='card-body'>
        <div className='detail'>
            <span className='detail__label'>Capital: </span>
            <span className='detail__info'>{country.capital}</span>
          </div>
          <div className='detail'>
            <span className='detail__label'>Population: </span>
            <span className='detail__info'>{country.population}</span>
          </div>
          <div className='detail'>
            <span className='detail__label'>Languages: </span>
            <span className='detail__info'>
              <ul>
                {
                  country.languages
                    ? Object.keys(country.languages).map(lang => <li key={country.name.common + "-" + lang}>{country.languages[lang]}</li>)
                    : <li key={country.name.common + "-none"}>None</li>
                }
              </ul>
            </span>
          </div>
          <div className='detail'>
            <span className='detail__label'>Currency: </span>
            <span className='detail__info'>
              <ul>
                {
                  country.currencies
                    ? Object.keys(country.currencies).map(currency => <li key={country.name.common + "-" + currency}>{country.currencies[currency].name + " (" + country.currencies[currency].symbol + ")"}</li>)
                    : <li key={country.name.common + "-none"}>None</li>
                }
              </ul>
            </span>
          </div>
          <div className='detail'>
            <span className='detail__label'>Timezone: </span>
            <span className='detail__info'>{country.timezones.join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
