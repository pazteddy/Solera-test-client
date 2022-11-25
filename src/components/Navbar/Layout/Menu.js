import { Ul } from "../styles";

function Menu({ children, ...props }) {
  return <Ul {...props}>{children}</Ul>;
}

export default Menu;
