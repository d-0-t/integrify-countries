import { memo } from "react";
import { ButtonFunctionType } from "../../types";

function ButtonFunction({
  classToApply,
  buttonText,
  isItDisabled,
  clickFunction,
}: ButtonFunctionType) {

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

export default memo(ButtonFunction);