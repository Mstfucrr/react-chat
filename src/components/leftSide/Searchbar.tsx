import React from 'react'
import { InputText } from 'primereact/inputtext'

const Searchbar = () => {
  return (
    <div className='my-2 flex h-10 w-full flex-row items-center justify-around bg-red-200'>
      <span className='p-input w-full'>
        <InputText placeholder='Search' className='h-8 w-full' type='text' />
      </span>
    </div>
  )
}

export default Searchbar
