import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";

const Wrapper = styled(Link)`
  border-bottom: 1px solid #eee;
  padding: 8px 9px 11px;
  display: flex;
  text-decoration: none;
  height: 70px;
  overflow: hidden;
  align-items: center;
`;

const Main = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const Title = styled.h2`
  font-size: 16px;
  color: #222;
  margin-bottom: 4px;
`;

type Props = {
  id: number;
  name: string;
  avatar: string;
};

function ContactItemList({ id, name, avatar }: Props) {
  return (
    <Wrapper to={`/contact?p=${id}`}>
      <Avatar src={avatar} alt={name} />
      <Main>
        <Title>{name}</Title>
      </Main>
    </Wrapper>
  );
}

export default ContactItemList;
