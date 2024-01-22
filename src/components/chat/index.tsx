import React from 'react'

type Props = {}


function Chat({}: Props) {
  return <section className='h-full w-2/3 rounded-r-2xl bg-red-200'>
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold text-red-800'>Chat</h1>
    </div>
  </section>
}

export default Chat
