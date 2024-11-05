import React, { useState, useEffect } from 'react';
import CreatorsNavbar from '../Components/event-creators/creators-navbar';
import CreatorsSidebar from '../Components/event-creators/creatorsSidebar';
import { environment } from '../environment';
import { toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner';
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';

const EventOwnerAttendance = () => {
    const [ticketCode, setTicketCode] = useState('');
    const [eventName, setEventName] = useState('');
    const [loading, setLoading] = useState(false);
    const [scannerActive, setScannerActive] = useState(false); // State to control scanner visibility

    // Initialize QR scanner when eventId element is present
    useEffect(() => {
        if (scannerActive) {
            const scanner = new Html5QrcodeScanner('eventId', {  // Target the element with id="eventId"
                qrbox: {
                    height: 250,
                    width: 250,
                },
                fps: 5,
            });

            const success = (result) => {
                setTicketCode(result); // Set the scanned ticket code
                scanner.clear(); // Clear the scanner once a code is successfully read
            };

            const error = (err) => {
                toast.error(`QR scanner error: ${err}`);
            };

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

        // Reset state after the ticket verification
        setEventName('');
        setTicketCode('');
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

                            {/* Button to activate scanner */}
                            <button
                                type="button"
                                onClick={() => setScannerActive(true)}
                                disabled={scannerActive || loading}
                            >
                                {scannerActive ? 'Scanner Activated' : 'Activate Scanner'}
                            </button>

                            <button type="submit" disabled={loading}>
                                {loading ? <Bars color="white" height="20" /> : 'Validate Ticket'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventOwnerAttendance;
