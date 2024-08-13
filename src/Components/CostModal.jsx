import React, { useState } from 'react';
import '../createEvents.css';

const Modal = ({ isOpen, onClose, setCosts, costs }) => {
  const [newCost, setNewCost] = useState({ level: '', cost: '', available: '' });

  const handleCost = (e) => {
    e.preventDefault();

    // Add the new cost to the existing list of costs
    setCosts([...costs, newCost]);


    console.log(costs);

    // Close the modal after saving
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCost({ ...newCost, [name]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <h2>Event Cost</h2>
          <div onClick={onClose} style={{ cursor: 'pointer' }}>
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
        {/* <form action='' > */}
          <div className="form-group">
            <label htmlFor="level">Ticket Level *</label>
            <input
              required
              type="text"
              id="level"
              name="level"
              value={newCost.level}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cost">Ticket Cost *</label>
            <input
              required
              type="number"
              id="cost"
              name="cost"
              value={newCost.cost}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="available">Tickets Available *</label>
            <input
              required
              type="number"
              id="available"
              name="available"
              value={newCost.available}
              onChange={handleChange}
            />
          </div>
          {/* <div> */}
            <button onClick={handleCost} className="save-btn">Save</button>
          {/* </div> */}
        {/* </form> */}
      </div>
    </div>
  );
};

export default Modal;
