import React from "react";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./styles/Home.scss";
import Widget from "./Widget";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
      </div>
    </div>
  );
};

export default Home;
