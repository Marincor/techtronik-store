import Lottie from "react-lottie";
import { useHistory } from "react-router";
import { useContext } from "react/cjs/react.development";
import animationCartEmpty from "../../../assets/lotties/empty-cart.json";
import { Btn } from "../../../assets/UI";
import { ItemsContexts } from "../../../contexts/items";
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
  const { includedItems, setIncludedItems } = useContext(ItemsContexts);


  function deleteItem(id) {
    // find items the current item to delete //

    const currentItem = includedItems.find((item) => item._id === id);

    if (currentItem._amount > 1) {
      includedItems.find((item) => item._id === id).decreaseAmount();
    } else {
      setIncludedItems(includedItems.filter((item) => item._id !== id));
    }
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
                <Btn
                  onClick={() => {
                    deleteItem(item._id);
                  }}
                >
                  {" "}
                  🗑 Delete
                </Btn>
              </ModalItems>
            );
          })}
          <Btn
            onClick={(e) => {
              e.preventDefault();
              setCart(false);
              history.push("/cart");
            }}
          >
            {" "}
            🛒 go to the cart
          </Btn>
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
