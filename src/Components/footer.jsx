import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import "../styles/footer.css"

const Footer = () => {
    return ( 
        
        <footer>
            <div>
                <p>© 2023  TICKETSWAVE ALL RIGHTS RESERVED.</p>
            </div>
             <div>
                 <div className='icon'><RiFacebookFill/></div>
                 <div className='icon'><RiTwitterXLine/></div>
                 <div className='icon'><LuInstagram/></div>
             </div>
        </footer>
     );
}
 
export default Footer;