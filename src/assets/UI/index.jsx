import styled from "styled-components";

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

export const ImgBox = styled.img`
  width: 22rem;
  height: 18rem;
  margin-bottom: 2rem;
`;

export const ButtonAddCard = styled.button`
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  background-color: transparent;
  cursor: pointer;

`;

export const Icons = styled.img`
  width: ${(props) => props.secundary? '2rem': '1rem'};
`;
