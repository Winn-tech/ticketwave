import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
    return ( 
        <div className="footer">
            <div>
                <p>© 2023  TICKETSWAVE ALL RIGHTS RESERVED.</p>
            </div>
            <div>
                <span><RiFacebookFill/></span>
                <span><RiTwitterXLine/></span>
                <span><LuInstagram/></span>
            </div>
        </div>
     );
}
 
export default Footer;