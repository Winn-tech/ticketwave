import React from 'react';
import Footer from '../Components/footer';
import '../styles/contactUs.css'
import Navigations from '../Components/Navigations/navigations';
const ContactUs = () => {
    return ( 
        <>
         <Navigations/>
          <div className='contactUs'>
            <h2> Contact Us</h2>
                <p>
                   Need Help? Our team are on stand by to assist you. Simply fill out the form to the right, and we’ll be in touch shortly.
                </p>
                <p>
                    Phone:<span> 09091331455 </span>
                </p>
                <p>
                    Email Address:<span> Olugodwin99"gmail.com </span>
                </p>
                <p>
                    Address : <span> Lagos </span>
                </p>
                <p>
                    Avalaibility Period : <span> 8 AM - 7 PM</span>
                </p>
                <form action="">
                    <div className="input--group">
                        <label htmlFor="">Full name</label>
                        <input type="text" />
                    </div>
                    <div className="input--group">
                        <label htmlFor="">Email Address</label>
                        <input type="text" />
                    </div>
                  
                    <div className="input--group">
                        <label htmlFor="">Subject </label>
                        <input type="text" />
                    </div>
                    <div className="input--group">
                        <label htmlFor="">Your message</label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <button>Send</button>
                </form>
            </div>
            <Footer/>
        </>
     );
}
 
export default ContactUs;