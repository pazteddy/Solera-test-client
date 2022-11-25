import Input from "../Input";
import PropTypes from "prop-types";

import * as S from "./styles";

function FormInput({ label, ...props }) {
  return (
    <S.Wrapper>
      <label htmlFor="">{label}</label>
      <Input {...props} />
    </S.Wrapper>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  label: "Label",
};

export default FormInput;
