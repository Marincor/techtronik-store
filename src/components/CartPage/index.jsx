import { useContext } from "react";
import { ItemsContexts } from "../../contexts/items";
import { Box, BoxCard, BoxPayment, Btn, ImgBox, Text, TitleBox } from "./styles";

export default function CartPage() {
  const { includedItems } = useContext(ItemsContexts);


  return (
    <Box>
      {includedItems.map((item) => (
        <BoxCard>
          <TitleBox>{item._name}</TitleBox>
          <Text> $ {item._price}</Text>
          <ImgBox src={item._img} alt="" />
          <Text>Amout: {item._amount}</Text>
          <Btn> 🗑 Delete</Btn>
        </BoxCard>
      ))}
        <BoxPayment> 
            
        <Text> Total: 2000 </Text>
        <Btn>Pay 💳</Btn>
        </BoxPayment>
     
    </Box>
  );
}
