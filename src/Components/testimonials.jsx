import React from 'react';
import CenterMode from './slidder';
import '../styles/testimonial.css' 
const Testimonials = () => {
    return ( 
         <section className='testimonial'>
            <div className="texts">
                <p>TESTIMONIALS</p>
                <h3>
                    What my clients are saying
                </h3>
            </div>
            <CenterMode/>
         </section>
     );
}
 
export default Testimonials;