import React, { Children, createContext, useState } from 'react';
import { useContext } from 'react';

const TicketWaveContext = createContext()


const AppProvider = ({Children}) =>{
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    
    const openSidebar =() =>{
        setIsSideBarOpen(true)
    }

    //  context value
    const contextValue= {
        isSideBarOpen, openSidebar,
    }

    return(
        <TicketWaveContext.Provider value={contextValue}>
           {Children}
        </TicketWaveContext.Provider>
    )
}


export const useGlobalContext = () =>{
    return useContext(TicketWaveContext)
    
}


export { AppProvider};