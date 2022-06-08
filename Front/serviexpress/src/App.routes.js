import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import RecpveryPassword from './pages/RecoveryPassword.jsx';
import Seller from './pages/Seller.jsx';

function App() {
  return (
    <Routes>
      <Route exact path="/seller" element={<Seller/>} />

      <Route exact path="/recoverypass/:token" element={<RecpveryPassword/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<LandingPage/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
