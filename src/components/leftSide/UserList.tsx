import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

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
  const [users, setUsers] = useState(userList)

  return (
    <div className=''>
      <AnimatePresence>
        <div className='flex h-full w-full flex-col items-center justify-center'>
          {users.map((user, index) => (
            <motion.button
              key={user.id}
              className='px-7 flex h-20 w-full flex-row items-center justify-between
              bg-red-100 border hover:bg-purple-800 hover:transition hover:duration-300 hover:ease-in-out shadow-md'
              whileHover={{ scale: 1.01 }}
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                hidden: { opacity: 0, x: -100 , transition: { duration: 0.5 } },
                visible: { opacity: 1, x: 0 , transition: { duration: 0.5 , delay: index * 0.1, type: 'spring', bounce: 0.25 } },
                exit: { opacity: 0, x: -100 }
              }}
            >
              <div className='flex flex-row items-center justify-start'>
                <img src={user.avatar} alt='' className='h-12 w-12 rounded-full' />
                <div className='ml-2 flex flex-col items-start justify-center'>
                  <span className='text-md font-semibold'>{user.name}</span>
                  <span className='text-sm text-gray-400'>{user.lastMessage}</span>
                </div>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='text-sm text-gray-400'>{user.lastOnline}</span>
                <div className={`h-3 w-3 rounded-full ${user.isOnline ? 'bg-green-400' : 'bg-red-400'}`}></div>
              </div>
            </motion.button>
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}

export default UserList
