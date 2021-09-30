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

const AmountItems = styled.p `

    font-size: 0.8rem;
    color: darkgreen;
    font-weight: bold;
    margin: 1rem;
    background-color: #dbe2da;
    padding: 1rem;
    border-radius: 2rem;
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

const EmptyCartAlert = styled.p `

    margin: 50% auto;
    font-size: 1rem;
    font-weight: bold;
    font-family: sans-serif;

`
export default function CartModal (props) {

    
    function deleteItem(e) {
        const currentItemById = JSON.parse( e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.id);
  
        const  arr = props.items || [];

        const findItem = arr.find(atribute => atribute._id === currentItemById)

        function removerPorId(array, id) {
            return array.filter(function(el) { 
              return el._id !== id; 
            });
          }

       if(findItem._amount >1) {


            findItem._amount -= 1;

            props.setItems(arr)

            props.setCart(false)

            setTimeout(() => {
                props.setCart(true)
            }, 1);

       } else {

        

        props.setItems(removerPorId(arr, currentItemById))

       }
       
      
    }

  
    return(

        <ModalCart>


            {props.items.length > 0? 
            
        
            props.items.map((item) => {

                return(

                  

                    <ModalItems key={item._id}> 

            
             
                    <TitleItems id={item._id}> {item.name} </TitleItems>
                    <AmountItems> {item._amount} </AmountItems>
                    <PriceItems> {item.price? `$ ${item.price}`: ''}</PriceItems>
                    <ImgItems src={item.img}   />
                    <BtnDelete onClick={deleteItem}> 🗑 Delete</BtnDelete>
                    </ModalItems>
                )
            })
        : <EmptyCartAlert>Empty !</EmptyCartAlert>}
           
         
        </ModalCart>
    )
}