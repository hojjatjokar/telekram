import React from 'react';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';
import Avatar from './Avatar';
import { getQueryStringParams } from '../utils/url';
import contacts from '../routes/contacts/data/data';

const Nav = styled.nav`
  background-color: #5682a3;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  margin: 0;
  padding: 14px 16px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 9px 16px;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`;

const ButtonLink = styled(Link)`
  padding: 9px 16px;
  background: transparent;
  border: none;
  color: #fff;
`;

function Header() {
  const location = useLocation();
  const history = useHistory();
  let queries = getQueryStringParams(location.search);
  let senderId = queries.p;
  let chatee = contacts.filter((item) => item.id === Number(senderId))[0];

  return (
    <Nav>
      {location.pathname === '/chats' ? (
        <Button>
          <Icon name="telegram" size={24} />
        </Button>
      ) : (
        <Button onClick={() => history.goBack()}>
          <Icon name="angle-left" size={24} />
        </Button>
      )}

      <Title>
        {location.pathname === '/chats'
          ? 'TeleKram'
          : location.pathname.substring(1)}{' '}
      </Title>

      {location.pathname === '/chats' ? (
        <ButtonLink to="/contacts">Contacts</ButtonLink>
      ) : null}
      {location.pathname === '/chat' ? (
        <ButtonLink to="/contact?p=1">
          <Avatar src={chatee.avatar} alt={chatee.name} size="small" />
        </ButtonLink>
      ) : null}
      {location.pathname !== '/chat' && location.pathname !== '/chats' ? (
        <div></div>
      ) : null}
    </Nav>
  );
}

export default Header;
