import { Avatar } from '@mui/material'
import React from 'react'


const TopBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`flex flex-row items-center justify-between ${isOpen ? 'rounded-tr-2xl' : 'rounded-t-2xl'} gap-x-8 bg-purple-700 px-3 py-6`}
    >
      <h1 className='text-md m-0 font-semibold text-red-200'>
        <span className='mr-1 border px-2 font-bold text-primary'>Chat</span>
      </h1>

      <div className='flex flex-row items-center'>
        <Avatar
          src='https://avatars.githubusercontent.com/u/48891985?v=4'
          alt='my account'
          className='h-10 w-10 rounded-full'
        />
        <span className='ml-2 text-xs font-semibold text-red-100'>my account</span>
      </div>
    </div>
  )
}

export default TopBar
