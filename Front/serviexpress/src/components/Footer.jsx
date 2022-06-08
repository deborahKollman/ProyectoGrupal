import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';

const logo = require("../assets/icons/log.png");

const Footer = () => {
  return (
    <MyFooter>
        
        <figure>
          <img src={logo} alt="" />
        </figure>
        <IconButton sx={{color: 'black'}}>
            <GitHubIcon sx={{ fontSize: 70 }}/>
        </IconButton>
    </MyFooter>
  )
}

export default Footer

const MyFooter = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color : #fcdc3c;
    padding: 10px 30px;
    figure{
        margin: 0;
    }
`