import React from 'react';
import {Link} from 'react-router-dom'
import '../../styles/sideBar.css'
import { useGlobalContext } from '../context';
import { FaTimes } from "react-icons/fa";
import NavLink from "../../navData"
const SideBar = () => {
  const {isSideBarOpen, closeSidebar, openSidebar} = useGlobalContext()
  // console.log(closeSidebar, isSideBarOpen);
  
  
  
    return (  
        <div className={isSideBarOpen ? "sidebar show " : "sidebar"}>
            <div className='sidebar-center'>
            <div className="head">
               <div className="logo">
                <h2>LOGO</h2>
               </div>         
               <div className="cancel" onClick={closeSidebar}>
                  <FaTimes />
               </div>
            </div>
            <article className='nav'>
              
            <Link to={"/user-profile"} className='user-profile' onClick={closeSidebar}>  
                  <div className='user-profile' >
                  <img src="https://placehold.co/30x30" alt="User Profile" className="profile-pic" />
                  <span>Godwin</span>
                  </div>
            </Link>

            <hr/>
              {NavLink.map((links, index)=>{
                const {page, subPages} = links
                return <div key={index} onClick={closeSidebar}>
                  <Link className='nav-link' to={page.url}>{page.label} </Link>
                 
                 <ul>
                     {subPages.map((subPage, index)=>{
                      const {label, url} = subPage
                      return <li key={index}>
                         <Link className='subnav-link' to={url}>{label}</Link>
                      </li>
                     })}
                 </ul>
                </div>
              })}
                   

                </article>

            </div>
        </div>
    );
}
 
export default SideBar;