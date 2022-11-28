import { useState } from "react";
import Menu from "./Layout/Menu";
import MenuItem from "./Layout/MenuItem";
import Navegation from "./Layout/Navegation";
import PropTypes from "prop-types";
import { colors } from "../../assets/colors";
import { Icon, Logo } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({ data, logo, ...props }) {
  const [open, setOpen] = useState(false);

  const state = { open: open, setOpen: setOpen };

  return (
    <Navegation {...props} {...state}>
      <Logo {...state}>{logo && <img src={logo} alt="Solera-logo" />}</Logo>
      <Menu {...state}>
        {data.map((item, i) => {
          return (
            <MenuItem key={i} to={item.to} onClick={() => setOpen(false)}>
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
      <Icon
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </Icon>
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
