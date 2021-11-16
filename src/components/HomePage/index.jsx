import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Products } from "../products";
import { Btn, ImgBox } from "../../assets/UI";
import { useContext } from "react";
import Lottie from "react-lottie";
import LoadingAnimation from "../../assets/lotties/loading.json";
import CartModal from "../Cart/Modal";
import Cart from "../Cart/Icon/index";
import { ItemsContexts } from "../../contexts/items";
import ItemModels from "../../models/itemsModels";
import { BoxCard, BoxLoading, Div, PriceBox, TitleBox } from "./styles";
import openCart from "../../functions/homePage/openCart";
import amountCount from "../../functions/homePage/amountCount";
import { LoadingContext } from "../../contexts/loading";
import { CartContexts } from "../../contexts/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const { loading, setLoading } = useContext(LoadingContext);
  const { includedItems, setIncludedItems } = useContext(ItemsContexts);
  const { cartIsOpen, setCartIsOpen } = useContext(CartContexts);
  const notify = () => toast.success("Item included to cart!");

  function addToCart(e, name, price, img, id) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    // creating new object for the currentItem //

    const newItem = new ItemModels(name, price, img, id);

    const arr = includedItems || [];

    // searching if the current item is already at the cart //

    const searchCurrentItem = arr.find((item) => item._id === id);

    if (searchCurrentItem) {
      searchCurrentItem.increaseAmount();
    } else {
      arr.push(newItem);
      setIncludedItems(arr);
    }
  }

  console.log(includedItems);
  function renderContent() {
    if (loading) {
      return (
        <BoxLoading>
          <div>
            <Lottie options={defaultOptions} height={200} width={200} />
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
          {Products.Keyboards.map((item) => {
            return (
              <BoxCard key={item.id} id={item.id}>
                <>
                  <TitleBox>{item.name}</TitleBox>
                  <PriceBox>${item.price}</PriceBox>
                </>
                <>
                  <ImgBox src={item.img} alt={item.name} />
                  <Btn
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(e, item.name, item.price, item.img, item.id);
                      notify();
                    }}
                  >
                    + add to cart
                  </Btn>
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
      {renderContent()}
      <Cart
        items={amountCount(includedItems)}
        onClick={() => {
          openCart(cartIsOpen, setCartIsOpen);
        }}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
