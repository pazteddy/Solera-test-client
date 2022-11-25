import styled from "@emotion/styled";
import { colors } from "../../assets/colors";

export const Input = styled.input`
  padding: 0 10px;
  border: 1px solid #ccc;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  ${({ stateInput }) =>
    stateInput &&
    `   border: 1px solid ${colors.secondary};
        outline: none;`}
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
