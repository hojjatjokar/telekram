import React from 'react';
import styled from 'styled-components';

const Warpper = styled.div`
  display: flex;
  flex-flow: row-reverse;
  align-items: flex-end;
`;

const SentMessage = styled.div`
  padding: 7px 10px;
  width: 70%;
  margin: 7px 10px;
  border-radius: 3px;
  background: #e4ecf2;
  overflow-wrap: anywhere;
`;

const Time = styled.time`
  margin-bottom: 10px;
`;

const ReceivedMessage = styled.div`
  padding: 7px 10px;
  width: 70%;
  margin: 7px 10px;
  border-radius: 3px;
  background: #f1f1f1;
  overflow-wrap: anywhere;
`;

type Props = {
  text: string;
  isMe: boolean;
};

function Message({ text, isMe }: Props) {
  if (isMe) {
    return (
      <Warpper>
        <SentMessage>{text}</SentMessage>
      </Warpper>
    );
  }
  return <ReceivedMessage>{text}</ReceivedMessage>;
}

export default Message;
