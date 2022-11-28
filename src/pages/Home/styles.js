import styled from "@emotion/styled";

export const Title = styled.h1`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
`;

export const Content = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;
