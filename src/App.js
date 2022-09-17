import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>


      </Routes>

    </div>
  );
}

export default App;
