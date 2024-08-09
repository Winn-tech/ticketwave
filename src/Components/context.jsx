import React, { createContext, useState, useContext } from 'react';

import NavLink from '../navData'

const TicketWaveContext = createContext();

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuLocation, setSubMenuLocation] = useState({})
  const [subMenuPages, setSubMenuPage] = useState({page:{label:''}, subPages:[] })


  const openSidebar = () => {
    setIsSideBarOpen(true);
    console.log('clicked')
  };

  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };

  const openSubMenu =(page, coordinate)=>{
    setSubMenuLocation(coordinate);
    setIsSubMenuOpen(true)
    const newPage = NavLink.find((targetPage)=>targetPage.page.label === page)
    setSubMenuPage(newPage)
    // console.log(newPage);
    

  }

  const closeSubMenu =()=>{
    setIsSubMenuOpen(false)
  }

//   contextValue
  const contextValue = {
    isSideBarOpen,
    openSidebar,
    closeSidebar,
    isSubMenuOpen,
    openSubMenu,
    closeSubMenu,
    subMenuLocation,
    subMenuPages
    
  };

  return (
    <TicketWaveContext.Provider value={contextValue}>
      {children} 
    </TicketWaveContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(TicketWaveContext);
};

export { AppProvider };
