import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import UserList from './UserList'

type Props = {
  isOpen: boolean
}

function LeftSide({ isOpen }: Props) {
  return (
    <section
      className={`absolute z-40 flex h-full flex-col rounded-l-xl transition-all duration-300 sm:relative ${isOpen ? 'w-1/3 min-w-fit' : 'w-0 scale-x-0'} origin-left bg-red-100`}
    >
      <Navbar />
      <Searchbar />
      <UserList />
    </section>
  )
}

export default LeftSide
