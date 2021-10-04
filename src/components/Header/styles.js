import styled from 'styled-components'

export const HeaderContainer = styled.header `

display: flex;
width: 100vw;
height: auto;
background-color: #090453f8;
justify-content: center;




`

export const Ul = styled.ul `


display: none;
justify-content: center;
align-items: center;
list-style: none;
padding: 1rem;
width: 1rem;


.link {

    text-decoration: none;
}

.link :hover {

    text-decoration: underline;
    color: black;
    font-weight: bold;
    background-color: white;
}

@media screen and (min-width: 768px) {

    display: flex;
}

`

export const UlMob = styled.ul `


   width: 1rem;
   display: flex;
   justify-content: center;
   
.link {

text-decoration: none;
}

@media screen and (min-width: 768px) {

    display: none;
}

`