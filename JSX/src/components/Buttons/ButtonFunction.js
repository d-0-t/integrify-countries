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
    <button
      className={classToApply}
      onClick={clickFunction}
      disabled={isItDisabled}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  linkToPath: PropTypes.string.isRequired,
  classToApply: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isItDisabled: PropTypes.bool,
  clickFunction: PropTypes.func
};

export default memo(Button);