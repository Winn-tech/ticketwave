import React from 'react';
import Notification from '../../assets/notification.svg';
import cart from '../../assets/cart.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import '../../styles/navbar.css'
import { useGlobalContext } from '.././context';
import { Link } from 'react-router-dom';
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
                    <li >
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/events"}>Events</Link>
                    </li>
                    <li >
                      <Link to={"/create-event"}>Create Event</Link> 
                    </li>
                   
                    <li >
                      <Link to={"/orders"}>Orders</Link>
                    </li>
                    <li onMouseOver={handleAction}>
                      <Link to={"/help"} className='hov-btn' onClick={preventClick}>Help</Link>
                    </li>
                    <li onMouseOver={handleAction}>
                      <Link to={"/#more"} className='hov-btn' onClick={preventClick}>More</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="#cart" className="icon">
                <img src={cart} alt="cart" />
                </a>
                <a href="#notifications" className="icon">
                <img src={Notification} />
                {/* <span className="notification-dot"></span> */}
                </a>
                <div className="profile">
                <img src="https://placehold.co/30x30" alt="User Profile" className="profile-pic" />
                <span>Godwin</span>
                </div>
                <div  onClick={openSidebar} className='menubar-container'> 
                <GiHamburgerMenu className='menubar'/>
             </div>
            </div>
           
        </div>
     );
}
 
export default Navbar;