import { useEffect } from "react/cjs/react.development";
import CartIcon from "../../../assets/img/cart.svg";
import { Icons } from "../../../assets/UI";
import { BaskBox, Count } from "./styles";

export default function Cart(props) {




  return (
    <BaskBox onClick={props.onClick}>
      <Icons secundary src={CartIcon} />
      <Count bg={props.items > 0 ? "red" : "black"}>{props.items}</Count>
    </BaskBox>
  );
}
