import React from 'react'
import { IChatUser } from '@/types/Type'
const Navbar = () => {
  const myAccount: IChatUser = {
    uid: 1,
    name: 'Mustafa Uçar',
    photoURL: 'https://avatars.githubusercontent.com/u/48890162?v=4'
  }

  return (
    <div className='flex w-full flex-row items-center justify-between rounded-tl-xl bg-purple-800 px-3 py-6'>
      {/* leftside Navbar logo and account  */}
      <h1 className='text-md m-0 font-semibold text-red-200'>
        <span className='mr-1 border px-2 font-bold text-primary'>D</span>
        aily Shop
      </h1>

      <div className='flex flex-row items-center'>
        <img src={myAccount.photoURL} alt='my account' className='h-10 w-10 rounded-full' />
        <span className='ml-2 text-xs font-semibold text-red-100'>{myAccount.name}</span>
      </div>
    </div>
  )
}

export default Navbar
