import { css } from "@emotion/css";
import React, { useEffect, useRef, useState } from "react";
import Input from "../Input";

import * as S from "./styles";

import PropTypes from "prop-types";

import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function InputSelect({ options, width, onChange, value, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const [stateInput, setStateInput] = useState(false);

  const handleSelect = (option) => {
    setInputValue(option);
    setIsOpen(false);
    setStateInput(true);
  };
  const propWidth = { width: width };

  const ref = useRef();

  const target = { name: props.name, value: inputValue.toLowerCase() };
  useEffect(() => {
    onChange(target);
    // another way to get the value of input is to make a reference to the label and go down from child to input
    // onChange(ref.current.children[0].children[0]);
  }, [inputValue]);

  return (
    <S.SelectInput {...propWidth} ref={ref}>
      <Input
        disabled
        stateInput={stateInput}
        name={props.name}
        type="text"
        value={value}
        rightIcon={
          <S.Icon
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <BsChevronUp /> : <BsChevronDown />}
          </S.Icon>
        }
        {...props}
      />

      <S.NativeSelect className={isOpen ? "open" : ""}>
        {options.map((value, id) => (
          <S.Option
            key={id}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(value);
            }}
          >
            {value}
          </S.Option>
        ))}
      </S.NativeSelect>
    </S.SelectInput>
  );
}

InputSelect.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  width: PropTypes.string,
};

InputSelect.defaultProps = {
  placeholder: "Select",
  options: [],
  onChange: () => {},
  width: "fit-content",
};

export default InputSelect;
