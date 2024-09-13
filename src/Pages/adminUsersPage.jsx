import React, { useEffect, useState } from 'react';
import AdminNavbar from '../Components/admin-componenets/AdminNavbar';
import AdminSidebar from '../Components/admin-componenets/sidebar';
import UsersTable from '../Components/admin-componenets/usersTable';
import '../styles/adminStyle.css';
import { useGlobalContext } from '../Components/context';

const Users = () => {
  const {isSortOpen, closeSort, closeOverlay, openSort, setIsSortOpen, dropdownPosition, setIsOptionOpen, isOptionsOpen} = useGlobalContext()
  const [overlayHeight, setOverlayHeight] = useState(0)
  useEffect(()=>{
     if (isSortOpen === true) {
      document.body.style.overflow = 'hidden';
    }
    
  }, [])
  return (
    <>
      <AdminNavbar />
      <div className="main-container">
        <AdminSidebar />
        <div className="sub-container">
          <div className="heading">
            <div>
              <h3>Users</h3>
              <p>1000 Users</p>
            </div>
            <div onClick={openSort}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8.70856 6.22498C8.55023 6.22498 8.39187 6.16667 8.26687 6.04167L5.60854 3.38333L2.9502 6.04167C2.70853 6.28333 2.30854 6.28333 2.06687 6.04167C1.8252 5.8 1.8252 5.4 2.06687 5.15834L5.1669 2.05831C5.28356 1.94164 5.44187 1.875 5.60854 1.875C5.7752 1.875 5.93356 1.94164 6.05023 2.05831L9.1502 5.15834C9.39187 5.4 9.39187 5.8 9.1502 6.04167C9.0252 6.16667 8.8669 6.22498 8.70856 6.22498Z" fill="#3A3A3A"/>
            <path d="M5.60828 18.125C5.26661 18.125 4.98328 17.8417 4.98328 17.5V2.5C4.98328 2.15833 5.26661 1.875 5.60828 1.875C5.94994 1.875 6.23328 2.15833 6.23328 2.5V17.5C6.23328 17.8417 5.94994 18.125 5.60828 18.125Z" fill="#3A3A3A"/>
            <path d="M14.4 18.1253C14.2334 18.1253 14.075 18.0586 13.9583 17.942L10.8584 14.8419C10.6167 14.6003 10.6167 14.2003 10.8584 13.9586C11.1 13.7169 11.5 13.7169 11.7417 13.9586L14.4 16.6169L17.0583 13.9586C17.3 13.7169 17.7 13.7169 17.9417 13.9586C18.1834 14.2003 18.1834 14.6003 17.9417 14.8419L14.8417 17.942C14.725 18.0586 14.5584 18.1253 14.4 18.1253Z" fill="#3A3A3A"/>
            <path d="M14.3917 18.125C14.0501 18.125 13.7667 17.8417 13.7667 17.5V2.5C13.7667 2.15833 14.0501 1.875 14.3917 1.875C14.7334 1.875 15.0167 2.15833 15.0167 2.5V17.5C15.0167 17.8417 14.7417 18.125 14.3917 18.125Z" fill="#3A3A3A"/>
            </svg>
              Sort
            </div>
          </div>
          <UsersTable />
        </div>
      </div>
      
      {isSortOpen  && (
        <div
          className="toggle show-sort"
          style={{
            position: 'absolute',
            top: dropdownPosition.top, // Adjust 20 to offset the dropdown position
            right: window.innerWidth - dropdownPosition.right - 50, // Adjust 50 for right offset
          }}
        >
          <ul onClick={closeSort}>
            <li>Name A-Z</li>
            <li>Total Ticket Sold</li>
            <li>Highest Amount Made</li>
          </ul>
        </div>
      )}

      {
        
        (isOptionsOpen || isSortOpen)&&(
          <div className="over-lay" 
          onClick={closeOverlay }>

          </div>
        )
      }
    </>
  );
};

export default Users;
