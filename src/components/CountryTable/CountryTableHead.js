import { memo } from 'react';

function CountryTableHead() {
  return (
    <thead>
      <tr>
        <th>Flag</th>
        <th>Name</th>
        <th>Population</th>
        <th>Language</th>
        <th>Region</th>
      </tr>
    </thead>
  )
}

export default memo(CountryTableHead);
