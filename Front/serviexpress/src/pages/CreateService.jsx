import React, { useEffect } from "react";

import BurgerButton from "../components/NavBar/NavBar";
import "./styles/CreateService.scss";
import { MainPublication } from "../components/CreateService/List";
import { useDispatch } from "react-redux";
import {getPublications} from "../redux/action"
const CreateService = () => {

  // const [modal, setModal] = useState({ active: false, id: null });
  const xDispatch = useDispatch();

  useEffect(() => {
    xDispatch(getPublications());
  }, [xDispatch]);

  return (
    <div className="page-createService">
      <BurgerButton />
      {/* <BasicModal pModal={modal} pSetModal={setModal} /> */} 
      <MainPublication/>
      {/* <Form/> */}
    </div>
  );
};

export default CreateService;
/* 
          onChange={() => {
            console.log("object");
          }} */
