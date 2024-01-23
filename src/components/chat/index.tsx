import { IChatUser, IChatMessage } from '@/types/Type'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

type Props = {
  isOpen: boolean
}

const myAccount: IChatUser = {
  uid: 1,
  name: 'Mustafa Uçar',
  photoURL: 'https://avatars.githubusercontent.com/u/48890162?v=4'
}

const messageTest: IChatMessage[] = [
  {
    id: 1,
    message: 'Hello world 1',
    createdAt: new Date(),
    from: {
      uid: 10,
      name: 'Mehmet',
      photoURL: 'https://avatars.githubusercontent.com/u/48890162?v=4'
    },
    to: myAccount
  },
  {
    id: 2,
    message: 'Hello world 2',
    createdAt: new Date(),
    from: myAccount,
    to: {
      uid: 10,
      name: 'Mehmet',
      photoURL: 'https://avatars.githubusercontent.com/u/48890162?v=4'
    }
  },
  {
    id: 4,
    message: 'Hello world 4',
    createdAt: new Date(),
    from: {
      uid: 10,
      name: 'Mehmet',
      photoURL: 'https://avatars.githubusercontent.com/u/48890162?v=4'
    },
    to: myAccount
  }
]

function Chat({ isOpen }: Props) {
  const [messages, setMessages] = useState<IChatMessage[]>(messageTest)
  const [sendMessageText, setSendMessageText] = useState<string>('')

  return (
    <motion.section className={`h-full w-full bg-red-200 ${isOpen ? 'rounded-r-2xl' : 'rounded-2xl'}`}>
      <div className='flex h-full max-h-fit w-full flex-col'>
        {/* chat topbar */}
        <div
          className={`flex flex-row items-center justify-between ${isOpen ? 'rounded-tr-2xl' : 'rounded-t-2xl'} gap-x-8 bg-purple-700 px-3 py-6`}
        >
          {/* leftside Navbar logo and account  */}
          <h1 className='text-md m-0 font-semibold text-red-200'>
            <span className='mr-1 border px-2 font-bold text-primary'>Chat</span>
          </h1>

          <div className='flex flex-row items-center'>
            <img
              src='https://avatars.githubusercontent.com/u/48891985?v=4'
              alt='my account'
              className='h-10 w-10 rounded-full'
            />
            <span className='ml-2 text-xs font-semibold text-red-100'>my account</span>
          </div>
        </div>

        {/* chat body */}
        <div className='flex h-full w-full overflow-y-auto'>
          <div className='flex h-full w-full flex-col justify-between'>
            {/* chat messages*/}
            <div
              className='flex h-full w-full flex-col overflow-y-auto'
            >
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  className={`my-3 flex h-auto w-auto max-w-sm items-center justify-end gap-x-5 rounded-2xl p-4 ${
                    message.from.uid === myAccount.uid
                      ? 'flex-row self-end rounded-tr-none bg-green-700 sm:mr-3'
                      : 'flex-row-reverse self-start rounded-tl-none bg-blue-700 sm:ml-3'
                  }`}
                  initial={{ opacity: 0, scale: 0, x: message.from.uid === myAccount.uid ? 100 : -100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, type: 'spring', bounce: 0.5 }}
                >
                  <div className='flex flex-col items-start justify-center gap-y-1 text-xs font-semibold'>
                    <span className='text-red-200'>{message.from.name}</span>
                    <span className='text-red-100'>{message.message}</span>
                  </div>
                  <img src={message.from.photoURL} alt='my account' className='h-8 w-8 rounded-full' />
                </motion.div>
              ))}
            </div>

            {/* chat input */}
            <div className='flex flex-row items-center justify-between rounded-b-2xl bg-purple-600 px-3 py-2'>
              <textarea
                value={sendMessageText}
                onChange={e => setSendMessageText(e.target.value)}
                className='h-14 flex-1 overflow-y-auto bg-transparent text-sm font-semibold text-black outline-none'
                placeholder='Type a message'
                style={{ resize: 'none' }}
              />
              <button
                className='h-8 min-w-min rounded-full bg-red-100'
                disabled={sendMessageText === ''}
                onClick={() => {
                  setMessages([
                    ...messages,
                    {
                      id: 5,
                      message: sendMessageText,
                      createdAt: new Date(),
                      from: myAccount,
                      to: {
                        uid: 10,
                        name: 'Mehmet',
                        photoURL: 'https://avatars.githubusercontent.com/u/48890162?v=4'
                      }
                    }
                  ])
                }}
              >
                <span className='px-5 py-2 text-xs font-semibold'>Send</span>
              </button>

              {/* for test pull message */}
              <button
                className='h-8 min-w-min rounded-full bg-red-100'
                onClick={() => {
                  setMessages([
                    ...messages,
                    {
                      id: 5,
                      message:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
                      createdAt: new Date(),
                      from: {
                        uid: 10,
                        name: 'Mehmet',
                        photoURL: 'https://avatars.githubusercontent.com/u/48890162?v=4'
                      },
                      to: myAccount
                    }
                  ])
                }}
              >
                <span className='px-5 py-2 text-xs font-semibold'>Pull</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Chat
