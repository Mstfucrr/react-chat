import React from 'react'
import { IChatUser } from '@/types/Type'
const Navbar = () => {

    const myAccount: IChatUser = {
        uid: 1,
        name: 'Mustafa Uçar',
        photoURL: 'https://avatars.githubusercontent.com/u/48890162?v=4'
    }

    return (
        <div className='w-full flex flex-row justify-between items-center bg-purple-800 py-6 px-3 rounded-tl-xl'>
            {/* leftside Navbar logo and account  */}
            <h1 className="m-0 font-semibold text-md text-red-200">
                <span className="text-primary font-bold border px-2 mr-1">D</span>
                aily Shop</h1>

            <div className="flex flex-row items-center">
                <img src={myAccount.photoURL} alt="my account" className="w-10 h-10 rounded-full" />
                <span className="text-red-100 font-semibold ml-2 text-xs">{myAccount.name}</span>
                
            </div>

        </div>
    )
}

export default Navbar