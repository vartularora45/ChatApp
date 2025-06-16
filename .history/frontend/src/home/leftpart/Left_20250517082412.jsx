import React from 'react'

const Left = () => {
  return (
    <div
    className='w-[30%] h-screen bg-slate-900 text-white'
    >
        <div>
             <input type="text" placeholder='Search' className='border-2 m-8 p-2 rounded-xl w-[70%]' />
             <button
                className='bg-blue-500 text-white p-2 rounded-xl m-8 w-[20%] hover:bg-blue-600 transition duration-300'
             ></button>
        </div>

    </div>
  )
}

export default Left