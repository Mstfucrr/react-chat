import React from 'react'
import LeftSide from '@/components/leftSide'
import Chat from '@/components/chat'

const Main = () => {
    return (
        // sayfanın tam ortasında büyük kare şeklinde bir alan oluşturduk
        <div className='h-[750px] md:w-4/5 sm:w-4/5 w-full max-w-[1000px] bg-red-100 mx-auto mt-20 rounded-2xl
        flex flex-row justify-between items-center shadow-2xl
        '>
            <LeftSide />
            <Chat />
        </div>
    )
}

export default Main