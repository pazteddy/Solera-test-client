import styled from "@emotion/styled";
import { colors } from "../assets/colors";
import { fonts } from "../assets/typography";

export const Wrapper = styled.div`
  ul,
  ol {
    padding: 0;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  *::-webkit-scrollbar {
    width: 0.3rem;
  }
  box-sizing: border-box;

  * {
    font-family: ${fonts.primary};
    color: ${colors.primary};

    box-sizing: border-box;
  }
`;
