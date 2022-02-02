import { memo } from 'react';
import Table from "react-bootstrap/Table";

import CountryTableBody from "./CountryTableBody";
import CountryTableHead from "./CountryTableHead";

function CountryTable({countries}) {
  return (
    <Table striped bordered hover>
      <CountryTableHead />
      <CountryTableBody countries={countries} />
    </Table>
  );
}
export default memo(CountryTable);
