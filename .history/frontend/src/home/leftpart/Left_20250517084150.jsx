import React from 'react'

const Left = () => {
  return (
    <div
    className='w-[30%] h-screen bg-slate-900 text-white'
    >
        <div
        className='flex'
        >
             <input type="text" placeholder='Search' className='border-2 m-6 p-2 rounded-2xl w-[80%]' />
             <button
             className='w-20 h-20 mt-12 mr-6 flex align-center justify-center rounded-full bg-slate-900'
             ><i className="w-20 h-20 text-xl ri-search-eye-line"></i></button>
        </div>

    </div>
  )
}

export default Left