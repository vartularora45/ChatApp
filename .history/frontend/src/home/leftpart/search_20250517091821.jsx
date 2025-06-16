import React from 'react'

const search = () => {
  return (
    <div
      className="flex items-center justify-center h-16 shadow-md mt-">
       <div class="flex items-center border border-gray-300 rounded-full px-4 py-2 w-64 transition-all duration-300 focus-within:shadow-md focus-within:border-blue-500">
  <i class="ri-search-line text-gray-500 text-xl mr-2 transition-transform duration-300 group-focus-within:scale-110"></i>
  <input
    type="text"
    placeholder="Search..."
    class="outline-none bg-transparent w-full text-gray-800 placeholder-gray-400 focus:placeholder-opacity-0 transition-all duration-300"
  />
</div>

    </div>
  )
}

export default search