
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../styles/SideBarProfile.scss";

export default function SideBarProfile() {

  const navigate = useNavigate();



  const handleClick = (e) => {
      e.preventDefault();
      navigate(`/profile/${e.target.name}`);

  };




  return (
    <div className="sidebarr">
      <div className="center">
        <ul>
          <p className="title">BUYER</p>
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>
              
              <span>Reputation</span>
            </li>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>
              
              <span>Notifications</span>
            </li>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <li>
          
              <span></span>
            </li>
          </Link>
          <p className="title">SELLER</p>
          <li>
            
            <span>Reputation</span>
          </li>
          <li>
           
            <span>Notifications</span>
          </li>
          <p className="title">BUDGET</p>
          <li>
           
            <span>Notifications</span>
          </li>
        
            <li>
              <button name='chats' onClick={handleClick}>Chats</button>
            </li>
    

          <p className="title">ORDERS</p>

            <li>
              
              <button name='orders' onClick={handleClick}>List Orders</button>
            </li>


        </ul>
      </div>
    </div>
  );
};

