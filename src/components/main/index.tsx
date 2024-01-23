import React, { useState } from 'react'
import LeftSide from '@/components/leftSide'
import Chat from '@/components/chat'

const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    // sayfanın tam ortasında büyük kare şeklinde bir alan oluşturduk
    <div
      className='relative mx-auto sm:mt-20 flex sm:h-[750px] h-screen w-full max-w-[1200px] flex-row
        justify-between rounded-2xl shadow-2xl md:w-4/5'
    >
      {/* leftside */}
      <button className='absolute z-50 top-0 left-0 h-10 w-10 rounded-full bg-red-200'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-red-800 font-bold text-xl flex items-center justify-center transition-all duration-300'
          style={{ transform: `${isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'}` }}
        >
          {'>'}
        </span>
      </button>
      <LeftSide isOpen={isOpen} />

      <Chat isOpen={isOpen} />
    </div>
  )
}

export default Main
