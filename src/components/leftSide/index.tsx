import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import UserList from './UserList'

type Props = {}

function LeftSide({}: Props) {
  return (
    <section className='h-full w-1/3 rounded-l-xl'>
      <Navbar />
      <Searchbar />
      <UserList />
    </section>
  )
}

export default LeftSide
