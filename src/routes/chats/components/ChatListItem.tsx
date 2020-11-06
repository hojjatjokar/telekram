import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from '../../../components/Avatar';
import { fromNow } from '../../../utils/date';

const Wrapper = styled(Link)`
  border-bottom: 1px solid #eee;
  padding: 8px 9px 11px;
  display: flex;
  text-decoration: none;
  height: 70px;
  overflow: hidden;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 16px;
  color: #222;
  margin-bottom: 4px;
`;

const SubTitle = styled.p`
  color: #808080;
  font-size: 16px;
`;

const Time = styled.time`
  width: 60px;
  color: #b3b3b3;
  font-size: 12px;
  padding: 4px;
`;

const Main = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

type Props = {
  avatar: string;
  date: string;
  id: number;
  message: string;
  name: string;
};

function ChatListItem({ id, name, avatar, message, date }: Props) {
  return (
    <Wrapper to={`/chat?p=${id}`}>
      <Avatar src={avatar} alt={name} />
      <Main>
        <Title>{name}</Title>
        <SubTitle>{message}</SubTitle>
      </Main>
      <Time dateTime={date}>{fromNow(date)}</Time>
    </Wrapper>
  );
}

export default ChatListItem;
