import { Link } from 'react-router-dom'




export default function Items(props) {


    return(

    
        <Link to={props.url}>
            <li >
                {props.text}
            </li>
        </Link>
     

    )
}