import React from "react";
import Menu from "./Layout/Menu";
import MenuItem from "./Layout/MenuItem";
import Navegation from "./Layout/Navegation";

function Navbar({ data }) {
  return (
    <Navegation>
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

export default Navbar;
