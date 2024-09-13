import React, { useState, useEffect } from 'react';
import USERS_MOCK_DATA from './USERS_MOCK_DATA.json';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const UsersTable = () => {
  const {isOptionsOpen, optionPosition,  setIsOptionOpen, setOptionsPosition } =useGlobalContext()
  const [users, setUsers] = useState(USERS_MOCK_DATA);
  

  const openOptions = (e) => {
    setIsOptionOpen(true); 
    const { top, left } = e.target.getBoundingClientRect();
    setOptionsPosition({ top: Math.round(top), left: Math.round(left) });
  };

  const closeOptions = () => {
    setIsOptionOpen(false);
  };

  
  // useEffect(() => {
  //   if (isOptionsOpen) {
  //     const handleClickOutside = (event) => {
  //       if (!event.target.closest('.toggle.show-sort')) {
  //         setIsOptionOpen(false);
  //       }
  //     };
  //     document.addEventListener('click', handleClickOutside);
  //     return () => {
  //       document.removeEventListener('click', handleClickOutside);
  //     };
  //   }
  // }, [isOptionsOpen]);
  
  

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email address</th>
            <th>Total Events</th>
            <th>Total Ticket Sold</th>
            <th>Total Amount Made</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, first_name, email } = user;
            return (
              <tr key={id}>
                <td>{first_name}</td>
                <td>{email}</td>
                <td>Total Events</td>
                <td>Total Tickets Sold</td>
                <td>Total Amount Made</td>
                <td onClick={openOptions} style={{ cursor: 'pointer' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z" stroke="#3A3A3A" strokeWidth="1.5" />
                    <path d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z" stroke="#3A3A3A" strokeWidth="1.5" />
                    <path d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z" stroke="#3A3A3A" strokeWidth="1.5" />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {isOptionsOpen && (
        <div
          className="toggle show-sort"
          style={{
            position: 'absolute',
            top: optionPosition.top + window.scrollY - 50,
            left: optionPosition.left + window.scrollX - 100,
          }}
        >
          <ul onClick={closeOptions}>
            <li>
              <Link to={"/admin/users/user"} className='link'>View Profile</Link>
            </li>
            <li>
              <Link to="#" className='link'>Message User Mail</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default UsersTable;
