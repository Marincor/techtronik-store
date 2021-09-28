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

`



export default function Cart (props) {



    return(

        <BaskBox onClick={props.onClick} >
            <Icons secundary src={CartIcon}/>
            {props.items}
        </BaskBox>
    )
}