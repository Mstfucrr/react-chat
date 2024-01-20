import React from 'react'

type Props = {}

const userList = [
  {
    id: 1,
    name: 'user1',
    avatar: 'https://avatars.githubusercontent.com/u/48890162?v=4',
    lastMessage: 'last message',
    lastOnline: '12:00',
    isOnline: true
  },
  {
    id: 2,
    name: 'user2',
    avatar: 'https://avatars.githubusercontent.com/u/48890162?v=4',
    lastMessage: 'last message',
    lastOnline: '14:00',
    isOnline: false
  },
  {
    id: 3,
    name: 'user3',
    avatar: 'https://avatars.githubusercontent.com/u/48890162?v=4',
    lastMessage: 'last message',
    lastOnline: '15:00',
    isOnline: true
  }
]

function UserList({}: Props) {
  return <div>UserList</div>
}

export default UserList
