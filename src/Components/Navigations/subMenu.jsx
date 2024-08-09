import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowUpWideLine } from "react-icons/ri";
import'../../styles/subMenu.css'
import { useGlobalContext } from '../context';


const SubMenu= () => {
    const {isSubMenuOpen, subMenuLocation, subMenuPages, closeSubMenu} = useGlobalContext()
    const container = useRef(null)
    const {center , bottom } = subMenuLocation
    const {page, subPages} = subMenuPages
    useEffect (()=>{
        const pages = container.current;
        pages.style.left= `${center}px`
        pages.style.top= `${bottom}px`
    }, [subMenuLocation])
    // console.log(page);
    
    return ( 
        <aside className={isSubMenuOpen ? 'submenu show ' : 'submenu'}  ref={container}>
            
            <h3>{page.label}</h3>
            <div onClick={closeSubMenu}>
                {
                    subPages.map((subPage, index)=>{
                        if (subPage.length !== 0) {
                            return <Link className='sub-links' key={index} to={subPage.url}>
                            {subPage.label}
                        </Link>
                        }
                        else{
                            return null
                        }
                    })
                }
                 <RiArrowUpWideLine className='close-icon'/>
            </div>
           
         </aside>
     );
}

 
export default SubMenu