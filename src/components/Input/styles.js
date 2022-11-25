import styled from "@emotion/styled";
import { colors } from "../../assets/colors";

export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;

  border: 1px solid #ccc;

  border-radius: 5px;
  gap: 0.5rem;
  color: ${colors.secondary};
  ${({ stateInput }) =>
    stateInput &&
    `   border: 1px solid ${colors.secondary};
        outline: none;`}

  transition: all 0.5s ease-in-out;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  z-index: 2;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 5px;
  ${({ stateInput }) =>
    stateInput &&
    `   border: 1px solid ${colors.secondary};
    outline: none;`}
`;
