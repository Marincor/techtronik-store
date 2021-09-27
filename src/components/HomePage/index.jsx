import styled from 'styled-components'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { BannerProducts } from '../products/banner';
import Plus from '../../assets/img/plus.svg';
import { ButtonAddCard, IconAdd, ImgBox, PriceBox, TitleBox } from '../../assets/UI';

const Div = styled.div `

    display: flex;
    width: 100%;
    height: 87.2vh;



`

const BoxCard = styled.div `


    width: 50rem;
    height: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;


`



export default function Home() {




    return(

        <Div>
            <Carousel
    plugins={[
     'infinite',
    {
      resolve: autoplayPlugin,
      options: {
        interval: 2000,
      }
    },
  ]}   
  animationSpeed={1000}
>
{BannerProducts.map((item) =>{


    return(
        <BoxCard key={item.id} id={item.id}> 
            <> 

            <TitleBox>{item.name}</TitleBox>
            <PriceBox>${item.price}</PriceBox>
            </>
            <> 
            <ImgBox src={item.img} alt={item.name} />
            <ButtonAddCard>
                <IconAdd src={Plus} alt="" /> add to cart
                </ButtonAddCard>
            </>
        </BoxCard>
    )

})}

</Carousel>
        </Div>
    )

}