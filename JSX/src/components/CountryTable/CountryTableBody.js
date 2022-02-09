import { memo } from 'react';
import { Link } from "react-router-dom";
import Button from '../ButtonFunction';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../redux/actions';

function CountryTableBody({countries}) {
  const dispatch = useDispatch();

  function addThisToCart(country) {
    dispatch(addToCart(country));
  }

  const { cart } = useSelector((state) => state.cartReducer);
  function isItDisabled(item) {
    if (cart.filter(x => x.name.common === item.name.common).length > 0) {
      return true
    }
    return false;
  }

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
            <td className='text-center'>
              <Button
                linkToPath="/"
                classToApply="btn btn-primary"
                buttonText="Add"
                isItDisabled={isItDisabled(country)}
                clickFunction={() => addThisToCart(country)}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  )
}

export default memo(CountryTableBody);
