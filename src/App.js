import './App.css';
import ForgetPassOne from './Components/forgetPassOne';
import ForgetPassThre from './Components/ForgetPassThree';
import ForgetPassTwo from './Components/forgetPassTwo';
import SigninPage from './Components/signin';
import SignupPage from './Components/signup';
import Applauders from './Pages/applauders';
import CartPageOne from './Pages/cartPageOne';
import CartPageTwo from './Pages/cartPageTwo';
import ContactUs from './Pages/ContactUsPage';
import CreateEventPage from './Pages/createEventpage';
import EventInfoUser from './Pages/eventInfoUsers';
import Extras from './Pages/extras';
import FAQ from './Pages/FAQ';
import HelpPage from './Pages/helpPage';
import HomePage from './Pages/Home';
import Orders from './Pages/orders';
import { Routes, Route } from "react-router-dom"
import SeatWarmers from './Pages/seatWarmers';
import Volunteers from './Pages/volunteers';
import NotificationPage from './Pages/NotificationPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfilePage from './Pages/userProfilePage';
import ProtectedRoute from './Components/Protected';
import AdminDashBoard from './Pages/adminDashboardPage';
import AdminOrders from './Pages/adminOrdersPage';
import Users from './Pages/adminUsersPage';
import AdminSingleUser from './Pages/adminSingleUser';
import AdminNotifications from './Pages/adminNotifications';
import AdminRevenue from './Pages/adminRevenue';
import AdminSignIn from './Pages/adminSignInPage';
import AdminForgetPassword from './Pages/adminForgetPassword';
import AdminResetPass from './Pages/adminResetPassword';
import AdminEventsPage from './Pages/adminEvents.Page';
import AdminSingleEvent from './Pages/adminSingleEvent';
import ProtectedAdminRoute from './Components/protectedAdmin';
import AdminForgetPasswordMain from './Pages/AdminForgetPasswordMain';
import EventsPage from './Pages/eventsPage';
import EventAttendance from './Pages/eventOwnersSignIn';
import EventOwnerAttendance from './Pages/eventOwnerAttendance';
import ProtectedCreatorRoute from './Components/protectedCreator';
import ApprovedAttendance from './Pages/approvedAttendance';



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* authentication */}
        <Route path="/login" element={ <SigninPage/> } />
        <Route path="/register" element={ <SignupPage/> } />
        <Route path='/forget-password/email' element={<ForgetPassOne/>}/>
        <Route path='/forget-password/sent' element={<ForgetPassTwo/>}/>
        <Route path='/forget-password' element={<ForgetPassThre/>}/>

        {/* single pages */}
        <Route path="/" element={<HomePage/>} />
        <Route path='/orders' element={<ProtectedRoute element={<Orders />} />} />
        <Route path='/create-event' element={<ProtectedRoute element={<CreateEventPage />} />} />
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/notifications' element={<ProtectedRoute element={<NotificationPage />} />} />
        <Route path='/user-profile' element={<ProtectedRoute element={<UserProfilePage />} />} />
        <Route path='/eventInfoUsers/:id' element={<EventInfoUser/>}/>
        
        {/* admin pages */}
        <Route path='/admin/admin-dashboard' element={<ProtectedAdminRoute element={<AdminDashBoard/>} /> }/>
        <Route path='/admin/users' element={<ProtectedAdminRoute element={<Users/>} />} />
        <Route path='/admin/orders' element={<ProtectedAdminRoute element={<AdminOrders/>} />} />
        <Route path='/admin/Revenue' element={<ProtectedAdminRoute element={<AdminRevenue/>} />} />
        <Route path='/admin/notifications' element={<ProtectedAdminRoute element={<AdminNotifications/>} />} />
        <Route path='/admin/users/:id' element={<ProtectedAdminRoute element={<AdminSingleUser/>} />} />
        <Route path='/admin/notification' element={<ProtectedAdminRoute element={<Users/>} />} />
        <Route path='/admin/auth' element={<AdminSignIn/>}/>
        <Route path='/admin/forget' element={<AdminForgetPassword/>}/>
        <Route path='/admin/reset' element={<AdminResetPass/>}/>
        <Route path='/admin/forget-password' element={<AdminForgetPasswordMain/>}/>
        <Route path='/admin/events' element={<ProtectedAdminRoute element={<AdminEventsPage/>} />} />
        <Route path='/admin/events/more-info/:id' element={<ProtectedAdminRoute element={<AdminSingleEvent/>} />} />

        
      {/* event owners */}
      <Route path='/events-signin' element={<EventAttendance/>}/>
      <Route path='/events-attendance' element={<ProtectedCreatorRoute element={<EventOwnerAttendance/>}/>}/>
      <Route path='/events-attendance/tickets-verified/:id' element={<ApprovedAttendance/>}/>
        
        {/* cart pages */}
        <Route path='/Cart' element={<ProtectedRoute element={<CartPageOne />} />} />
        <Route path='/Cart/checkout' element={<ProtectedRoute element={<CartPageTwo />} />} />

        {/* help pages */}
        <Route path='/help' element={ <HelpPage/>}/>
        <Route path='/help/FAQ' element={ <FAQ/>}/>
        <Route path='/help/contact-us' element={ <ContactUs/>}/>
         
         {/* more pages */}
        <Route path='/more/applauders' element={<Applauders/>}/>
        <Route path='/more/seat-warmers' element={<SeatWarmers/>}/>
        <Route path='/more/volunteers' element={<Volunteers/>}/>
        <Route path='/more/extras' element={<Extras/>}/>

      </Routes>


      
    </div>
  );
}

export default App;
