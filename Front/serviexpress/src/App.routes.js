import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
