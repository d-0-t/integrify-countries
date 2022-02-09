import { memo } from "react";
import PropTypes from "prop-types";

import { CountType } from "../types";

function Title({count}: CountType) {
  return <h1>Countries ({count})</h1>;
}

export default memo(Title);

Title.propTypes = {
  count: PropTypes.number.isRequired,
};
