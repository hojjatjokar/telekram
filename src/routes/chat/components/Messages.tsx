import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const Wrapper = styled.div`
  flex: 1;
`;

type Props = {
  messages: [
    {
      isMe: boolean;
      text: string;
    }
  ];
};

function Messages({ messages }: Props) {
  return (
    <Wrapper>
      {messages.map((item) => (
        <Message key={item.text} text={item.text} isMe={item.isMe} />
      ))}
    </Wrapper>
  );
}

export default Messages;
