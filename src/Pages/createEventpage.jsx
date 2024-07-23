import React from 'react';
import Navbar from '../Components/Navbar';
import CreateEvents from '../Components/createEvents';
import Footer from '../Components/footer';
const CreateEventPage = () => {
    return ( 
       <>
          <Navbar/>
          <CreateEvents/>
          <Footer/>
       </>
     );
}
 
export default CreateEventPage;