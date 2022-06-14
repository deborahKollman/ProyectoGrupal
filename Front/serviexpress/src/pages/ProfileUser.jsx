import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import "./styles/SellerRegister.scss";
import BurgerButton from "../components/NavBar/NavBar";
import { MyButtonTwo, MyTextField } from "../elements/Forms";
import {UploadImg} from "../components/UploadImg";
import FormControl from '@mui/material/FormControl';
import { postProfileUser } from "../redux/action";

const ProfileUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {reg_user} = useSelector((state)=> state);
 
  const [input, setInput] = useState({
    email: reg_user.email,
    password: reg_user.password,
    name: "",
    last_name: "",
    avatar_image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcmZpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "",
    phone_number: "",
    rol: "client"
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const [errorAuth,setErrorAuth] = useState({
    name: "",
    last: "",
    descrip: "",
    phone: "",
    


});


  const validate = {
    text: /^[a-zA-z]+$/,
    number: /^[0-9]+$/

}




  function handleSubmit(e) {
    e.preventDefault();
    if(!validate.text.test(input.name)){
        setErrorAuth({...errorAuth,name:"This input only takes words.."})
        

    }
    else if(!validate.text.test(input.last_name)) {
      setErrorAuth({...errorAuth,last:"This input only takes words..",name:""})
      

    }
    else if(!validate.text.test(input.description)) {
      setErrorAuth({...errorAuth,descrip:"This input only takes words..",last:""})
  

    }
    else if(!validate.number.test(input.phone_number)) {
      setErrorAuth({...errorAuth,phone:"This input only takes numbers..",descrip:""})
   
    }

    else {
    dispatch(postProfileUser(input))
    setInput({
      email:"",
      password: "",
      name: "",
      last_name: "",
      avatar_image: "",
      description: "",
      phone_number: "",
      rol: ""
    })
    navigate('/Home')

  }
  }





  return (
    <div className="page-seller_register">
      <BurgerButton />
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
      <section className="sel_reg-one">
        <h1 className="profileUserTitle">Personal Info</h1>

        <FormControl>
        <MyTextField
          required
          label="FULL NAME"
          value={input.name}
          type="text"
          name="name"
          onChange={handleChange}
          />
        {<p  className="error-div">{errorAuth.name}</p>}

        <MyTextField
          required
          label="LAST NAME"
          value={input.last_name}
          type="text"
          name="last_name"
          onChange={handleChange}
          />
           {<p className="error-div">{errorAuth.last}</p>}
        <UploadImg />
        <MyTextField
          id="outlined-multiline-static"
          label="DESCRIPTION"
          required
          multiline
          rows={4}
          name="description"
          placeholder="Tell us about your business"
          value={input.description}
          onChange={handleChange}
          />
           {<p className="error-div">{errorAuth.descrip}</p>}

        <MyTextField
          required
          label="PHONE NUMBER"
          value={input.phone_number}
          type="tel"
          name="phone_number"
          minlength="9"
          maxlength="14"
          onChange={handleChange}
          />
           {<p className="error-div">{errorAuth.phone}</p>}
        <MyButtonTwo variant="contained" type="submit" onChange={(e)=>{handleSubmit(e)}}>Continue</MyButtonTwo>
        </FormControl>
      </section>
    </form>
    </div>
  );
};

export default ProfileUser;
