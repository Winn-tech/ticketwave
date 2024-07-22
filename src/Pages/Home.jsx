import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import FeaturedEvents from '../Components/featuredEvents';
import Footer from '../Components/footer';
const HomePage = () => {
    return ( 
        <>
           <Navbar/>
           <HeroSection/>
           <FeaturedEvents/>
           <Footer/>
        </>
     );
}
 
export default HomePage;