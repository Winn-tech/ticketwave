import React from 'react';
import Navbar from '../Components/Navbar';
import '../stles/more.css'
import Footer from '../Components/footer';
const SeatWarmers = () => {
    return (  
       <>
           <Navbar/>
           <div className="more">
              <h2>Seat Warmers</h2>
              <p>
                Seat Warmers are to hold down seats for event guests. In other words,
                 before a VIP guest arrives at a show, seatwarmers are charged with the
                 duty of keeping a reserved seat which is immediately given up once the rightful 
                 occupant shows up.
                 Seatwarmers can also be used to fill up empty seats at a show, concert o
                r event. Event owners will use them in this light to make sure their event space is
                filled up.
               </p>
               <h2>Reward/incentives</h2>
               <p>
                 The company gives a free ticket to show,concert or event. OR If a
                 seatwarmer is required to leave immediately after handing a seat over, a seatwarmer will be paid?.
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
 
export default SeatWarmers;