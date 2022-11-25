import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
export const NativeSelect = styled.ul`
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 2.8rem;
  list-style: none;
  background: ${colors.white};
  margin-top: 4px;
  display: none;
  text-align: left;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  flex-direction: column;
  min-height: 50px;
  max-height: 100px;
  overflow-y: scroll;

  &::-webkit-scrollbar-thumb {
    background: ${colors.secondary};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.secondary};
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Cambiamos el fondo cuando esté en active */
  &::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }

  &.open {
    display: flex;
  }
`;

export const SelectInput = styled.label`
  position: relative;
  ${(props) => props.width && `width: ${props.width}`};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & label {
    text-transform: uppercase;
    color: ${colors.darkGray};
  }
`;

export const Option = styled.li`
  padding: 0.25rem 1rem;
  &:hover {
    background: #f5f5f5;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;
