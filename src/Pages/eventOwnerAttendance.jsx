import React, { useState } from 'react'
import CreatorsNavbar from '../Components/event-creators/creators-navbar';
import CreatorsSidebar from '../Components/event-creators/creatorsSidebar';
import {Bars} from 'react-loader-spinner'
const EventOwnerAttendance = () => {
    const [UniquePin, setUniquecode] = useState('')
    const [eventName, setEventName] = useState('')
    const [loading, setLoading] = useState(false)
  
  return (
    <> 
       <CreatorsNavbar/>
       <div className="main-container">
       <CreatorsSidebar/>
          <div className="sub-container">
            <div className="verification-container">
                <h3>VALIDATE TICKETS</h3>
                <form action="">
                   <label htmlFor="eventName">Event Name</label> 
                   <input type="text"  placeholder='Ticketwave Pool party' id='eventName' value={eventName} onChange={(e)=>setEventName(e.target.value)}/>
                    <label htmlFor="eventId">Ticket ID</label>
                    <input type="text" placeholder='eg: therav3099bbrt' value={UniquePin} id='eventId' onChange={(e)=>setUniquecode(e.target.value)}/>
                    <button>{loading?  <Bars color="white" height="20" />: "Validate Ticket" }</button>
                </form>
            
            </div>
            
          </div>

       </div>
      

    </>
  )
}

export default EventOwnerAttendance
