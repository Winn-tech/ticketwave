import React from 'react';
import Footer from '../Components/footer';
import Navigations from '../Components/Navigations/navigations';
const FAQ = () => {
    return ( 
        <>
           <Navigations/>
           <div className="help">
            <h2>FREQUENTLY ASKED QUESTION’s</h2>

            <div className='faq'>
                <p className='first'>FAQ's for Buyers - Are you making purchases and you need help!</p>
                <p>Q. How can I buy tickets on this website?</p>
                <p className='ans'><span>A.</span>Register on the website and log in with your username and password click on the events you wish to purchase and choose the quantity check out and pay with any of the payment platform.</p>
                <p>Q. I got a bar code what should I do next?</p>
                <p className='ans'><span>A.</span>Dear customer the bar code represent your tickets please bring it to the venue for verification.</p>
                <p>Q. Where can I get the physical tickets?</p>
                <p className='ans'><span>A.</span>Kindly click on Ticket Distribution outlets on the top menu on the website. There you get the address of our distribution outlets across Nigeria.</p>
                <p>Q. Where do the tickets go to after purchase?</p>
                <p className='ans'><span>A.</span>Dear customer after buying online the e-tickets which contain bar codes and tickets I.D will be sent to your registered e-mail address print it out and bring it to the venue.</p>
                <p>Q. I will love to make or book for table ticket?</p>
                <p className='ans'><span>A.</span>Please call the customer support number for booking and table reservation.</p>
                <p>Q. I will like to know any concert or show coming up this month?</p>
                <p className='ans'><span>A.</span>Kindly check the website for the featured event, time and venue</p>
            </div>

            <div className='faq'>
                <p className='first'>FAQ's for Organizers - Are you organising an event and you need help?</p>
                <p>Q. How do upload or put my event on Ticketwave?</p>
                <p className='ans'><span>A.</span>Register on the website lunch on your profile and click on the create event menu.</p>
                <p>Q. How can I check for sales?</p>
                <p className='ans'><span>A.</span>Access your profile with the user name and password click the view tickets sales on your event menu.</p>
                <p>Q. Want to host an event so want you people in it?</p>
                <p className='ans'><span>A.</span>Kindly contact the customer support.</p>
                <p>Q. Need some volunteers, applauders or seat warmers?</p>
                <p className='ans'><span>A.</span>Kindly contact the customer support.</p>

            </div>

           </div>
           <Footer/>
        </>
     );
}
 
export default FAQ;