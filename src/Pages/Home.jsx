import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import FeaturedEvents from '../Components/featuredEvents';
import Footer from '../Components/footer';
import EventGateway from '../Components/eventGateway';
const HomePage = () => {
    return ( 
        <>
           <Navbar/>
           <HeroSection/>
           <FeaturedEvents/>
           <EventGateway/>¬
           <Footer/>
           
        </>
     );
}
 
export default HomePage;