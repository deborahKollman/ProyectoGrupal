import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Detail from './pages/Detail.jsx'
import Register from './pages/Register.jsx';
import RecoveryPassword from './pages/RecoveryPassword.jsx';
import Seller from './pages/Seller.jsx';
import ProfileUser from './pages/ProfileUser.jsx';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Home from './pages/Home'
import CreateService from './pages/CreateService'
import HomePage from './pages/HomePage.jsx';


function App() {

  const isAutn = true;

  return (
    <Routes>

      {isAutn && ( <Route exact path="/orders" element={<Orders/>} /> )}
      {isAutn && ( <Route exact path="/favorites" element={<Favorites/>} /> )}

      {isAutn && ( <Route exact path="/seller/add-service" element={<CreateService/>} /> ) }
      
      <Route exact path="/seller" element={<Seller/>} />
      <Route exact path="/user" element={<ProfileUser/>} />
      <Route exact path="/recoverypass/:token" element={<RecoveryPassword/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />

      <Route exact path="/" element={<LandingPage/>} />
      <Route path='/detail' element={<Detail/>}/>
      <Route exact path="/Home" element={<Home/>}/> 
      <Route exact path='HomePage' element={<HomePage/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )}


export default App;

/* 
home
services
favorites
orders
*/