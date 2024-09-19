import './App.css';
import AuthImageSection from './Components/authImageSection';
import CartPopularEvents from './Components/cartPopularEvent';
import PasswordResetConfirmation from './Components/confirmForgetPass';
import CreateEventForm from './Components/createEvents';
import FeaturedEvents from './Components/featuredEvents';
import ForgetPassOne from './Components/forgetPassOne';
import ForgetPassThre from './Components/ForgetPassThree';
import ForgetPassTwo from './Components/forgetPassTwo';
import HeroSection from './Components/HeroSection';
// import Navbar from './Components/Navbar';
import SigninPage from './Components/signin';
import SignIn from './Components/signin';
import SignupPage from './Components/signup';
import Applauders from './Pages/applauders';
import CartPageOne from './Pages/cartPageOne';
import CartPageTwo from './Pages/cartPageTwo';
import ContactUs from './Pages/ContactUsPage';
import CreateEventPage from './Pages/createEventpage';
import CreateEventAdmin from './Pages/createEventsAdmin';
import EditEventPage from './Pages/EditEventPage';
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
import Navigations from './Components/Navigations/navigations';
import ProtectedRoute from './Components/Protected';
import AdminDashBoard from './Pages/adminDashboardPage';
import Table from './Components/admin-componenets/table';
import AdminOrders from './Pages/adminOrdersPage';
import NewTable from './Components/admin-componenets/newTable';
import Users from './Pages/adminUsersPage';
import AdminSingleUser from './Pages/adminSingleUser';
import AdminNotifications from './Pages/adminNotifications';
import AdminRevenue from './Pages/adminRevenue';
import AdminSignIn from './Pages/adminSignInPage';
import AdminForgetPassword from './Pages/adminForgetPassword';
import AdminResetPass from './Pages/adminResetPassword';
import AdminEventsPage from './Pages/adminEvents.Page';
import AdminSingleEvent from './Pages/adminSingleEvent';


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
        {/* <Route path="/" element={<ProtectedRoute element={<HomePage/>} />} /> */}
        <Route path="/" element={<HomePage/>} />
        <Route path='/orders' element={<ProtectedRoute element={<Orders />} />} />
        <Route path='/create-event' element={<ProtectedRoute element={<CreateEventPage />} />} />
        <Route path='/events' element={
            <>
              <Navigations />
              <FeaturedEvents />
            </>
          } />
        <Route path='/notifications' element={<ProtectedRoute element={<NotificationPage />} />} />
        <Route path='/user-profile' element={<ProtectedRoute element={<UserProfilePage />} />} />
        <Route path='/eventInfoUsers/:id' element={<EventInfoUser/>}/>
        
        {/* admin pages */}
        <Route path='/admin/admin-dashboard' element={<AdminDashBoard/>}/>
        <Route path='/admin/orders-table' element={<NewTable/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/admin/orders' element={<AdminOrders/>}/>
        <Route path='/admin/Revenue' element={<AdminRevenue/>}/>
        <Route path='/admin/notifications' element={<AdminNotifications/>}/>
        <Route path='/admin/users/user' element={<AdminSingleUser/>}/>
        <Route path='/admin/notification' element={<Users/>}/>
        <Route path='/admin/auth' element={<AdminSignIn/>}/>
        <Route path='/admin/forget' element={<AdminForgetPassword/>}/>
        <Route path='/admin/reset' element={<AdminResetPass/>}/>
        <Route path='/admin/events' element={<AdminEventsPage/>}/>
        <Route path='/admin/events/more-info' element={<AdminSingleEvent/>}/>

        
      
        
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
