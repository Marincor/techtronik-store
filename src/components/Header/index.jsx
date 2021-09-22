import styled from 'styled-components'
import Items from '../Header/items'

const HeaderContainer = styled.header `

    display: flex;


`

export default function Header () {


    return(

        <HeaderContainer>
            <Items url='/mouses' text='Mouses' />

        </HeaderContainer>
    )
}