import { BrowserRouter as Router , Routes , Route, BrowserRouter } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Electronic from './components/Electronic';
import Jwellerys from "./pages/Jwellerys";
import Men from "./pages/Men";
import Women from "./pages/Women";







function App() {
   return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/jwellery' element={<Jwellerys/>}/>
       <Route path='/electronic' element={<Electronic/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </Router>
  )
}

export default App
