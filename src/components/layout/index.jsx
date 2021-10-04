import { useContext } from "react";
import { Btn, ImgBox } from "../../assets/UI";
import { CartContexts } from "../../contexts/cart";
import { ItemsContexts } from "../../contexts/items";
import { LoadingContext } from "../../contexts/loading";
import amountCount from "../../functions/homePage/amountCount"
import getItemInfo from "../../functions/homePage/getItemsInfo";
import openCart from "../../functions/homePage/openCart";
import ItemModels from "../../models/itemsModels";
import Cart from "../Cart/Icon"
import CartModal from "../Cart/Modal";
import { BoxCard, PriceBox, TitleBox } from "../HomePage/styles";

export default function Layout(props) {
    const { includedItems, setIncludedItems } = useContext(ItemsContexts);
    const { loading, setLoading } = useContext(LoadingContext);
    const { cartIsOpen, setCartIsOpen } = useContext(CartContexts);

    function addToCart(e) {
      e.preventDefault();
  
      setLoading(true);
  
      setTimeout(() => {
        setLoading(false);
      }, 1000);
  
      /// get items information //
  
      getItemInfo(e, ItemModels, includedItems, setIncludedItems);
      console.log(e)
    }
    return(
<> 
<Cart items={amountCount(includedItems)} onClick={()=>{openCart(cartIsOpen, setCartIsOpen)}} />
    
      {cartIsOpen ? (
        <CartModal
          setCart={setCartIsOpen}
          items={includedItems}
          setItems={setIncludedItems}
        />
      ) : (
        false
      )}
      {props.itemsToShow.map((item) =>{


return(
  <BoxCard key={item.id} id={item.id}>
  <>
    <TitleBox>{item.name}</TitleBox>
    <PriceBox>${item.price}</PriceBox>
  </>
  <>
    <ImgBox src={item.img} alt={item.name} />
    <Btn onClick={addToCart}>+ add to cart</Btn>
  </>
</BoxCard>

)
      })}
       
</>

    )
}