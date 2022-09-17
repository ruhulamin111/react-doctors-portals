import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar/Navbar';
import Appointment from './pages/Appointment/Appointment';
import About from './pages/About/About';
import Reviews from './pages/Reviews/Reviews';
import Contactus from './pages/Contactus/Contactus';
import Signin from './pages/Signin/Signin';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<Contactus></Contactus>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>


      </Routes>

    </div>
  );
}

export default App;
