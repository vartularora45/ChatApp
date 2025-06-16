import React from 'react'

const Left = () => {
  return (
    <div
    className='w-[30%] h-screen bg-slate-900 text-white'
    >
        <div
        className='flex'
        >
             <input type="text" placeholder='Search' className='w-[70%] m-10 p-2 h-10 rounded-xl border-2-blue ' />
             <button
             className='w-20 h-20 mt-12 mr- flex align-center justify-center rounded-full bg-slate-900'
             ><i className=" w-20 h-20 text-xl ri-search-eye-line l-4"></i></button>
        </div>

    </div>
  )
}

export default Left