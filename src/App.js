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
        <Route path='/admin/orders-table' element={<Table/>}/>
      
        
        {/* cart pages */}
        <Route path='/Cart' element={<ProtectedRoute element={<CartPageOne />} />} />
        <Route path='/Cart/checkout' element={<ProtectedRoute element={<CartPageTwo />} />} />

        {/* help pages */}
        <Route path='/help' element={<ProtectedRoute element={<HelpPage />} />} />
        <Route path='/FAQ' element={<ProtectedRoute element={<FAQ />} />} />
        <Route path='/contact-us' element={<ProtectedRoute element={<ContactUs />} />} />

        {/* more pages */}
        <Route path='/applauders' element={<ProtectedRoute element={<Applauders />} />} />
        <Route path='/seat-warmers' element={<ProtectedRoute element={<SeatWarmers />} />} />
        <Route path='/volunteers' element={<ProtectedRoute element={<Volunteers />} />} />
        <Route path='/extras' element={<ProtectedRoute element={<Extras />} />} />

      </Routes>


       {/* <SigninPage/> */}
       {/* <SignupPage/> */}
       {/* <ForgetPassOne/> */}
       {/* <ForgetPassTwo/> */}
       {/* <ForgetPassThre/> */}
       {/* <PasswordResetConfirmation/> */}
       {/* <HomePage/> */}
       {/* <HeroSection/> */}
       {/* <FeaturedEvents/> */}
        {/* <CreateEventForm/> */}
        {/* <CreateEventPage/> */}
        {/* <CreateEventAdmin/> */}
        {/* <EventInfoUser/> */}
        {/* <EditEventPage/> */}
        {/* <CartPageOne/> */}
        {/* <CartPopularEvents/> */}
        {/* <CartPageTwo/> */}
        {/* <HelpPage/> */}
        {/* <FAQ/> */}
        {/* <SeatWarmers/> */}
        {/* <Applauders/> */}
        {/* <Volunteers/> */}
        {/* {/* <Extras/> */}
        {/* <Orders/> */}
        {/* <ContactUs/>s */}
        {/* <AuthImageSection/> */}
    </div>
  );
}

export default App;
