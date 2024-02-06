import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import UserList from './UserList'
import { motion } from 'framer-motion'


function LeftSide() {
  
  return (
    <motion.section
      className="absolute z-40 flex h-full flex-col rounded-l-xl sm:relative 
      bg-gradient-to-b from-red-100 to-purple-300 "
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={{
        hidden: { scaleX: 0 , opacity: 0 , width: 0 , minWidth: 0 },
        visible: { scaleX: 1 , opacity: 1 , width: "33%" , minWidth: "350px" },
        exit: { scaleX: 0 , opacity: 0 , width: "0%" , minWidth: 0 }
      }}
      transition={{ duration: 0.5 , type: 'spring' , bounce: 0.1 }}
    >
      <Navbar />
      <Searchbar />
      <UserList />
    </motion.section>
  )
}

export default LeftSide
