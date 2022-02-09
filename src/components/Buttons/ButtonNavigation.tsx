import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonNavigationType } from "../../types";

function ButtonNavigation({
  linkToPath,
  classToApply,
  buttonText,
}: ButtonNavigationType) {
  let navigate = useNavigate();

  return (
    <button className={classToApply} onClick={() => navigate(linkToPath)}>
      {buttonText}
    </button>
  );
}

export default memo(ButtonNavigation);
