const data = [
  {
    id: 1,
    name: 'Freddie Mercury',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Freddie.svg',
    latestMessage: 'Barcelona',
    latestMessageDate: 'November 24 1991 12:30',
  },
  {
    id: 2,
    name: 'Elvis Presley',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Elvis.svg',
    latestMessage: "Can't Help Falling in Love",
    latestMessageDate: 'August 16 1977 12:30',
  },
  {
    id: 3,
    name: 'Aretha Franklin',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Aretha.svg',
    latestMessage: 'I Say a Little Prayer',
    latestMessageDate: 'August 16 2018 12:30',
  },
  {
    id: 4,
    name: 'Michael Jackson',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Michael.svg',
    latestMessage: 'Billie Jean',
    latestMessageDate: 'June 25 2009 12:30',
  },
  {
    id: 5,
    name: 'Whitney Houston',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Whitney.svg',
    latestMessage: 'Higher Love',
    latestMessageDate: 'February 11 2012 12:30',
  },
  {
    id: 6,
    name: 'Prince',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Prince.svg',
    latestMessage: 'Purple Rain',
    latestMessageDate: 'April 21 2016 12:30',
  },
  {
    id: 7,
    name: 'Marvin Gaye',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Marvin.svg',
    latestMessage: 'Ain\t No Mountain High Enough',
    latestMessageDate: 'April 1 1984 12:30',
  },
  {
    id: 8,
    name: 'Stevie Wonder',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Stevie.svg',
    latestMessage: 'Lean on me',
    latestMessageDate: 'October 14 2020 12:30',
  },
  {
    id: 9,
    name: 'Frank Sinatra',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Frank.svg',
    latestMessage: 'Fly me to the moon',
    latestMessageDate: 'May 14 1998 12:30',
  },
  {
    id: 10,
    name: 'Elton John',
    avatar: 'https://avatars.dicebear.com/api/avataaars/Elton.svg',
    latestMessage: "I'm gonna",
    latestMessageDate: 'August 16 1992 12:30',
  },
];

export type ChatItemType = {
  avatar: string;
  latestMessageDate: string;
  id: number;
  latestMessage: string;
  name: string;
};

export default data;
