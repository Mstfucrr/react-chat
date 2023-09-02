import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'

type Props = {}

function LeftSide({}: Props) {
  return (
    <section className='w-1/3 h-full rounded-l-xl'>
        <Navbar />
        <Searchbar />
    </section>
  )
}

export default LeftSide