import styled from "styled-components"
import CartIcon from '../../../assets/img/cart.svg'
import { Icons } from "../../../assets/UI"

const BaskBox = styled.div `

    width: 5rem;
    height: 1rem;
    margin: 1rem;
    cursor: pointer;

`



export default function CartModal (props) {



    return(

        <BaskBox>
            <Icons secundary src={CartIcon}/>
            {props.items}
        </BaskBox>
    )
}