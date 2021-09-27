import styled from "styled-components";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { BannerProducts } from "../products/banner";
import Plus from "../../assets/img/plus.svg";
import {
  ButtonAddCard,
  Icons,
  ImgBox,
  PriceBox,
  TitleBox,
} from "../../assets/UI";
import CartModal from "../Cart/Icon";
import { useState } from "react";
import Lottie from 'react-lottie';
import LoadingAnimation from '../../assets/lotties/loading.json'

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

const BoxLoading = styled(BoxCard) `

  width: 100vw;
  height: 100vh;


`

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
export default function Home() {

  
    const [loading, setLoading] = useState(false)
    const [includedItems, setIncludedItems] = useState([])
    
    function increaseItems(e) {

        e.preventDefault()
       
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1000);

        /// get items information //
        const currentNameItem = e.target.parentElement.parentElement.firstChild.firstChild.textContent;
        const currentPriceItem = e.target.parentElement.parentElement.firstChild.firstChild.nextSibling.textContent;
        const CurrentPriceItemFormated = JSON.parse(currentPriceItem.replace('$', ''));
        const currentImage = e.target.parentElement.parentElement.firstChild.firstChild.nextSibling.nextSibling.src;

        const toTheBasketItems = {
          name: currentNameItem,
          price: CurrentPriceItemFormated,
          img: currentImage,
        };

        const arr = includedItems || [];

        arr.push(toTheBasketItems);

        setIncludedItems(arr);
      
    }

    
  return (

    
    <Div>
      <CartModal items={includedItems.length} />
  
        {loading? <BoxLoading>loading your order !


          <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
        </BoxLoading> : 
        
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
                <ButtonAddCard onClick={increaseItems}>
                  <Icons src={Plus} alt="add icon" /> add to cart
                </ButtonAddCard>
              </>
            </BoxCard>
          );
        })}
      </Carousel>
    }
  <div>
{console.log(includedItems)}
  {includedItems.map((i) =>{


    return(

      <h2>{i.name}</h2>
    )
  })}
  </div>

    </Div>
  );
}
