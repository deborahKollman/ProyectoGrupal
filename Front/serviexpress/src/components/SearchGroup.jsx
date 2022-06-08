import React, {useState} from 'react'
// import {getVideoGameByName} from '../../redux/action'
// import {useDispatch} from 'react-redux'
import styled from "styled-components";

const SearchGroup = () => {

  // const xDispatch = useDispatch();
  
  const [crntSearch, setSearch] = useState('');
  
  const mOnClickButton = async (e) => {
    // xDispatch(getVideoGameByName(crntSearch));
    console.log("DISPACHO ->",crntSearch);
  }

  return (
    <MyForm className= "header-input-container">
        <input 
          placeholder="Search Service" 
          onChange={(e) => {setSearch(e.target.value)}}
          className="header-input"
          value={crntSearch}
        />
        <button 
          onClick={mOnClickButton} 
          className="second-icon"/>
    </MyForm>
  )
}

export default SearchGroup

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------


const MyForm = styled.form`
    @media (min-width:400px) {
      width: 36vw;
      margin: 0 2vw;
    }
    margin: 222px 0;
    width: 100%;
    height: 40px;
    border: #dfe1e500;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 3px;
    border: 2px solid #000000;
    &:hover {
      background-color: #ffffff4f;
      box-shadow: 0 1px 2px 0 #000000;
    }
    .search-icon {
      background-image: url("https://i.ibb.co/1XPF0Vs/earth-globe-with-continents-maps.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin-left: 15px; 
      width: 18px;
      height: 18px;
    }
    .header-input{
      width: 100%;
      border: none;
      outline: none;
      height: 40px;
      padding: 0 16px;
      background: transparent;
      color: black;
      font-weight: bold;
      &::placeholder{
        color: rgba(19, 1, 1, 0.719); font-weight: bold;
      }
    }
    .second-icon {
      background-image: url("https://i.ibb.co/5Rxd8d1/loupe.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin-right: 15px;
      background-color: transparent;
      outline: none;
      border: none;
      width: 18px;
      height: 18px; 
      cursor: pointer;
    }
`