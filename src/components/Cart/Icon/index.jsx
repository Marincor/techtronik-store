import styled from "styled-components"
import CartIcon from '../../../assets/img/cart.svg'
import { Icons } from "../../../assets/UI"

const BaskBox = styled.button `

    width: 5rem;
    height: 1rem;
    margin: 1rem;
    cursor: pointer;
    border: none;
    background: transparent;
    color: ${(props) => props.color};
    font-weight: bold;
    

`



export default function Cart (props) {



    return(

        <BaskBox onClick={props.onClick} color={props.items > 0? 'green': 'black'} >
            <Icons secundary src={CartIcon}/>
            {props.items}
        </BaskBox>
    )
}