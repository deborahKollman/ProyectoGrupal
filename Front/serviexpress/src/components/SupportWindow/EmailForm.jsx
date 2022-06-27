import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar } from "@mui/material";
import styled, { css } from "styled-components";
import "./Styles.scss";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Sending Email", email);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);

    

  };

  return (
    <MySection loading={loading.toString()}>
      <div style={{ height: "0px" }}>
        <div className="fontTop" />
      </div>

      <CircularProgress
        className="transition-5"
        style={{
          zIndex: loading ? "10" : "-1",
          opacity: loading ? "1" : "0",
          position: "absolute",
          top: "calc(100% - 56%)",
          left: "calc(50% - 41px)",
        }}
      />

      <MySectionUnder>
        <Avatar
          alt="Remy Sharp"
          src="https://i.ibb.co/nfPP3tS/OIP.jpg"
          sx={{ width: 56, height: 56, margin: "9px" }}
        />

        <div className="topText">
          Welcome to our <br /> support center.
        </div>

        <MyForm onSubmit={handleSubmit}>
          <input
            className="inp_email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </MyForm>

        <span className="bottomText">
          Enter your email <br /> to get started.
        </span>
      </MySectionUnder>
    </MySection>
  );
};

export default EmailForm;

const MySection = styled.section`
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 1;
  ${({ loading }) => css`
    opacity: ${loading === "true" ? "0.7" : "1"};
  `}

  .fontTop {
    position: relative;
    top: -45px;
    width: 100%;
    height: 308px;
    background-color: #ffc107;
    transform: skewY(-12deg);
  }
`;

const MySectionUnder = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 60px;

  .topText {
    position: relative;
    width: 100%;
    color: white;
    font-size: 24px;
    font-weight: 600;
  }
  .bottomText {
    position: absolute;
    width: 100%;
    top: 60%;
    color: #ffc107;
    font-size: 24px;
    font-weight: 600;
  }
`;

const MyForm = styled.form`
  position: relative;
  width: 100%;
  margin-top: 20px;

  .inp_email {
    width: 66%;
    text-align: center;
    outline: none;
    padding: 12px;
    border-radius: 12px;
    border: 2px solid #ffc107;
  }
`;
/* 

      <Avatar
        alt="Remy Sharp"
        src="https://i.ibb.co/nfPP3tS/OIP.jpg"
        sx={{ width: 56, height: 56, margin: "9px" }}
      />

*/
