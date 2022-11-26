import { keyframes } from "@emotion/css";
import styled from "@emotion/styled";
import { colors } from "../../assets/colors";
import {
  ContainerStyleButton,
  ContainerStyleCard,
  ContainerStyleContent,
} from "../../utils";

const rotate = function (deg) {
  return `
      transform: rotate(${deg}deg);
    `;
};

const animationRemove = keyframes`
    0% {
        ${rotate(0)}
    }
    100% {
        ${rotate(360)}
    }
`;

const animationEdit = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -20px, 0);
  }

  70% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const Wrapper = styled.div`
  ${ContainerStyleCard("300px")}

  ${(props) =>
    props.remove &&
    `animation: ${animationRemove} 1s ease infinite; z-index: -1;`}

  ${(props) =>
    props.edit && `animation: ${animationEdit} 1s linear; z-index: -1;`}
`;

export const Content = styled.div`
  ${ContainerStyleContent}
`;

export const Title = styled.h2``;

export const Description = styled.p``;

export const Actions = styled.div`
  ${ContainerStyleButton}
`;

export const Action = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${colors.secondary};
  font-weight: 600;
`;
