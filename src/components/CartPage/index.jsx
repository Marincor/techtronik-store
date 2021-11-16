import { useContext } from "react";
import { useHistory } from "react-router";
import { ItemsContexts } from "../../contexts/items";

import {
  Box,
  BoxCard,
  BoxPayment,
  Btn,
  ImgBox,
  Text,
  TitleBox,
} from "./styles";

export default function CartPage() {
  const { includedItems, setIncludedItems } = useContext(ItemsContexts);

  const history = useHistory();

  function deleteItem(id) {
    const currentItem = includedItems.find((item) => item._id === id);

    console.log(currentItem);
    if (currentItem._amount > 1) {
      includedItems.find((item) => item._id === id).decreaseAmount();
    } else {
      setIncludedItems(includedItems.filter((item) => item._id !== id));
    }

    history.push("/");

    setTimeout(() => {
      history.push("/cart");
    }, 10);
  }

  const result = () => {
    let amount = 0;
    let total = 0;

    includedItems.forEach((item) => {
      amount += item._amount;
      total += item._amount * item._price;
    });

    return {
      amount,
      total,
    };
  };

  console.log(result().amount);
  return (
    <Box>
      {includedItems.map((item) => (
        <BoxCard key={item._id}>
          <TitleBox>{item._name}</TitleBox>
          <Text> $ {item._price}</Text>
          <ImgBox src={item._img} alt="" />
          <Text>Amout: {item._amount}</Text>
          <Btn
            onClick={(e) => {
              e.preventDefault();
              deleteItem(item._id);
            }}
          >
            {" "}
            🗑 Delete
          </Btn>
        </BoxCard>
      ))}
      <BoxPayment>
        <Text>Amount: {result().amount} </Text>
        <Text>Total: $ {result().total}</Text>

        <Btn>Pay 💳</Btn>
      </BoxPayment>
    </Box>
  );
}
