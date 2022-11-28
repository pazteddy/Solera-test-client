import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors } from "../../assets/colors";

export const Nav = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  ${({ backgroundColor }) => ` background-color: ${backgroundColor};`}
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    ${({ open }) => {
      if (open) {
        return `
        height: 100vh;
      `;
      }
    }}

    ${({ open }) => {
      if (open) {
        return `
        &::before {
          position: absolute;
          content: "Servicios";
          font-weight: bold;
          font-size: 1.5rem;
          color: ${colors.white};
        }

        &::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 2px;
          background-color: ${colors.white};
          margin-top: 47px;
        }
        `;
      }
    }}
  }
`;

export const Icon = styled.div`
  position: absolute;
  display: none;
  right: 1rem;

  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${colors.white};
  @media (max-width: 768px) {
    display: flex;
    margin-top: 0.5rem;
  }
`;

export const Logo = styled.div`
  height: 40px;

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
    top: 0;
    left: 0;
    text-align: center;
    ${({ open }) => {
      if (open) {
        return `
        width: 100%;
      display: flex;

      `;
      } else {
        return `
      display: none;
      `;
      }
    }}
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  position: relative;
  color: ${colors.gray};
  text-transform: capitalize;
  @media (min-width: 768px) {
    &::after {
      content: "";
      left: 0;
      bottom: -0.25rem;
      width: 100%;
      height: 2px;
      border-radius: 5px;
      background-color: ${colors.secondary};
    }
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
