import { Link } from "../styles";

function MenuItem({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
}

export default MenuItem;
