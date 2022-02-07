import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

function Button({
  linkToPath,
  classToApply,
  buttonText,
  isItDisabled,
  clickFunction,
}) {
  return (
    <Link to={linkToPath}>
      <button
        className={classToApply}
        onClick={clickFunction}
        disabled={isItDisabled}
      >
        {buttonText}
      </button>
    </Link>
  );
}

Button.propTypes = {
  linkToPath: PropTypes.string.isRequired,
  classToApply: PropTypes.string.isRequired,
};

export default memo(Button);