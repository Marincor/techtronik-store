import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 87.2vh;
`;

export const BoxCard = styled.div`
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxLoading = styled(BoxCard)`
  width: 100vw;
  height: 100vh;
`;

export const TitleBox = styled.h2`
  margin: 1rem;
  font-family: sans-serif;
  font-size: 2rem;
  color: black;
  font-weight: bold;
`;

export const PriceBox = styled.p`
  margin: 1rem;
  font-family: sans-serif;
  font-size: 1rem;
  color: darkgray;
  font-weight: bold;
`;