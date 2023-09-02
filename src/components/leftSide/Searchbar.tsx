import React from 'react'
import { InputText } from "primereact/inputtext";

const Searchbar = () => {
    return (
        <div className='w-full bg-red-200 h-10 my-2 flex justify-around items-center flex-row'>
            <span className="p-input w-11/12">
                <InputText placeholder="Search"
                    className='w-full h-8'
                    type={
                        "text"
                    }
                />

            </span>
        </div>
    )
}

export default Searchbar