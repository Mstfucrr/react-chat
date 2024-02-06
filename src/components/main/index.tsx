import React, { useState } from 'react'
import LeftSide from '@/components/leftSide'
import Chat from '@/components/chat'
import { AnimatePresence } from 'framer-motion'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    // sayfanın tam ortasında büyük kare şeklinde bir alan oluşturduk
    <div
      className='relative mx-auto flex h-screen w-full max-w-[1200px] flex-row justify-between rounded-2xl
        shadow-2xl sm:mt-20 sm:h-[750px] md:w-4/5'
    >
      {/* leftside */}
      <button
        className='absolute left-0 top-0 z-50 h-10 w-10 rounded-full bg-red-200'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className='flex items-center justify-center text-xl font-bold text-red-800 transition-all duration-300'
          style={{ transform: `${isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'}` }}
        >
          <ArrowForwardIosIcon fontSize='small' />
        </span>
      </button>
      <AnimatePresence>{isOpen && <LeftSide />}</AnimatePresence>

      <Chat isOpen={isOpen} />
    </div>
  )
}

export default Main
