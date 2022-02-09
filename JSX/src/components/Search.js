import { memo } from 'react';
import PropTypes from 'prop-types';

function Search({ keyword, handleChange }) {
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

Search.propTypes = {
  keyword: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default memo(Search);
