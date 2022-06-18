import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Detail from "./pages/Detail.jsx";
import Register from "./pages/Register.jsx";
import ConfirmPassword from "./pages/ConfirmPassword.jsx";
import SendEmail from "./pages/SendEmail.jsx";
import RecoveryPassword from "./pages/RecoveryPassword.jsx";
import Seller from "./pages/Seller.jsx";
import ProfileUser from "./pages/ProfileUser.jsx";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import CreateService from "./pages/CreateService";
import { useSelector } from "react-redux";
import Payment from "./components/Payment.jsx";
import MyPublications from "./pages/MyPublications";
import DetailEdit from "./pages/DetailEdit";

function App() {
  const { rdcr_isAuth } = useSelector((state) => state);
  return (
    <Routes>
      {rdcr_isAuth && <Route exact path="/orders" element={<Orders />} />}
      {rdcr_isAuth && <Route exact path="/favorites" element={<Favorites />} />}
      {rdcr_isAuth && (
        <Route exact path="/seller/add-service" element={<CreateService />} />
      )}

      <Route exact path="/seller" element={<Seller />} />
      <Route exact path="/user" element={<ProfileUser />} />
      <Route exact path="/recoverypass" element={<RecoveryPassword />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/confirm" element={<ConfirmPassword />} />
      <Route exact path="/sendEmail/:type" element={<SendEmail />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route exact path="/Home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/prueba" element={<Orders />} />
      <Route exact path="/MyPublications" element={<MyPublications />} />
      <Route exact path="/DetailEdit" element={<DetailEdit />} />
    </Routes>
  );
}

export default App;

/* 
home
services
favorites
orders
*/
