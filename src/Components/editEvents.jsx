import React from 'react';
import { LuDownload } from "react-icons/lu";
import '../createEvents.css'
const EditEvents = () => {
    return ( 
        <div className="create-event-container">
            <div className="header">
                <div className='first'>Create Event</div>
                <div className='second'>
                    View Submited form
                </div>
            </div>
            <form action="">
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="event-title">Event Title <span>*</span></label>
                        <input type="text" id="event-title" placeholder='The Oxymoron of Kenny Blaq' required />
                    </div>

                    <div className="form-group " >
                        <label htmlFor="event-img">Event Image <span>*</span></label>
                        <div className='img-group'>
                        <LuDownload className='img-group-icon'/>
                        <input type="file" id="event-img" placeholder=' Photo.png' required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="event-category">Event Category  <span>*</span></label>
                        <select id="event-category" required>
                            <option value="concert">Concert</option>
                            <option value="conference">Conference</option>
                        <option value="workshop">Workshop</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="event-tag">Event Tag  <span>*</span></label>
                        <input type="text" id="event-tag" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="organizer-details">Organizer Details</label>
                        <input type="text" id="organizer-details" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="event-website">Event Website</label>
                        <input type="text" id="event-website" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="venue-name">Venue Details</label>
                        <input type="text" id="venue-name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="event-date">Event Date & Time</label>
                        <input type="date" id="event-date" required />
                        {/* <input type="time" id="event-time" required /> */}
                   </div>
                </div>
                
                
                <div className="form-group">
                    <label htmlFor="event-description">Event Description <span>*</span></label>
                    <textarea id="event-description" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="event-cost">Event Cost <span>*</span></label>
                    <input type="number" id="event-cost" required/> 
                 </div> 

                 <p>Please note that you can add as many cost of tickets as possible based on levels as you wish</p>
                <button type="submit" className="submit-button">Create Event</button>
            </form>
            <p className='note'>Please note that in the case of needing  volunteers, seat warmers, applauders or extras, you can reach out to us via email or any of our social media handle and we will get back to you in a jiffy whether they are available or not</p>
        </div>
     );
}
 
export default EditEvents;