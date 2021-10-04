import styled from "styled-components";

export const BaskBox = styled.button`

  width: 5rem;
  height: 1rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  background: transparent;
  font-weight: bold;
  display: flex;
`;

export const Count = styled.p`
  color: white;
  height: 1rem;
  background-color: ${(props)=> props.bg};
  padding: 0.1rem 0.3rem;
  border-radius: 2rem;
`;