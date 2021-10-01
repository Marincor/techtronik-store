import { createContext, useState } from "react";


export const ItemsContexts = createContext();

export const ItemsProvider = (props) => {

    const [includedItems, setIncludedItems] = useState([]);


    return(


        <ItemsContexts.Provider value={{includedItems, setIncludedItems}}>
            {props.children}
        </ItemsContexts.Provider>

    )
}