import styled from "@emotion/styled";

export const Wrapper = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
