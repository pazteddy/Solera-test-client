import { useState } from "react";
import * as S from "./styles";

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

export default Input;
