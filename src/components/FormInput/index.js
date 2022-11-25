import Input from "../Input";
import PropTypes from "prop-types";

import * as S from "./styles";
import InputSelect from "../InputSelect";

function FormInput({ label, ...props }) {
  const { type, ...rest } = props;
  return (
    <S.Wrapper>
      <label htmlFor="">{label}</label>
      {type === "select" ? <InputSelect {...rest} /> : <Input {...props} />}
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
