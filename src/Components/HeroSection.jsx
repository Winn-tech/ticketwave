import React from 'react';
import { IoMdSearch } from "react-icons/io";
const HeroSection = () => {
    return ( 
        <div className="hero-section">
            <div className="overlay">
                <h1 className="title">
                   Experience More with Easy Event<span className="highlight"> Ticketing</span>
                </h1>
                <div className="search-bar">
                   <IoMdSearch className='search-icon'/> 
                 <input type="text" placeholder={'Search for Events, Concerts & more...'} className="search-input" />
                <button className="search-button">Search</button>
                </div>
            </div>
        </div>
     );
}
 
export default HeroSection;