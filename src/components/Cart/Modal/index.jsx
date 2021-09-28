import styled from "styled-components"


const ModalCart = styled.div `

display: flex;
flex-direction: column;
align-items: center;
width: 20vw;
height: 40vh;
border: 1px solid lightblue;
background-color: blue;
position: relative;
right: 68rem;
animation: slidein .10s infinite;

@keyframes slidein {



    from {

        transform: translate3d(0px, 0px, -60px);
    }

    to {


        transform: translate3d(0px, 0px, 0px);
    }
}

`

const ModalItems = styled.div `

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
            <ModalItems> 

             

          
            <PriceItems> {props.price? `$ ${props.price}`: ''}</PriceItems>
            <ImgItems src={props.img}   />
            <BtnDelete onClick={props.func}> 🗑 Delete</BtnDelete>
            </ModalItems>
        </ModalCart>
    )
}