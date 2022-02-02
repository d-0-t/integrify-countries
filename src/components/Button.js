import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({linkToPath, classToApply}) {
  return (
    <Link to={linkToPath} className={classToApply}>
      ˂˂ Go back
    </Link>
  )
}

Button.propTypes = {
  linkToPath: PropTypes.string.isRequired,
  classToApply: PropTypes.string.isRequired
}
