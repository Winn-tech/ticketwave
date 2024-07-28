import React from 'react';
import Navbar from '../Components/Navbar';
import '../stles/more.css'
import Footer from '../Components/footer';
const Extras = () => {
    return ( 
        <>
           <Navbar/>
           <div className="more">
              <h2>Extras</h2>
              <p>
              Extras are to cheer and fill spaces for movies, musical videos and the likes.
               </p>
               <h2>Reward/incentives</h2>
               <p>
               Payment which is job dependant.
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
 
export default Extras;