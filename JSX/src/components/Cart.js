import { useDispatch, useSelector } from "react-redux";

import Table from "react-bootstrap/Table";
import Button from "./ButtonFunction";
import { removeFromCart } from "../redux/actions";
import ButtonNavigation from "./Buttons/ButtonNavigation";

export default function Cart() {
  const dispatch = useDispatch();
  let { cart } = useSelector((state) => state.cartReducer);

  function removeThisFromCart(country) {
    dispatch(removeFromCart(country));
  }

  let sum = 0;
  cart.map((item) => (sum = sum + item.population));

  return (
    <div className="page">
      <ButtonNavigation
        linkToPath="/"
        classToApply="btn btn-primary"
        buttonText="˂˂ Go back"
      />
      <h1>My Cart ({cart.length})</h1>
      <Table striped bordered hover className="table-fit">
        <thead>
          <tr>
            <th>Item</th>
            <th colSpan={2}>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((country) => {
            return (
              <tr key={country.name.common}>
                <td>
                  <b>{country.name.common}</b>
                </td>
                <td className="text-right">
                  ${country.population / 1000} Trillion
                </td>
                <td>
                  <Button
                    linkToPath="/cart"
                    classToApply="btn btn-danger"
                    buttonText="X"
                    clickFunction={() => removeThisFromCart(country)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="text-right">
              <b>
                <i>Sum</i>
              </b>
            </td>
            <td colSpan={1} className="text-right">
              <b>$ {sum / 1000} Trillion</b>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
