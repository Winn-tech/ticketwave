import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import FeaturedEvents from '../Components/featuredEvents';
import Footer from '../Components/footer';
import EventGateway from '../Components/eventGateway';
import SideBar from '../Components/sideBar';
const HomePage = () => {
    return ( 
        <>
           <Navbar/>
           <SideBar/>
           <HeroSection/>
           <FeaturedEvents/>
           <EventGateway/>
           <Footer/>
           
        </>
     );
}
 
export default HomePage;