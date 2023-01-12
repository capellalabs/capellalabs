import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  background-color: #6244ec;
  position: relative;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex: row;
  position: absolute;
  bottom: 2rem;
  background-color: none;
`;

export const IconContainerWithHover = styled.div`
  &:hover {
    opacity: 0.8;
  }
`;
