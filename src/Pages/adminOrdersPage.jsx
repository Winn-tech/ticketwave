import React from 'react';
import AdminNavbar from '../Components/admin-componenets/AdminNavbar';
import AdminSidebar from '../Components/admin-componenets/sidebar';
import '../styles/adminOrders.css'
import NewTable from '../Components/admin-componenets/newTable';
import { useGlobalContext } from '../Components/context';
const AdminOrders = () => {
  const {isetIsSortOpen, closeOverlay, closeSort, dropdownPosition, setDropdownPosition, isSortOpen, setIsSortOpen, openSort} = useGlobalContext()
    return ( 
        <>
          <AdminNavbar/>
          <div className="main-container">
            <AdminSidebar/>
            <div className="sub-container orders-admin">
                <div className="heading">
                  <div>
                     <h3>Orders</h3>
                     <p>1000 orders</p>
                  </div>
                  <div>
                       something
                  </div>
                </div>

                <div className="second-heading">
                  <div className='input-container'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='icon' width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g opacity="0.5">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45958 0C13.1243 0 16.9185 3.79428 16.9185 8.45896C16.9185 10.6597 16.074 12.667 14.6919 14.1734L17.4114 16.8873C17.6659 17.1418 17.6668 17.5535 17.4123 17.808C17.2855 17.9366 17.1178 18 16.951 18C16.7851 18 16.6183 17.9366 16.4906 17.8098L13.7383 15.0651C12.2904 16.2246 10.4546 16.9188 8.45958 16.9188C3.79491 16.9188 -0.000244141 13.1236 -0.000244141 8.45896C-0.000244141 3.79428 3.79491 0 8.45958 0ZM8.45958 1.30298C4.51329 1.30298 1.30274 4.51266 1.30274 8.45896C1.30274 12.4053 4.51329 15.6158 8.45958 15.6158C12.405 15.6158 15.6156 12.4053 15.6156 8.45896C15.6156 4.51266 12.405 1.30298 8.45958 1.30298Z" fill="#66BB6A"/>
                    </g>
                  </svg>
                     <input type="text" placeholder='Search for order ID, customer, order status or something...'/>
                  </div>
                  <aside>
                    <div onClick={openSort}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36032 15.079 9.55109 15 9.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75ZM6 11.25C6 11.0511 6.07902 10.8603 6.21967 10.7197C6.36032 10.579 6.55109 10.5 6.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 11.921 6.21967 11.7803C6.07902 11.6397 6 11.4489 6 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z" fill="#66BB6A"/>
                      </svg>
                      <p>Filter</p>
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22.5 18H19.5V15H18V18H15V19.5H18V22.5H19.5V19.5H22.5V18Z" fill="#66BB6A"/>
                      <path d="M12 21.0003H6V3.00026H12V7.50026C12.0012 7.89772 12.1596 8.27856 12.4407 8.5596C12.7217 8.84065 13.1025 8.99907 13.5 9.00026H18V12.0003H19.5V7.50026C19.5026 7.40169 19.4839 7.30372 19.4451 7.21309C19.4062 7.12246 19.3482 7.04132 19.275 6.97526L14.025 1.72526C13.959 1.65201 13.8778 1.59397 13.7872 1.55512C13.6966 1.51628 13.5986 1.49756 13.5 1.50026H6C5.60254 1.50144 5.2217 1.65986 4.94065 1.94091C4.6596 2.22195 4.50119 2.6028 4.5 3.00026V21.0003C4.50119 21.3977 4.6596 21.7786 4.94065 22.0596C5.2217 22.3407 5.60254 22.4991 6 22.5003H12V21.0003ZM13.5 3.30026L17.7 7.50026H13.5V3.30026Z" fill="#66BB6A"/>
                    </svg>
                    <p>Export</p>
                    </div>
                  </aside>
                </div>

                <NewTable/>
                
       
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
        
        isSortOpen&&(
          <div className="over-lay" onClick={closeOverlay }>
               
          </div>
        )
      }
        </>
     );
}
 
export default AdminOrders;