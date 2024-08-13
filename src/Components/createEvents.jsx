import React, { useEffect, useState } from 'react';
import { LuDownload } from "react-icons/lu";
import '../createEvents.css'
import axios from 'axios';
import { environment } from '../environment';
import { useNavigate, Link } from 'react-router-dom';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './CostModal';
import {toast} from 'react-toastify';




const CreateEvents = () => {
    const [categories, setCategories] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [costs, setCosts] = useState([]);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };

    
    const userInfo = JSON.parse(localStorage.UserInfo);

    useEffect(()=> {
        const getCategories= async()=>{
            console.log(userInfo.token)
            try {
                const result = await axios.get(environment.appUrl + 'categories', {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
                });
                console.log(result.data.category);
                setCategories(result.data.category);
                
            } catch (error) {
                console.log(error);
                setCategories([]);
            }
    
    
        }
    
        getCategories();

    }, [])



    const handleInputFocus = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  

    const removeCost = (indexToRemove) => {
        setCosts(costs.filter((_, index) => index !== indexToRemove));
    };


    const createEvent = async(e)=> {
        e.preventDefault();

        // {
        //     : "gabriel's birthday",
        //     "venue_details": "lagos",
        //     "event_description": "fun",
        //     "organizer_details": "gabriel",
        //     "event_start":"2021-03-04",
        //     "event_end":"2021-03-04",
        //     "event_category": "party",
        //     "event_tag": [
        //         {"name": "parrrii"}
        //     ],
        //     "event_cost": [
        //         {"level": "basic", "cost": 10,},
        //         {"level": "premium", "cost": 20}
        //     ]
        // }

        let tags = [
            {
                "name": e.target[3].value
            }
        ]

        const formData = new FormData();
        formData.append("event_title", e.target[0].value);
        formData.append('event_image', e.target[1].files[0]);
        formData.append("event_category", e.target[2].value);
        formData.append("event_tag", JSON.stringify(tags));
        formData.append("organizer_details", e.target[4].value);
        formData.append('event_website', e.target[5].value);
        formData.append("venue_details", e.target[6].value);
        formData.append("event_start", e.target[7].value);
        formData.append("event_description", e.target[8].value);
        formData.append("event_cost", JSON.stringify(costs));


        console.log(costs);


        try {
            const result = await axios.post(environment.appUrl + 'events', formData, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                    'Content-Type': 'multipart/form-data', // Ensure form-data is set
                }
            });

            e.target.reset();
            setCosts([]);

            
            console.log(result.data);

            if(result.data.success) {
                console.log(result.data)
                notifySuccess(result.data.message)

            }else {
                notifyError(JSON.stringify(result.data.errors))
            }
            
        } catch (error) {
            notifyError(JSON.stringify(error))
            
        }







    }

    return ( 
        <div className="create-event-container">
            <div className="header">
                <div className='first'>Create Event</div>
                <div className='second'>
                    View Submited form
                </div>
            </div>
            <form action="" onSubmit={createEvent}>
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="event-title">Event Title <span>*</span></label>
                        <input type="text" id="event-title" placeholder='The Oxymoron of Kenny Blaq' required />
                    </div>

                    <div className="form-group " >
                        <label htmlFor="event-img">Event Image <span>*</span></label>
                        <div className='img-group'>
                        <LuDownload className='img-group-icon'/>
                        <input type="file" accept="image/*" id="event-img" placeholder=' Photo.png' required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="event-category">Event Category  <span>*</span></label>
                        <select id="event-category" required>
                            <option value="" disabled selected>--select category--</option>
                            {categories.map((category, index)=> (
                                <option value={category.name} key={index}>{category.name}</option>
                            ))}
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
                        <input type="datetime-local" id="event-date" required />
                        {/* <input type="time" id="event-time" required /> */}
                   </div>
                </div>
                
                
                <div className="form-group">
                    <label htmlFor="event-description">Event Description <span>*</span></label>
                    <textarea id="event-description" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="event-cost">Event Cost <span>*</span></label>
                    {/* <input type="number" id="event-cost" onFocus={handleInputFocus} required/>  */}
                    
                    {costs.length > 0 && <div style={{marginBottom: '20px'}} className="ticket-costs">
                        {costs.map((cost, index) => (
                        <div key={index} className="ticket-cost-item">
                            <h2>{cost.level}, ₦{cost.cost}, Available: {cost.available}</h2>
                            <div onClick={() => removeCost(index)} className="remove-cost">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M20.0018 20.0001L28.7401 28.7384M11.2634 28.7384L20.0018 20.0001L11.2634 28.7384ZM28.7401 11.2617L20.0001 20.0001L28.7401 11.2617ZM20.0001 20.0001L11.2634 11.2617L20.0001 20.0001Z"
                                stroke="#202020"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                                </svg>
                            </div>
                        </div>
                        ))}
                    </div>}
                    <button type='button' onClick={handleInputFocus}>add</button>
                 </div> 
                 {/* Modal Component */}
                <Modal isOpen={isModalOpen} onClose={closeModal} setCosts={setCosts} costs={costs} />

                 <p>Please note that you can add as many cost of tickets as possible based on levels as you wish</p>
                <button type="submit" className="submit-button">Create Event</button>
            </form>
            <p className='note'>Please note that in the case of needing  volunteers, seat warmers, applauders or extras, you can reach out to us via email or any of our social media handle and we will get back to you in a jiffy whether they are available or not</p>
        </div>
     );
}
 
export default CreateEvents;