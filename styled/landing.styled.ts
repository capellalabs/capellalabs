import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  background-color: #6244ec;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex: row;
`;

export const IconContainerWithHover = styled.div`
  &:hover {
    opacity: 0.8;
  }
`;
