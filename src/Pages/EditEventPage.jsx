import React from 'react';
// import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
import EditEvents from '../Components/editEvents';
import CreateEventPage from './createEventpage';
import SideBar from '../Components/Navigations/sideBar';
import Navigations from '../Components/Navigations/navigations';
const EditEventPage = () => {
    return ( 
        <>
         <Navigations/>
          <SideBar/>
          <EditEvents/>
          <Footer/>
       </>
     );
}
 
export default EditEventPage;