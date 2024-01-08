
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import { Home } from './Component/Home/Home';
import Details from './Component/Details/Details';

import Listing from './Component/Listing/ListingApi'
import Footer from './Footer'
import PlaceOdr from './Component/Booking/placeOrder'
import Register from './Component/auth/Register'
import Login from './Component/auth/Login'
import { ViewOrder } from "./Component/Booking/viewOrder"

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      
      <Route exact path="/" component={Home}  ></Route>
     
     
      <Route exact  path="/details" component={Details}></Route>
      <Route exact path="/placeOrder/:res_name" component={PlaceOdr}></Route>
      <Route exact  path="/listing/:mealId" component={Listing}></Route>
     <Route exact path="/register" component={Register}></Route>
     <Route exact path="/login" component={Login}></Route>
     <Route path="/viewOrder" component={ViewOrder} />
    
    
   
      
    </div>
    
    
    </BrowserRouter>

  );
}


export default App;
