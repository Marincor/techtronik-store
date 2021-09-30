import styled from "styled-components";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { BannerProducts } from "../products/banner";
import { ButtonAddCard, ImgBox, PriceBox, TitleBox } from "../../assets/UI";
import { useContext, useState } from "react";
import Lottie from "react-lottie";
import LoadingAnimation from "../../assets/lotties/loading.json";
import CartModal from "../Cart/Modal";
import Cart from "../Cart/Icon/index";
import { ItemsContexts } from "../../contexts/items";
import ItemModels from "../../models/itemsModels";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 87.2vh;
`;

const BoxCard = styled.div`
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxLoading = styled(BoxCard)`
  width: 100vw;
  height: 100vh;
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Home() {
  const [loading, setLoading] = useState(false);
  const {includedItems, setIncludedItems} = useContext(ItemsContexts)
  const [cartIsOpen, setCartIsOpen] = useState(false)

  function addToCart(e) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    /// get items information //
    const currentNameItem =
      e.target.parentElement.parentElement.firstChild.firstChild.textContent;
    const currentPriceItem =
      e.target.parentElement.parentElement.firstChild.firstChild.nextSibling
        .textContent;
    const CurrentPriceItemFormated = JSON.parse(
      currentPriceItem.replace("$", "")
    );
    const currentImage =
      e.target.parentElement.parentElement.firstChild.firstChild.nextSibling
        .nextSibling.src;


  

    const currentItem = new ItemModels(currentNameItem, CurrentPriceItemFormated, currentImage);

    const arr = includedItems || [];


    let currentArr = arr.find(atribute => atribute._name === currentNameItem) || null;

      if(arr.length === 0) {

        arr.push(currentItem)
          setIncludedItems(arr)

  

      }
      else if( arr.length > 0 && currentArr !== null) {

        currentArr._amount += 1;
    

        setIncludedItems(arr)
    
      
      } else {

           
        arr.push(currentItem)
        setIncludedItems(arr)
      }

  
  }


  function renderContent() {
    if (loading) {
      return (
        <BoxLoading>
          loading your order !
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </BoxLoading>
      );
    } else {

      return(
        <Carousel
        plugins={[
          "infinite",
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
        ]}
        animationSpeed={1000}
      >
        {BannerProducts.map((item) => {
          return (
            <BoxCard key={item.id} id={item.id}>
              <>
                <TitleBox>{item.name}</TitleBox>
                <PriceBox>${item.price}</PriceBox>
              </>  
              <>
                <ImgBox src={item.img} alt={item.name} />
                <ButtonAddCard onClick={addToCart}>
                  + add to cart
                </ButtonAddCard>
              </>
            </BoxCard>
          );
        })}
      </Carousel>
      )
     
    }
  }



  function openCart() {

    cartIsOpen?  setCartIsOpen(false) :  setCartIsOpen(true)

  }


function amountCount() {
  let currentAmountOfItems= 0;

  includedItems.forEach((item) =>{
 
    currentAmountOfItems+= item.amount;
 
  })
 
  return currentAmountOfItems


}

 


  

  return (
    <Div>
      <Cart items={amountCount()} onClick={openCart} />
      {renderContent()}
      {
        cartIsOpen?  <CartModal setCart={setCartIsOpen} items={includedItems} setItems={setIncludedItems} /> : false
      }
     
    </Div>
  );
}
