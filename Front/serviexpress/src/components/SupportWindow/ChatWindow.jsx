import React, { useState } from "react";
import styled, { css } from "styled-components";
import ChatEngine from "./ChatEngine";
import EmailForm from "./EmailForm";

const ChatWindow = (props) => {

  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);


  return <MySection visible={props.visible}>

    <EmailForm
      pSetUser= { pU => setUser(pU) }
      pSetChat= { pC => setChat(pC) }
      pVisible= { user === null || chat === null }
    />

    <ChatEngine 
      pVisible = { user !== null && chat !== null }
      pChat= { chat }
      pUser= { user }
    /> 

  </MySection>;
};

export default ChatWindow;

//  ==============================  STYLES  ==============================

const MySection = styled.section`
  ${(props) => css`
    opacity: ${props.visible ? "1" : "0"};
  `}
  // Size
  width: 420px;
  height: 530px;
  max-width: calc(100% - 48px);
  max-height: calc(100% - 48px);
  background-color: white;
  // Position
  position: 'fixed';
  bottom: 116px;
  right: 24px;
  // Border
  border-radius: 12px;
  border: 2px solid #fcdc3c;
  overflow: hidden;
  // Shadow
  box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.33);
`;
