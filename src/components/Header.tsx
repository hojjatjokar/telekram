import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import styled from "styled-components";
import Icon from "./Icon";
import Menu from "./Menu";

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

function Header() {
  const [menuVisible, setMenuVisibility] = useState(false);
  const location = useLocation();
  const history = useHistory();

  return (
    <Nav>
      {location.pathname === "/chat" ? (
        <Button onClick={() => history.goBack()}>
          <Icon name="angle-left" size={24} />
        </Button>
      ) : null}
      {location.pathname === "/contact" ? (
        <Button onClick={() => history.goBack()}>
          <Icon name="angle-left" size={24} />
        </Button>
      ) : null}
      <Title>TeleKram</Title>

      <Button
        onClick={() => {
          setMenuVisibility(!menuVisible);
        }}
      >
        <Icon name="menu" size={24} />
      </Button>
      {menuVisible ? <Menu /> : null}
    </Nav>
  );
}

export default Header;
