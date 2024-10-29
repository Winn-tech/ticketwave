import React, { useEffect } from 'react'
import axios from 'axios'
import { environment } from '../environment'
import CreatorsNavbar from '../Components/event-creators/creators-navbar'
import CreatorsSidebar from '../Components/event-creators/creatorsSidebar'


const ApprovedAttendance = () => {
    
    useEffect(()=>{
       const getVerifiedTickets = async () =>{
         const verifiedTickets = await axios.get(`${environment}/validated-tickets/type/1/users`) 
        console.log(verifiedTickets.data);
        
      }
      getVerifiedTickets()
    },[])
  return (
   <>

       <CreatorsNavbar/>
       <div className="main-container">
       <CreatorsSidebar/>
          <div className="sub-container">
            <div className="verification-container">
                <img src="" alt="" />
                    <div className="heading">
                        <h3> Category: Gold</h3>
                        <p>25 signed In tickets</p>
                   </div>
                   <table>
                   <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ticket Id</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>hdkhdkhnd</td>
                            <td>john&gmail.com</td>
                        </tr>
                        <tr>
                            <td>Godwin</td>
                            <td>lkjnslknklnd</td>
                            <td>Godwin&gmail.com</td>
                        </tr>
                        <tr>
                            <td>Bolaji</td>
                            <td>knlihxbhihs</td>
                            <td>Bolaji&gmail.com</td>
                        </tr>
                       
                        
                    </tbody>
                   </table>
            
            </div>
            
          </div>

       </div>
   </>
  )
}

export default ApprovedAttendance
