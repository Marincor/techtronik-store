import { createContext, useState } from "react";


export const LoadingContext = createContext();

LoadingContext.displayName  = "Loading"

export const LoadingProvider = (props) => {

    const [loading, setLoading] = useState(false);


    return(


        <LoadingContext.Provider value={{loading, setLoading}}>
            {props.children}
        </LoadingContext.Provider>

    )
}