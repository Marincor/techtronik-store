import { useContext } from "react"
import styled from "styled-components"
import { ItemsContexts } from "../../../contexts/items"


const ModalCart = styled.div `
border-radius: 1rem;
display: flex;
flex-direction: column;
align-items: center;
width: 20vw;
height: 40vh;
overflow: scroll;
overflow-x: hidden;
border: 1px solid lightblue;
background-color: lightblue;
position: relative;
right: 68rem;
animation: slidein .5s;

@keyframes slidein {



    from {

        transform: translate3d(0px, -60px, 0px);
    }

    to {


        transform: translate3d(0px, 0px, 0px);
    }
}

`

const ModalItems = styled.div `

    margin: 1rem;
    background-color: white;
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;


`

const TitleItems = styled.h2 `

    margin: 1rem;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: bold;

`

const PriceItems = styled.p `

    font-size: 0.8rem;
    color: darkgray;
    font-weight: bold;
    margin: 1rem;

`
const ImgItems = styled.img `

    background-color: transparent;
    width: 8rem;
    height: 5rem;
`
const BtnDelete = styled.button `

margin: 1rem;
    border-radius: 1rem;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;

`

export default function CartModal (props) {

    console.log(props.items)
  
    return(

        <ModalCart>


            {props.items.map((item) => {

                return(

                    <ModalItems> 

            
             
                    <TitleItems> {item.name} </TitleItems>
                  
                    <PriceItems> {item.price? `$ ${item.price}`: ''}</PriceItems>
                    <ImgItems src={item.img}   />
                    <BtnDelete> 🗑 Delete</BtnDelete>
                    </ModalItems>
                )
            })}
         
        </ModalCart>
    )
}