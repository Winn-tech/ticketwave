import React, { useState, useEffect, useRef } from 'react';
import NavLink from '../navData';
import CreatorsNavbar from '../Components/event-creators/creators-navbar';
import CreatorsSidebar from '../Components/event-creators/creatorsSidebar';
import '../styles/events-attendance.css'
import { environment } from '../environment';
import { toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner';
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';
import { useGlobalContext } from '../Components/context';


const EventOwnerAttendance = () => {
    const { openScannedTicket,setOpenScannedTicket} = useGlobalContext()
    const [ticketCode, setTicketCode] = useState('');
    const [eventName, setEventName] = useState('');
    const [loading, setLoading] = useState(false);
    const [tickCategories, setTickCategories] = useState([]);
    const [scannerActive, setScannerActive] = useState(false)

    const userInfo = JSON.parse(localStorage.getItem('UserInfo'));
    const eventId = JSON.parse(localStorage.getItem("eventId"));
    

    // Ref for the scanner container
    const scannerContainerId = 'scanner-container';

    
    useEffect(() => {
        const fetchTicketCategories = async () => {
            try {
                const response = await axios.get(`${environment.appUrl}validated-tickets/event/${eventId}`, {
                    headers: {
                        Authorization: `Bearer ${userInfo?.token}`,
                    },
                });
                
                // Assuming response contains categories with names and counts
                console.log(response.data.ticket_types);
                
                setTickCategories(response.data.ticket_types);
            } catch (error) {
                console.error("Error fetching ticket categories:", error);
            }
        };
        fetchTicketCategories();
    }, [eventName, eventId, userInfo?.token]);

    useEffect(() => {
        if (scannerActive === true) {
            const scanner = new Html5QrcodeScanner(scannerContainerId, {
                qrbox: {
                    height: 250,
                    width: 250,
                },
                fps: 1,
            });

            const success = (result) => {
                setTicketCode(result); 
                scanner.clear();
                setScannerActive(false); 
            };

            const error = (err) => {
                toast.error(`QR scanner error: ${err}`);
            };

            // Render the scanner inside the container and handle success/error
            scanner.render(success, error);

            // Cleanup the scanner when the component unmounts or when we deactivate it
            return () => {
                scanner.clear();
            };
        }
    }, [scannerActive]); // Re-run the effect when scannerActive changes

    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };

    const verifyTickets = async (event) => {
        event.preventDefault();
        setLoading(true);

        const userInfo = JSON.parse(localStorage.getItem('UserInfo'));
        const eventId = JSON.parse(localStorage.getItem('EventId'));
        const eventTitle = localStorage.getItem('EventTitle');

        try {
            const response = await axios.post(
                `${environment.appUrl}validated-tickets`,
                {
                    event_name: eventTitle,
                    ticket_code: ticketCode,
                },
                {
                    headers: {
                        Authorization: `Bearer ${userInfo?.token}`,
                    },
                }
            );

            setLoading(false);

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

        setTicketCode('');
    };

    return (
        <>
            <CreatorsNavbar />
            <div className="main-container">
                <CreatorsSidebar />
                <div className="sub-container">
                    <div className="verification-container">
                        <div className="head">
                        <h3>VALIDATE TICKETS</h3>
                        <button 
                            type='button'
                            disabled={scannerActive}
                            onClick={()=>setScannerActive(true)}
                            className='scanButton'
                        >
                            {scannerActive? "scanning": "scan"}
                        </button>  
                        </div>
                        <form onSubmit={verifyTickets}>
                            <label htmlFor="eventName">Event Name</label>
                            <input
                                type="text"
                                placeholder="Ticketwave Pool party"
                                id="eventName"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                                required
                            />
                            <label htmlFor="eventId">Ticket ID</label>
                            <input
                                type="text"
                                placeholder="eg: therav3099bbrt"
                                value={ticketCode}
                                id="eventId"  // Make sure this has id="eventId"
                                onChange={(e) => setTicketCode(e.target.value)}
                                required
                            />
                            <p>Note: Scanning of Tickets is available on mobile only</p>

                            
                            
                            <button type="submit" disabled={loading}>
                                {loading ? <Bars color="white" height="20" /> : 'Validate Ticket'}
                            </button>
                        </form>

                        
                        <div 
                            className={scannerActive? "showScanBox": "scanBox"}
                            id={scannerContainerId}
                            
                        >
                        </div>
                        {openScannedTicket && (
                            <section className="show-scanned" onClick={()=>setOpenScannedTicket(false)}>
                                <div className="scanned-content" >
                                    <h4>Categories:</h4>
                                    <ul>
                                        {tickCategories.map((category) => (
                                            <li key={category.event_id}>
                                                <NavLink className="nav-item" to={`/events-attendance/tickets-verified/${category.event_id}`}>
                                                    <span style={{ color: "black" }}>{category.level}</span>
    
                                                    <span>({category.validated_tickets.length})</span>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventOwnerAttendance;
