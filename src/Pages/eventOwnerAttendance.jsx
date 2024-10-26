import React, { useState } from 'react'
import CreatorsNavbar from '../Components/event-creators/creators-navbar';
import CreatorsSidebar from '../Components/event-creators/creatorsSidebar';
import {Bars} from 'react-loader-spinner'
const EventOwnerAttendance = () => {
    const [UniquePin, setUniquecode] = useState('')
    const [loading, setLoading] = useState(false)
  return (
    <> 
       <CreatorsNavbar/>
       <div className="main-container">
       <CreatorsSidebar/>
          <div className="sub-container">
            <div className="verification-container">
                <p>Input the attendee's Unique ticket code</p>
                <form action="">
                    <input type="text" placeholder='eg: therav3099bbrt' value={UniquePin} onChange={(e)=>setUniquecode(e.target.value)}/>
                    <button>{loading?  <Bars color="white" height="20" />: "Verify" }</button>
                </form>
            
            </div>
            
          </div>

       </div>
      

    </>
  )
}

export default EventOwnerAttendance
