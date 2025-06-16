import React from 'react'

const Left = () => {
  return (
    <div
    className='w-[30%] h-screen bg-slate-900 text-white'
    >
        <div>
             <input type="text" placeholder='Search' className='border-2 m-8 p-2 rounded-xl w-[70%]' />
             <button
                className='w-[30'
             ><i class="ri-search-eye-line"></i></button>
        </div>

    </div>
  )
}

export default Left