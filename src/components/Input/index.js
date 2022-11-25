import { useState } from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

function Input(props) {
  const [stateInput, setStateInput] = useState(false);

  const state = { ...props, stateInput: stateInput };

  return (
    <S.Input
      {...state}
      onBlur={(e) => {
        if (e.target.value !== "") {
          setStateInput(true);
        } else {
          setStateInput(false);
        }
      }}
      onFocus={() => {
        setStateInput(true);
      }}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "Placeholder",
};

export default Input;
