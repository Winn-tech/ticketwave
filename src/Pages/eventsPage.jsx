import React from 'react';
import Navigations from '../Components/Navigations/navigations';
import { TbArrowsSort } from "react-icons/tb";
import "../styles/eventspage.css"
const EventsPage = () => {
    return ( 
        <>
            <Navigations/>
            <div className="events-container">
               <section className='featured-events-section'>
                    <div className="heading">
                            <h3>Featured Events</h3>
                            <div>
                            <TbArrowsSort className='icon' />
                            Sort
                            </div>
                            
                    </div>
               </section>
               <section className='featured-events-section'>
                    <div className="heading">
                         <h3>Popular Events</h3>
                    </div>
               </section>
        

            </div>
        </>
     );
}
 
export default EventsPage;