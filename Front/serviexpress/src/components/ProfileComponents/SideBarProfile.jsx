
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../styles/SideBarProfile.scss";
import {useSelector,useDispatch} from 'react-redux';
import { getBudgets } from "../../redux/action";
import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


export default function SideBarProfile({user}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notif = useSelector(state => state.budgetsId);

  console.log(user);

  useEffect(() => {
      dispatch(getBudgets(user))

  },[dispatch,user])



  const handleClick = (e) => {
      e.preventDefault();
      navigate(`/profile/${e.target.name}`);

  };


  return (
    <div className="sidebarr">
      <div className="center">
        <ul>
          <p className="title">BUYER</p>
          <li>
              
              <button name='buyer-reputation' onClick={handleClick} className='btn'>Reputation</button>
            </li>
          
       
            
              
            {/*   <span>{notif.length}</span> */}
             
           
        

          <p className="title">SELLER</p>
          <li>
              
              <button name='seller-reputation' onClick={handleClick} className='btn'>Reputation</button>
            </li>
        
           
          {/*   <span>Notifications</span>  */}
           
    {/*         <Box sx={{ color: 'action.active' }}>
           <Badge color="secondary" variant="dot">
          <MailIcon />
          </Badge>
          </Box> */}

          <p className="title">BUDGET</p>
        
           
            {/*   <span>Notifications</span>  */}
          
        
            <li>
              <button name='chats' onClick={handleClick} className='btn'>Chats</button>
            </li>
    

          <p className="title">ORDERS</p>

            <li>
              
              <button name='orders' onClick={handleClick} className='btn'>List Orders</button>
            </li>


        </ul>
      </div>
    </div>
  );
};

