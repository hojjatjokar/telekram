import React from 'react';
import ChatListItem from './components/ChatListItem';
import data, { ChatItemType } from './data/data';

function Chats() {
  return (
    <>
      {data.map((item: ChatItemType) => (
        <ChatListItem
          name={item.name}
          avatar={item.avatar}
          message={item.latestMessage}
          date={item.latestMessageDate}
          key={item.id}
          id={item.id}
        />
      ))}
    </>
  );
}

export default Chats;
