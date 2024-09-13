import React, { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { useGlobalContext } from './context';
import hero1 from '../images/heroSection/hero1.jpg'
import hero2 from '../images/heroSection/hero2.jpg'
import hero3 from '../images/heroSection/hero3.jpg'
const HeroSection = () => {
    const {closeSubMenu} = useGlobalContext()
    const [heroImageIndex, setHeroIndex] = useState(0)

    const heroImages =[
        hero1 , hero2, hero3
    ]

   useEffect(()=>{
        const updateHeroImageIndex = (heroImageIndex)=>{
           setHeroIndex((prevIndex=> (prevIndex + 1) % heroImages.length))
        }
        const interval = setInterval(()=>{
           updateHeroImageIndex()
        }, 3000)

        return () => clearInterval(interval); 

        
   }, [ ] )

   const style={
    backgroundImage: `url(${heroImages[heroImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color : 'white',
    transition: 'background-image 1s ease-in-out',
   }

    return ( 
        <div className="hero-section" onMouseOver={closeSubMenu} style={style}>
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