import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  width: 100vw;
  height: auto;
  overflow: hidden;
  position: absolute;
flex-wrap: wrapinitial;

`;

export const BoxCard = styled.div`
  width: 50rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxLoading = styled(BoxCard)`
  width: -20rem;

  @media screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const TitleBox = styled.h2`
  margin-top: 1rem;
  font-family: sans-serif;
  font-size: 1rem;
  color: black;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    margin: 1rem;
    font-family: sans-serif;
    font-size: 2rem;
    color: black;
    font-weight: bold;
  }
`;

export const PriceBox = styled.p`
  margin: 1rem;
  font-family: sans-serif;
  font-size: 1rem;
  color: darkgray;
  font-weight: bold;
`;
