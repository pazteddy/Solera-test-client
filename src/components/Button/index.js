import React from "react";

import PropTypes from "prop-types";
import * as S from "./styles";

function Button({ label, ...props }) {
  return <S.Button {...props}>{label}</S.Button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: "#000",
  label: "Label",
};

export default Button;
