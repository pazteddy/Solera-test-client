import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors } from "../../assets/colors";

export const Nav = styled.nav`
  ${({ backgroundColor }) => ` background-color: ${backgroundColor};`}
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  gap: 3rem;
`;

export const Logo = styled.div`
  height: 40px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1em;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  position: relative;
  color: ${colors.gray};
  text-transform: capitalize;
  &::after {
    content: "";
    left: 0;
    bottom: -0.25rem;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background-color: ${colors.secondary};
  }

  &.active {
    font-weight: 500;
  }

  &.active,
  &:hover {
    color: ${colors.secondary};
  }
  &.active::after {
    position: absolute;
  }
`;
