import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar/Navbar';
import Appointment from './pages/Appointment/Appointment';
import About from './pages/About/About';
import Reviews from './pages/Reviews/Reviews';
import Contactus from './pages/Contactus/Contactus';
import Signin from './pages/Signin/Signin';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Signup from './pages/Signin/Signup';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<Contactus></Contactus>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
