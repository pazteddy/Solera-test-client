import styled from "@emotion/styled";

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;

  ${({ color }) => {
    return `
    border: 1px solid ${color};
    color: ${color};

    &:hover {
        background-color: ${color};
        color: #fff;
    }
    `;
  }}
`;
