import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
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

export const Text = styled.p`
  margin: 1rem;
  font-family: sans-serif;
  font-size: 1rem;
  color: darkgray;
  font-weight: bold;
`;

export const ImgBox = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    width: 22rem;
    height: 18rem;
    margin-bottom: 2rem;
  }
`;

export const Btn = styled.button`
  margin: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: transparent;
  cursor: pointer;
`;

export const BoxPayment = styled(BoxCard)`
  border: 1px solid black;
`;
