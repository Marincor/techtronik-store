import { createContext, useState } from "react";
import ItemModels from "../models/itemsModels";


export const ItemsContexts = createContext();

export const ItemsProvider = (props) => {

    const [includedItems, setIncludedItems] = useState([]);


    return(


        <ItemsContexts.Provider value={{includedItems, setIncludedItems}}>
            {props.children}
        </ItemsContexts.Provider>

    )
}