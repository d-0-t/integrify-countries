import PropTypes from "prop-types";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

function ButtonNavigation({
  linkToPath,
  classToApply,
  buttonText,
  isItDisabled,
}) {
  let navigate = useNavigate();
  
  return (
    <button
      className={classToApply}
      onClick={() => navigate(linkToPath)}
      disabled={isItDisabled}
    >
      {buttonText}
    </button>
  );
}

ButtonNavigation.propTypes = {
  linkToPath: PropTypes.string.isRequired,
  classToApply: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isItDisabled: PropTypes.bool
};

export default memo(ButtonNavigation);
