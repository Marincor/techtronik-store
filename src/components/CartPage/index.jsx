import { useContext } from "react";
import { useHistory } from "react-router";
import { ItemsContexts } from "../../contexts/items";
import getCurrentItems from "../../functions/cartPage/getCurrentItems";
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
    const currentItemById = JSON.parse(id);

    // find items the current item to delete //
    getCurrentItems(includedItems, currentItemById, setIncludedItems);

    history.push("/");
    setTimeout(() => {
      history.push("/cart");
    }, -1);
  }

  let amounts = null;
  let total = null;

  if (includedItems.length > 0) {
    amounts = includedItems.reduce((accumulator, currentValue) => {
      return JSON.parse(accumulator + currentValue._amount);
    }, 0);
  } else {
    console.log('empty amount');
  }

  if (includedItems.length > 0) {
    total = includedItems.map((item) => {
      return (item._total = item._amount * item._price);
    });

    total = includedItems.reduce((accumulator, currentValue) => {
      return JSON.parse(accumulator + currentValue._total);
    }, 0);
  } else {

    console.log('empt total')
  }



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
        <Text>Amount: {amounts}</Text>
        <Text>Total: $ {total}</Text>

        <Btn>Pay 💳</Btn>
      </BoxPayment>
    </Box>
  );
}
