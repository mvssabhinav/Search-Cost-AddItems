import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './componends/Home';
import About from './componends/About';
import Services from './componends/Services';
import Navbar from './componends/Navbar';
import Error from './componends/Error';
import Otp from './componends/Otp';
import Login from './componends/Login';
import Registration from './componends/Registration';
import FetchingAllData from './componends/FetchingAllData';
import Cart from './componends/Cart';

function App() {
  return (
    <div className="App">

     
      <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/servises' element={<Services/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/adminpage' element={<FetchingAllData/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
