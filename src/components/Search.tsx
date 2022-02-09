import { memo } from 'react';
import { SearchProp } from "../types"

function Search({ keyword, handleChange }: SearchProp) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search for a country..."
      value={keyword}
      onChange={handleChange}
    />
  );
}

export default memo(Search);
