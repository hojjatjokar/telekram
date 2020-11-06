import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../../components/Avatar';
import { getQueryStringParams } from '../../utils/url';
import data from '../contacts/data/data';

const Header = styled.div`
  border-bottom: 1px solid #eee;
  padding: 8px 9px 11px;
  display: flex;
  text-decoration: none;
  height: 70px;
  overflow: hidden;
  align-items: center;
`;

const Item = styled.div`
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
`;

const Title = styled.h2`
  font-size: 16px;
  color: #222;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  margin-bottom: 3px;
  margin-top: 0;
  color: #999;
`;

const Main = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

function ContactInfo() {
  let location = useLocation();
  let queries = getQueryStringParams(location.search);
  const info = data.filter((item) => item.id === Number(queries.p))[0];

  return (
    <div>
      <Header>
        <Avatar src={info.avatar} alt={info.name} />
        <Main>
          <Title>{info.name}</Title>
        </Main>
      </Header>
      <Item>
        <Subtitle>Phone</Subtitle>
        <Title>{info.phone}</Title>
      </Item>
      <Item>
        <Subtitle>Username</Subtitle>
        <Title>{info.username}</Title>
      </Item>
      {info.about ? (
        <Item>
          <Subtitle>About</Subtitle>
          <Title>{info.about}</Title>
        </Item>
      ) : null}
      <Item>
        <Title>
          <Link to={`chat?p=${info.id}`}>Send Message</Link>
        </Title>
      </Item>
    </div>
  );
}

export default ContactInfo;
