import { createContext, useState } from "react";


export const CartContexts = createContext();

export const CartProvider = (props) => {

    const [cartIsOpen, setCartIsOpen] = useState(false);


    return(


        <CartContexts.Provider value={{cartIsOpen, setCartIsOpen}}>
            {props.children}
        </CartContexts.Provider>

    )
}