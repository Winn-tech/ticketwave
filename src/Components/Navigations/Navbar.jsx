import React from 'react';
import Notification from '../../assets/notification.svg';
import cart from '../../assets/cart.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import '../../styles/navbar.css'
import { useGlobalContext } from '.././context';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const {openSidebar, isSubMenuOpen, openSubMenu, closeSubMenu} = useGlobalContext()
   const handleAction =(e)=>{
    const page = e.target.textContent;
    const position = e.target.getBoundingClientRect()
    // console.log(page, position);
    const center = (position.left + position.right) / 2
    const bottom = position.bottom - 3
    openSubMenu(page, {center, bottom} )
   }
   

   const preventClick = (event) => {
    event.preventDefault();
  };

  const preventHoverAction=(e)=>{
    if (!e.target.classList.contains('hov-btn' )) {
      closeSubMenu()
    }
  }

  return ( 
        <div className="navbar" onMouseOver={preventHoverAction}>
            <div className="navbar-left">
                <div className="logo">LOGO</div>
                <div className="greeting">
                <span role="img" aria-label="wave">👋</span> Hi Godwin
                </div>
            </div>
            <div className="navbar-center">
                <ul>
                    <li>
                      <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/events"}>Events</NavLink>
                    </li>
                    <li >
                      <NavLink to={"/create-event"}>Create Event</NavLink> 
                    </li>
                   
                    <li >
                      <NavLink to={"/orders"}>Orders</NavLink>
                    </li>
                    <li onMouseOver={handleAction}>
                      <NavLink to={"/help"} className='hov-btn' onClick={preventClick}>Help</NavLink>
                    </li>
                    <li onMouseOver={handleAction}>
                      <NavLink to={"/more"} className='hov-btn' onClick={preventClick}>More</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <Link to="/cart" className="icon">
                <img src={cart} alt="cart" />
                </Link>
                <Link to={"/notifications"} className="icon">
                <img src={Notification} />
                {/* <span className="notification-dot"></span> */}
                </Link>
                <Link to={"/user-profile"}> 
                  <div className="profile">
                  <img src="https://placehold.co/30x30" alt="User Profile" className="profile-pic" />
                  <span>Godwin</span>
                  </div>
                </Link>
                <div  onClick={openSidebar} className='menubar-container'> 
                <GiHamburgerMenu className='menubar'/>
             </div>
            </div>
           
        </div>
     );
}
 
export default Navbar;