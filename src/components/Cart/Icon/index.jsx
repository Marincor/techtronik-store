import styled from "styled-components";
import CartIcon from "../../../assets/img/cart.svg";
import { Icons } from "../../../assets/UI";

const BaskBox = styled.button`
  width: 5rem;
  height: 1rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  background: transparent;
  font-weight: bold;
  display: flex;
`;

const Count = styled.p`
  color: white;
  height: 1rem;
  background-color: ${(props)=> props.bg};
  padding: 0.1rem 0.3rem;
  border-radius: 2rem;
`;

export default function Cart(props) {
  return (
    <BaskBox
      onClick={props.onClick}
      
    >
      <Icons secundary src={CartIcon} />
      <Count bg={props.items > 0 ? "red" : "black"}>{props.items}</Count>
    </BaskBox>
  );
}
