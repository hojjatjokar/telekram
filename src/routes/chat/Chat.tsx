import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getQueryStringParams } from "../../utils/url";
import Messages from "./components/Messages";
import Form from "./components/Form";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 93vh;
`;

function Chat() {
  let location = useLocation();
  let queries = getQueryStringParams(location.search);

  return (
    <Wrapper>
      <Messages />
      <Form />
    </Wrapper>
  );
}

export default Chat;
