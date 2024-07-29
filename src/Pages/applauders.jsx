import React from 'react';
import Navbar from '../Components/Navbar';
import '../styles/more.css'
import Footer from '../Components/footer';
const Applauders = () => {
    return ( 
        <>
           <Navbar/>
           <div className="more">
              <h2>Applauders</h2>
              <p>
              Applauders are mainly used for talk shows and the likes. They are to cheer and respond to whatever goes on on the stage. As opposed to screamers their rigor is minimal and comportment is essential.
               </p>
               <h2>Reward/incentives</h2>
               <p>
               An applauder gets to attend shows of their choice. OR Payment, which is event dependant.
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
                    <label htmlFor="">Phone Number</label>
                    <input type="text" />
                </div>
                <div className="input--group">
                    <label htmlFor="">Height(metres)</label>
                    <input type="text" />
                </div>
                <div className="input--group">
                    <label htmlFor="">Complexion</label>
                    <input type="text" />
                </div>
                <div className="input--group">
                    <label htmlFor="">Gender</label>
                    <input type="text" />
                </div>
                <div className="input--group">
                    <label htmlFor="">Photo</label>
                    <input type="text" />
                </div>
                <button>Send</button>
              </form>
           </div>
           <Footer/>
       </>
     );
}
 
export default Applauders;