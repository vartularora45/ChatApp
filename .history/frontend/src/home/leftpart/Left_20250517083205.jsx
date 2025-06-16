import React from 'react'

const Left = () => {
  return (
    <div
    className='w-[30%] h-screen bg-slate-900 text-white'
    >
        <div>
             <input type="text" placeholder='Search' className='border-2 m-8 p-3 rounded-xl w-[70%]' />
             <button
                className='w-[10%]'
             ><div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
  <i class="ri-search-eye-line text-xl text-gray-700"></i>
</div>
</button>
        </div>

    </div>
  )
}

export default Left