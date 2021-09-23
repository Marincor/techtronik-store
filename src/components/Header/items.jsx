import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Li = styled.li `

        color: white;
        font-size: 1rem;
        font-family: 'Poppins';
        margin: 1rem;
        text-decoration: none;
        

`


export default function Items(props) {


    return(

    
        <Link className='link' to={props.url}>
            <Li >
                {props.text}
            </Li>
        </Link>
     

    )
}