import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Detail from './pages/Detail.jsx'
import Register from './pages/Register.jsx';
<<<<<<< HEAD
import RecpveryPassword from './pages/RecoveryPassword.jsx';
import Home from './pages/Home'
=======
import RecoveryPassword from './pages/RecoveryPassword.jsx';
import Seller from './pages/Seller.jsx';
import ProfileUser from './pages/ProfileUser.jsx';
import CreateService from './pages/CreateService.jsx';
>>>>>>> 61d872850dc199051bb9d6b40911ef86c7eae677

function App() {
  return (
    <Routes>
      <Route exact path="/seller/add-service" element={<CreateService/>} />
      <Route exact path="/seller" element={<Seller/>} />
      <Route exact path="/user" element={<ProfileUser/>} />
      <Route exact path="/recoverypass/:token" element={<RecoveryPassword/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<LandingPage/>} />
<<<<<<< HEAD
      <Route path="/detail" element={<Detail></Detail>}></Route>

=======
<<<<<<< HEAD
      <Route exact path="/Home" element={<Home/>}
=======
      <Route exact path="detail" element={<Detail/>}/>
>>>>>>> 61d872850dc199051bb9d6b40911ef86c7eae677
>>>>>>> 89ec1bd04e661f97cd8b0dda042b45603f400b3b
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
