import styled from 'styled-components'
import Items from '../Header/items'

const HeaderContainer = styled.header `

    display: flex;
    width: 100%;
    height: auto;
    background-color: #090453f8;
    justify-content: center;

`

const Ul = styled.ul `


    display: flex;
    list-style: none;
    padding: 1rem;


    .link {

        text-decoration: none;
    }

`


export default function Header () {


    return(

        <HeaderContainer>

            <Ul>

            <Items url='/' text='home' />
            <Items url='/mouses' text='mouses' />
            <Items url='/keyboards' text='keyboards' />
            <Items url='/headphones' text='headphones' />
            <Items url='/mousepads' text='mouse pads' />
            </Ul>
            
        </HeaderContainer>
    )
}