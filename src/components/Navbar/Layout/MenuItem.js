import { Link } from "../styles";

function MenuItem({ children, ...props }) {
  return (
    <Link {...props} {...props}>
      {children}
    </Link>
  );
}

export default MenuItem;
