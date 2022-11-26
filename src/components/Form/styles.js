import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
import {
  ContainerStyleButton,
  ContainerStyleCard,
  ContainerStyleContent,
} from "../../utils";

export const Wrapper = styled.div`
  ${ContainerStyleCard("400px")}
`;
export const Form = styled.form`
  ${ContainerStyleContent}
`;

export const WrapperButtons = styled.div`
  ${ContainerStyleButton}
`;
