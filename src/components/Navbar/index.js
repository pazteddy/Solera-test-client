import React from "react";
import Menu from "./Layout/Menu";
import MenuItem from "./Layout/MenuItem";
import Navegation from "./Layout/Navegation";
import PropTypes from "prop-types";
import { colors } from "../../assets/colors";
import { Logo } from "./styles";

function Navbar({ data, logo, ...props }) {
  return (
    <Navegation {...props}>
      <Logo>{logo && <img src={logo} alt="Solera-logo" />}</Logo>
      <Menu>
        {data.map((item, i) => {
          return (
            <MenuItem key={i} to={item.to}>
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Navegation>
  );
}

Navbar.propTypes = {
  data: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Navbar.defaultProps = {
  data: [],
  logo: "",
  backgroundColor: colors.backgroundTertiary,
};

export default Navbar;
