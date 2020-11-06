import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Messages from './components/Messages';
import Form from './components/Form';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 93vh;
`;

function Chat() {
  const [messages, setMessages] = useState([] as any);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const send = (message: { text: string; isMe: boolean }) => {
    setMessages([...messagesRef.current, message]);
  };

  return (
    <Wrapper>
      <Messages messages={messages} />
      <Form send={send} />
    </Wrapper>
  );
}

export default Chat;
