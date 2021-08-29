import React, {createContext, useContext, useState} from "react";

export const CountContext = createContext();


export default function CountProvider({ children }){
    const [count, setCount] = useState(0);

    return(
        //Provider esta enviado os valores count e setcount para o children
        //children- todos os componentes que absorverem o context
        <CountContext.Provider value={{count,setCount}}>
            {children}
        </CountContext.Provider>
    )
}

export function useCount(){
    const { count, setCount } = useContext(CountContext);
    return { count, setCount};
}