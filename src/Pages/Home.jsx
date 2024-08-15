import React from 'react';
import HeroSection from '../Components/HeroSection';
import FeaturedEvents from '../Components/featuredEvents';
import Footer from '../Components/footer';
import EventGateway from '../Components/eventGateway';
import SideBar from '../Components/Navigations/sideBar';
import Navigations from '../Components/Navigations/navigations';
import Testimonials from '../Components/testimonials';

const HomePage = () => {
    return ( 
        <>
           <Navigations/>
           <HeroSection/>
           <FeaturedEvents/>
           <EventGateway/>
           <FeaturedEvents/>
           <Testimonials/>
           <Footer/>
           
        </>
     );
}
 
export default HomePage;