import React from 'react';
import AdminNavbar from '../Components/admin-componenets/AdminNavbar';
import AdminSidebar from '../Components/admin-componenets/sidebar';
const AdminOrders = () => {
    return ( 
        <>
          <AdminNavbar/>
          <div className="main-container">
            <AdminSidebar/>
            <div className="sub-contain">
                
            </div>
          </div>
        </>
     );
}
 
export default AdminOrders;