import { useEffect, useState } from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

function Input({ leftIcon, rightIcon, ...props }) {
  const [stateInput, setStateInput] = useState(false);

  useEffect(() => {
    if (props.value === "") {
      setStateInput(false);
    }
  }, [props.value]);

  const state = { stateInput: props.stateInput || stateInput };
  if (props.type === "textarea") {
    return (
      <S.Textarea
        {...state}
        {...props}
        rows="4"
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

  return (
    <S.InputContainer {...state}>
      {leftIcon}
      <S.Input
        {...props}
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
      {rightIcon}
    </S.InputContainer>
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
