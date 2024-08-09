import React from 'react';
import '../styles/help.css'
import Footer from '../Components/footer';
import Navigations from '../Components/Navigations/navigations';
const HelpPage = () => {
    return ( 
         <>
        <Navigations/>
        <div className="help">
            <div className="users">
                <h2>HOW IT WORKS FOR USERS</h2>
                <dl>
                    <dt>1.find tickets </dt>
                    <dd>
                        To buy event tickets, first you have to click to select an event from the
                       home page or the upcoming event page; this will take you to the Event page.
                    </dd>

                    <dt>2. Add Ticket to cart</dt>
                    <dd>
                        On the Event page, select the ticket type or class and the number of tickets you
                        wish to buy, and add to cart. To increase the number of tickets click/press on
                        the plus sign(+), also to reduce the number of tickets click/press on the minus sign(-).
                    </dd>

                    <dt>3. Make payment</dt>
                    <dd>
                        On the “Cart Page” click on proceed to checkout; on the “Checkout Page” enter all the required details, select your preferred payment option and click on “Place Order” to make your purchase.
                    </dd>

                    <dt>4. get tickets</dt>
                    <dd>
                    For payment made  – once the payment process is completed, your barcode ticket(s) will be sent immediately to the email address you provided while registering
                    </dd>
                </dl>
                <button>FREQUENTLY ASKED QUESTIONS</button>
            </div>

            <div className="organizers">
                <h2>HOW IT WORKS FOR ORGANIZERS</h2>
                <p>To create and sell event tickets on ticketwave, you need to have an account on our website.</p>
                <ol>
                    <li>Create an account on Signup as an existing organizer.</li>
                    <li>Click on the "Create Event" button.</li>
                    <li>Fill in the details about your event.</li>
                    <li>Set the following details about your event:</li>
                </ol>
                <p>Enter the following details about your Event</p>
                <ul>
                    <li>Event name <span> Enter the name of the event,</span></li>
                    <li>Event Description: <span>Enter a brief description of what the event is about,</span></li>
                    <li>EVENT TIME & DATE: <span> Enter event start/end time and date,</span></li>
                    <li>Event Image: <span>Upload event banner (dimension:1600 × 1065),</span></li>
                    <li>Event Categories : <span> Select an appropriate event category for your event.</span></li>
                    <li>Event tag : <span>Select an appropriate event tag for your event.</span></li>
                    <li>Venue Details<span>Create a new venue or search and select from our list of venues,</span></li>
                    <li>Organiser details:<span>Create a new organizer detail or search and select from our list of organizers,</span></li>
                    <li>Event cost: <span> Leave this field blank if the event is for free, but for paid events enter the appropriate amount.</span></li>
                </ul>
                <p>We will review and approve the submitted event within 48 hours.</p>
             
                <button className="learn-more">FIND OUT MORE ABOUT ORGANIZING</button>
          </div>
     </div>
     <Footer/>
         </>
     );
}
 
export default HelpPage;