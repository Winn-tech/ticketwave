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
import AdminDashBoard from './Pages/adminDashboardPage';
import Table from './Components/admin-componenets/table';
import AdminOrders from './Pages/adminOrdersPage';
import NewTable from './Components/admin-componenets/newTable';
import Users from './Pages/adminUsersPage';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* authentication */}
        <Route path="/login" element={ <SigninPage/> } />
        <Route path="/register" element={ <SignupPage/> } />

        {/* single pages */}
        <Route path="/" element={ <HomePage/> } />
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/create-event' element={<CreateEventPage/>}/>
        <Route path='/events'  element={<FeaturedEvents/>}/>
        <Route path='/notifications'  element={<NotificationPage/>}/>
        <Route path='/user-profile'  element={<UserProfilePage/>}/>
        <Route path='/eventInfoUsers' element={<EventInfoUser/>}/>
        <Route path='/forget-password' element={<ForgetPassOne/>}/>
        <Route path='/forget-password/reset' element={<ForgetPassTwo/>}/>
        
        {/* admin pages */}
        <Route path='/admin/admin-dashboard' element={<AdminDashBoard/>}/>
        <Route path='/admin/orders-table' element={<NewTable/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        {/* <Route path='/admin/users/user' element={<NewTable/>}/> */}
        {/* <Route path='/admin/orders' element={<AdminOrders/>}/> */}
      

        {/* cart pages */}
        <Route path='/Cart'  element={<CartPageOne/>}/>
        <Route path='/Carttwo'  element={<CartPageTwo/>}/>

        {/* help pages */}
        <Route path='/help' element={ <HelpPage/>}/>
        <Route path='/FAQ' element={ <FAQ/>}/>
        <Route path='/contact-us' element={ <ContactUs/>}/>
         
         {/* more pages */}
        <Route path='/more/applauders' element={<Applauders/>}/>
        <Route path='/more/seat-warmers' element={<SeatWarmers/>}/>
        <Route path='/more/volunteers' element={<Volunteers/>}/>
        <Route path='/more/extras' element={<Extras/>}/>

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
