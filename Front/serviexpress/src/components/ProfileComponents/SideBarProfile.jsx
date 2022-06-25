import styles from '../styles/SideBarProfile.scss'
import { Link } from "react-router-dom";



export default function SideBarProfile() {

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
            
            <span>Chats</span>
          </li>

          <p className="title">ORDERS</p>
          <li>
          
            <span>List Orders</span>
          </li>

        </ul>
      </div>
    </div>
  );
};

