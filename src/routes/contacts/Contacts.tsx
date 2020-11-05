import React from "react";
import ContactItemList from "./components/ContactItemList";
import data, { ChatItemType } from "./data/data";

function Contacts() {
  return (
    <>
      {data.map((item: ChatItemType) => (
        <ContactItemList
          key={item.id}
          id={item.id}
          name={item.name}
          avatar={item.avatar}
        />
      ))}
    </>
  );
}

export default Contacts;
