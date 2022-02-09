import { memo } from "react";
import Table from "react-bootstrap/Table";

import CountryTableBody from "./CountryTableBody";
import CountryTableHead from "./CountryTableHead";

import { CountriesType } from "../../types";

function CountryTable({ countries }: CountriesType) {
  return (
    <Table striped bordered hover>
      <CountryTableHead />
      <CountryTableBody countries={countries} />
    </Table>
  );
}
export default memo(CountryTable);
