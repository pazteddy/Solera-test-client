import { Nav } from "../styles";

function Navegation({ children, ...props }) {
  return <Nav {...props}>{children}</Nav>;
}

export default Navegation;
