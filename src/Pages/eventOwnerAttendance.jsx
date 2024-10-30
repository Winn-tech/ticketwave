import React, { useState } from 'react';
import CreatorsNavbar from '../Components/event-creators/creators-navbar';
import CreatorsSidebar from '../Components/event-creators/creatorsSidebar';
import { environment } from '../environment';
import { toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner';
import axios from 'axios';

const EventOwnerAttendance = () => {
    const [UniquePin, setUniquecode] = useState('');
    const [eventName, setEventName] = useState('');
    const [loading, setLoading] = useState(false);

    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };

    const verifyTickets = async (event) => {
        event.preventDefault(); // Prevent default form submission
        setLoading(true);

        const userInfo = JSON.parse(localStorage.getItem('UserInfo')); // Get user info from localStorage
        const eventId = JSON.parse(localStorage.getItem("EventId"))
        const eventName = localStorage.getItem('EventTitle')

        try {
            const response = await axios.post(
                `${environment.appUrl}validated-tickets/${eventId}`,
                {
                    event_name: eventName,
                    ticket_code: UniquePin,
                    
                },
                {
                    headers: {
                        Authorization: `Bearer ${userInfo?.token}`, 
                    },
                }
            );

            setLoading(false);
            console.log( "attendane",eventName);
            
           
            console.log(response.data);

            // Handle success response
            if (response.data.success) {
                notifySuccess('Ticket validated successfully!');
            } else {
                notifyError(response.data.message || 'Validation failed.');
            }
        } catch (error) {
            setLoading(false);
            notifyError(error.response?.data?.message || 'An error occurred during validation.');
            console.error('Error validating ticket:', error);
        }
        setEventName('')
        setUniquecode('')
    };

    return (
        <> 
            <CreatorsNavbar />
            <div className="main-container">
                <CreatorsSidebar />
                <div className="sub-container">
                    <div className="verification-container">
                        <h3>VALIDATE TICKETS</h3>
                        <form onSubmit={verifyTickets}>
                            <label htmlFor="eventName">Event Name</label> 
                            <input
                                type="text"
                                placeholder='Ticketwave Pool party'
                                id='eventName'
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                                required
                            />
                            <label htmlFor="eventId">Ticket ID</label>
                            <input
                                type="text"
                                placeholder='eg: therav3099bbrt'
                                value={UniquePin}
                                id='eventId'
                                onChange={(e) => setUniquecode(e.target.value)}
                                required
                            />
                            <button type="submit" disabled={loading}>
                                {loading ? <Bars color="white" height="20" /> : "Validate Ticket"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventOwnerAttendance;
