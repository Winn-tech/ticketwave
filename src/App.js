import './App.css';
import CartPopularEvents from './Components/cartPopularEvent';
import PasswordResetConfirmation from './Components/confirmForgetPass';
import CreateEventForm from './Components/createEvents';
import FeaturedEvents from './Components/featuredEvents';
import ForgetPassOne from './Components/forgetPassOne';
import ForgetPassThre from './Components/ForgetPassThree';
import ForgetPassTwo from './Components/forgetPassTwo';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import SigninPage from './Components/signin';
import SignIn from './Components/signin';
import SignupPage from './Components/signup';
import CartPageOne from './Pages/cartPageOne';
import CartPageTwo from './Pages/cartPageTwo';
import CreateEventPage from './Pages/createEventpage';
import CreateEventAdmin from './Pages/createEventsAdmin';
import EditEventPage from './Pages/EditEventPage';
import EventInfoUser from './Pages/eventInfoUsers';
import HomePage from './Pages/Home';

function App() {
  return (
    <div className="App">
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
        <CartPageTwo/>
    </div>
  );
}

export default App;
