import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { act_getUsersCount, getOrders } from '../redux/action.js'

const Widget = ({ type }) => {
  const { rdcr_users_count, orders } = useSelector((state) => state)  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(act_getUsersCount())
    dispatch(getOrders())
  },[dispatch, rdcr_users_count, orders])


  let data;
  
    //temporary
    const diff = 20;
  
    switch (type) {
      case "user":
        data = {
          title: "USERS",
          count: rdcr_users_count,
          isMoney: false,
          link_title: "See all users",
          link: '/users',
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
      case "order":
        data = {
          title: "ORDERS",
          count: orders.length,
          isMoney: false,
          link: '/orders',
          link_title: "View all orders",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        };
        break;
      case "earning":
        data = {
          title: "EARNINGS",
          isMoney: true,
          count: 100,
          link_title: "View net earnings",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
      case "balance":
        data = {
          title: "BALANCE",
          isMoney: true,
          count: 100,
          link_title: "See details",
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        };
        break;
      default:
        break;
    }
  
    return (
      <div className="widget"> 
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "$"} {data.count}
          </span>
          <Link to={`${data.link}`} className="link">{data.link_title}</Link>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
          </div>
          {data.icon}
        </div>
      </div>
    );
  };

export default Widget;
