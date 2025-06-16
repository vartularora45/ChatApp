import React from 'react'

const Left = () => {
  return (
    <div
    className='w-[30%] h-screen bg-slate-900 text-white'
    >
        <div
        className='flex'
        >
             <input type="text" placeholder='Search' className='border-2 m-8 p-3 rounded-xl w-[70%]' />
             <button
             className='w-20 h-20 mt-3 flex align-center justify-center rounded-full bg-slate-900'
             ><i class="ri-search-eye-line"></i></button>
        </div>

    </div>
  )
}

export default Left