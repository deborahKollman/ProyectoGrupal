import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Detail from './pages/Detail.jsx'

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="detail" element={<Detail></Detail>}></Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
