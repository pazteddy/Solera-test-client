import styled from "@emotion/styled";
import {
  ContainerStyleButton,
  ContainerStyleCard,
  ContainerStyleContent,
} from "../../utilsStyles";

export const Wrapper = styled.div`
  ${ContainerStyleCard("350px")}
  @media (max-width: 768px) {
    order: -1;
  }
`;
export const Form = styled.form`
  ${ContainerStyleContent}
`;

export const WrapperButtons = styled.div`
  ${ContainerStyleButton}
`;
