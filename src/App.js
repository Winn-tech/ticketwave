import './App.css';
import PasswordResetConfirmation from './Components/confirmForgetPass';
import FeaturedEvents from './Components/featuredEvents';
import ForgetPassOne from './Components/forgetPassOne';
import ForgetPassThre from './Components/ForgetPassThree';
import ForgetPassTwo from './Components/forgetPassTwo';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import SigninPage from './Components/signin';
import SignIn from './Components/signin';
import SignupPage from './Components/signup';
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
       <HomePage/>
       {/* <HeroSection/> */}
       {/* <FeaturedEvents/>s */}
    </div>
  );
}

export default App;
