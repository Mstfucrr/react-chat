import { IChatUser, IChatMessage } from '@/types/Type'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import TopBar from '../topBar'

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

  const ref = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) 
      ref.current.scrollTop = ref.current.scrollHeight;    
  }, [messages]);

  return (
    <motion.section className={`h-full w-full bg-red-200 ${isOpen ? 'rounded-r-2xl' : 'rounded-2xl'}`}>
      <div className='flex h-full max-h-fit w-full flex-col'>
        {/* chat topbar */}
        <TopBar isOpen={isOpen} />
        {/* chat body */}
        <div className='flex h-full w-full overflow-y-auto'>
          <div className='flex h-full w-full flex-col justify-between'>
            {/* chat messages*/}
            <div
              className='flex h-full w-full flex-col overflow-y-auto overflow-x-hidden scroll-smooth'
              ref={ref}
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
            <div className={`flex flex-row items-center justify-between bg-purple-600 px-3 py-2 ${isOpen ? 'rounded-br-2xl' : 'rounded-b-2xl'}`}>
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
                      id: messages.length + 2,
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
                      id: messages.length + 2,
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
