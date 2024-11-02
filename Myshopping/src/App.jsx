import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import Purchasehistory from "./Purchasehistory";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import './App.css';
import { useSelector } from "react-redux";
function App()
{
  const cart=useSelector((state)=>state.cart);
    const total=cart.reduce((sum,item)=>sum+item.quantity,0);
  return(<>  
  <center>
  <BrowserRouter>
        
        <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/veg">Veg</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/nonveg">Non-veg</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/cart">Cart({total})</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/purchasehistory">Purchasehistory</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/aboutus">Aboutus</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/contactus">Contactus</Link>&nbsp;&nbsp;&nbsp;&nbsp;
       
        <Routes>
        
            <Route path="/home" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<Nonveg />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/purchasehistory" element={<Purchasehistory />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />

        </Routes>

      </BrowserRouter>
      </center>
  </>)
}
export default App;