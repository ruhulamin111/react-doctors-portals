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
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppoint from './pages/Dashboard/MyAppoint';
import User from './pages/Dashboard/User';
import AddDoctor from './pages/Dashboard/AddDoctor';
import Review from './pages/Dashboard/Review';
import RequireAdmin from './pages/RequireAuth/RequireAdmin';
import ManageDoctor from './pages/Dashboard/ManageDoctor';
import Payment from './pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}>
        </Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyAppoint></MyAppoint>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='user' element={<RequireAdmin><User></User></RequireAdmin>}></Route>
          <Route path='adddoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='managedoctor' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>

        </Route>
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
