import React from "react";
import { Link } from "react-router-dom";
import { fromNow } from "../../../utils/date";

type Props = {
  avatar: string;
  date: string;
  id: number;
  message: string;
  name: string;
};

function ChatListItem({ id, name, avatar, message, date }: Props) {
  return (
    <Link to={`/chat?p=${id}`}>
      {name}
      <br />
      <img src={avatar} alt={name} />
      <br />
      {message}
      <br />
      {fromNow(date)}
      <br />
      <hr />
    </Link>
  );
}

export default ChatListItem;
