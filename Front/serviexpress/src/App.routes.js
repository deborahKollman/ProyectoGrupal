import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
<<<<<<< HEAD
import Detail from './pages/Detail.jsx'
=======
import Register from './pages/Register.jsx';
import RecpveryPassword from './pages/RecoveryPassword.jsx';
>>>>>>> 7951e5e88dcc2ed0140514912d9b899c7b8a4aab

function App() {
  return (
    <Routes>
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
