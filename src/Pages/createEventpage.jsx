import React from 'react';
// import Navbar from '../Components/Navbar';
import CreateEvents from '../Components/createEvents';
import Footer from '../Components/footer';
import SideBar from '../Components/Navigations/sideBar';
import Navigations from '../Components/Navigations/navigations';
const CreateEventPage = () => {
    return ( 
       <>
          <Navigations/>
          <SideBar/>
          <CreateEvents/>
          <Footer/>
       </>
     );
}
 
export default CreateEventPage;