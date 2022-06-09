import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Detail from './pages/Detail.jsx'
import Register from './pages/Register.jsx';
import RecpveryPassword from './pages/RecpveryPassword.jsx';
import Seller from './pages/Seller.jsx';
import ProfileUser from './pages/ProfileUser.jsx';
import CreateService from './pages/CreateService.jsx';


function App() {
  return (
    <Routes>
      <Route exact path="/seller/add-service" element={<CreateService/>} />
      <Route exact path="/seller" element={<Seller/>} />
      <Route exact path="/user" element={<ProfileUser/>} />
      <Route exact path="/recoverypass/:token" element={<RecpveryPassword/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="detail" element={<Detail></Detail>}></Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
