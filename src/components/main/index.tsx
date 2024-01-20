import React from 'react'
import LeftSide from '@/components/leftSide'
import Chat from '@/components/chat'

const Main = () => {
  return (
    // sayfanın tam ortasında büyük kare şeklinde bir alan oluşturduk
    <div
      className='mx-auto mt-20 flex h-[750px] w-full max-w-[1000px] flex-row items-center justify-between
        rounded-2xl bg-red-100 shadow-2xl sm:w-4/5 md:w-4/5
        '
    >
      <LeftSide />
      <Chat />
    </div>
  )
}

export default Main
