// GlobalContextProvider.tsx

'use client'
import React from 'react';


interface GlobalProviderProps {
    children ?: React.ReactNode
}

interface GlobalContextProps{
    sayHello : () => any;
}


const GlobalContext = React.createContext<GlobalContextProps | null>(null);

export const useGlobalContext = () => {
    const state = React.useContext(GlobalContext);
    if(!state) throw new Error('State Is Undefined');

    return state;
}


export const GlobalContextProvider : React.FC<GlobalProviderProps> = ({children}) => {
    const sayHello : GlobalContextProps['sayHello'] = React.useCallback(()=>{
        console.log('Context API Working ?');
    },[])
    return(
        <GlobalContext.Provider value={{sayHello}}>{children}</GlobalContext.Provider>
    )
}