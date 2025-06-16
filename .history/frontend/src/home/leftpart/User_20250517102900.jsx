import React from 'react'

const User = () => {
  return (
    <div>
        <div>
            <div
        className="flex items-center justify-between px-6 py-4 hover:bg-gray-700 cursor-pointer transition-colors duration-300">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
          <h1 className='ml-4 flex flex-col items-center text-white'>
            <span className="ml-4 text-lg font-semibold">Spider Person</span>
            <p>offline</p>
          </h1>
        </div>
      </div>
        </div>
    </div>
  )
}

export default User