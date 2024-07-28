import './App.css';
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
import CreateEventPage from './Pages/createEventpage';
import CreateEventAdmin from './Pages/createEventsAdmin';
import EventInfoUser from './Pages/eventInfoUsers';
import HomePage from './Pages/Home';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <SigninPage/> } />
        <Route path="/register" element={ <SignupPage/> } />

        
        <Route path="/" element={ <HomePage/> } />
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
    </div>
  );
}

export default App;
