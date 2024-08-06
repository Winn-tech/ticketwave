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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path='/create-event'  element={<CreateEventPage/>}/>

        {/* help pages */}
        <Route path='/help' element={ <HelpPage/>}/>
        <Route path='/FAQ' element={ <FAQ/>}/>
        <Route path='/contact-us' element={ <ContactUs/>}/>
         
         {/* more pages */}
        <Route path='/applauders' element={<Applauders/>}/>
        <Route path='/seat-warmers' element={<SeatWarmers/>}/>
        <Route path='/volunteers' element={<Volunteers/>}/>
        <Route path='/extras' element={<Extras/>}/>

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
