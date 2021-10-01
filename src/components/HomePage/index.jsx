import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { BannerProducts } from "../products";
import { Btn, ImgBox } from "../../assets/UI";
import { useContext, useState } from "react";
import Lottie from "react-lottie";
import LoadingAnimation from "../../assets/lotties/loading.json";
import CartModal from "../Cart/Modal";
import Cart from "../Cart/Icon/index";
import { ItemsContexts } from "../../contexts/items";
import ItemModels from "../../models/itemsModels";
import { BoxCard, BoxLoading, Div, PriceBox, TitleBox } from "./styles";
import getItemInfo from "../../functions/homePage/getItemsInfo";
import openCart from "../../functions/homePage/openCart";
import amountCount from "../../functions/homePage/amountCount";

// lottie config //
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
  const { includedItems, setIncludedItems } = useContext(ItemsContexts);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function addToCart(e) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    /// get items information //

    getItemInfo(e, ItemModels, includedItems, setIncludedItems);
  }

  function renderContent() {
    if (loading || cartIsOpen) {
      return (
        <BoxLoading>
          <div>
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </BoxLoading>
      );
    } else {
      return (
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
                  <Btn onClick={addToCart}>+ add to cart</Btn>
                </>
              </BoxCard>
            );
          })}
        </Carousel>
      );
    }
  }




  return (
    <Div>
      <Cart items={amountCount(includedItems)} onClick={()=>{openCart(cartIsOpen, setCartIsOpen)}} />
      {renderContent()}
      {cartIsOpen ? (
        <CartModal
          setCart={setCartIsOpen}
          items={includedItems}
          setItems={setIncludedItems}
        />
      ) : (
        false
      )}
    </Div>
  );
}
