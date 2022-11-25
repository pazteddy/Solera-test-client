import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors } from "../../assets/colors";

export const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: ${colors.backgroundSecondary};
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1em;
`;

export const Link = styled(NavLink)`
  position: relative;
  color: ${colors.gray};
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
