import React from 'react';
import Navbar from '../Components/Navbar';
import '../styles/more.css'
const Volunteers = () => {
    return ( 
        <>
           <Navbar/>
           <div className="more">
              <h2>Volunteers</h2>
              <p>
                 Volunteers – are young people who offer their service on specific projects, they are required to work part time, on projects, and will be compensated depending on the magnitude of work.
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
           <Navbar/>
       </>
     );
}
 
export default Volunteers;