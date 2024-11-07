import React, { createContext, useState, useContext } from 'react';
import NavLink from '../navData'
const TicketWaveContext = createContext();

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuLocation, setSubMenuLocation] = useState({})
  const [subMenuPages, setSubMenuPage] = useState({page:{label:''}, subPages:[] })
  const [isOptionsOpen, setIsOptionOpen] = useState(false);
  const [optionPosition, setOptionsPosition] = useState({ top: 0, left: 0 });
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const [openScannedTicket, setOpenScannedTicket] = useState(false)

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
  }
  const openSort = (e) => {
    setIsOptionOpen(false)
    const top = Math.round(e.target.getBoundingClientRect().top);
    const right = Math.round(e.target.getBoundingClientRect().right);
    setDropdownPosition({ top, right });
    setIsSortOpen(true);

  };

  const closeOverlay =()=>{
    setIsOptionOpen(false)
    setIsSortOpen(false)
  }

  const closeSubMenu =()=>{
    setIsSubMenuOpen(false)
  }

  const closeSort = () => {
    setIsSortOpen(false);
  };

//   contextValue
  const contextValue = {
    isSideBarOpen,
    openSidebar,
    closeSidebar,
    isSubMenuOpen,
    openSubMenu,
    closeSubMenu,
    subMenuLocation,
    subMenuPages,
    isOptionsOpen,
    optionPosition,
    setIsOptionOpen,
    setOptionsPosition,
    isSortOpen,
    setIsSortOpen,
    openSort,
    dropdownPosition,
    setDropdownPosition,
    closeOverlay,
    dropdownPosition,
    setDropdownPosition, 
    closeSort,
    openScannedTicket,
    setOpenScannedTicket
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
