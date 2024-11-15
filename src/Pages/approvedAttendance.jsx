import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { environment } from '../environment'
import CreatorsNavbar from '../Components/event-creators/creators-navbar'
import CreatorsSidebar from '../Components/event-creators/creatorsSidebar'


const ApprovedAttendance = () => {
    const { id } = useParams();
    const userInfo = JSON.parse(localStorage.getItem('UserInfo'));
    
    useEffect(()=>{
       const getData = async () =>{
        try {
            const response = await axios.get(`${environment.appUrl}validated-tickets/event/${id}`, {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            });
            console.log("approved", response);
            
        } catch (error) {
            
        }
       }
       getData()
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
