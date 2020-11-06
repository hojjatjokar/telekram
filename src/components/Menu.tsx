import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  position: absolute;
  right: 16px;
  top: 42px;
  margin-top: 6px;
  left: auto;
  width: 195px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.175);
  list-style: none;
  background: #fff;
`;

const MenuItemLink = styled(NavLink)`
  padding: 15px 17px 14px;
  font-size: 14px;
  display: block;
  clear: both;
  font-weight: 400;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  text-decoration: none;
`;

function Menu() {
  return (
    <List>
      <li>
        <MenuItemLink to="/contacts">Contacts</MenuItemLink>
      </li>
      <li>
        <MenuItemLink to="/chats">Chats</MenuItemLink>
      </li>
      <li>
        <MenuItemLink to="/404">Logout</MenuItemLink>
      </li>
    </List>
  );
}

export default Menu;
