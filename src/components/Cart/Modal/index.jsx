import Lottie from "react-lottie";
import { useHistory } from "react-router";
import animationCartEmpty from "../../../assets/lotties/empty-cart.json";
import { Btn } from "../../../assets/UI";
import getCurrentItems from "../../../functions/modalCart/getCurrentItems";
import {
  AmountItems,
  BoxLottie,
  EmptyCartAlert,
  ImgItems,
  ModalCart,
  ModalItems,
  PriceItems,
  TitleItems,
} from "./styles";

// lottie config //

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationCartEmpty,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function CartModal({ items, setItems, setCart }) {
  function deleteItem(e) {
    const currentItemById = JSON.parse(
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.id
    );

    // find items the current item to delete //
    getCurrentItems(items, currentItemById, setItems, setCart);
  }

  const history = useHistory();



  return (

      <ModalCart> 

      {items.length > 0 ? (
        <>
          {items.map((item) => {
            return (
              <ModalItems key={item._id}>
                <TitleItems id={item._id}> {item.name} </TitleItems>
                <AmountItems> {item._amount} </AmountItems>
                <PriceItems> {item.price ? `$ ${item.price}` : ""}</PriceItems>
                <ImgItems src={item.img} />
                <Btn onClick={deleteItem}> 🗑 Delete</Btn>
              </ModalItems>
            );
          })}
          <Btn onClick={(e)=>{ e.preventDefault(); history.push("/cart")}}> 🛒 go to the cart</Btn>
        </>
      ) : (
        <BoxLottie>
          <Lottie options={defaultOptions} height={100} width={100} />
          <EmptyCartAlert>Empty !</EmptyCartAlert>
        </BoxLottie>
      )}
      </ModalCart>
  
  );
}
