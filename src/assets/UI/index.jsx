import styled from "styled-components";



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

export const Icons = styled.img`
  width: ${(props) => props.secundary? '2rem': '1rem'};
`;
