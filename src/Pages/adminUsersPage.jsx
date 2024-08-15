import React from 'react';
import AdminNavbar from '../Components/admin-componenets/AdminNavbar';
import AdminSidebar from '../Components/admin-componenets/sidebar';
const Users = () => {
    return ( 
       <>
         <AdminNavbar/>
         <div className="main-container">
            <AdminSidebar/>
            <div className="sub-container">
                
            </div>
        </div> 
       </>
     );
}
 
export default Users;