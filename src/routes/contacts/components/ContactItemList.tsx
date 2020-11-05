import React from "react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  avatar: string;
};

function ContactItemList({ id, name, avatar }: Props) {
  return (
    <Link to={`/contact?p=${id}`}>
      {name}
      <br />
      {avatar}
    </Link>
  );
}

export default ContactItemList;
