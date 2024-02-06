import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

const Searchbar = () => {
  return (
    <div className='my-2 flex h-14 w-auto flex-row items-center justify-around'>
      <span className='p-input w-full px-3'>
        <TextField id='outlined-basic' label='Ara' variant='outlined' fullWidth className='bg-white' size='small'
        />
      </span>
    </div>
  )
}

export default Searchbar
