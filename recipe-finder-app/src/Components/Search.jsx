import React from 'react'
import { useState } from 'react';

const Search = ({query,handleInput,handleSearch }) => {
  return (
    <>
    <div className='text-center mt-9 '>
        <input className='p-3 bg-gray-400 w-3xl  text-2xl rounded-2xl' type="text" value={query} onChange={handleInput} placeholder='Search Recipe...' />
        <button className='border-gray-400 bg-amber-500 rounded-xs p-1 ml-3' onClick={handleSearch}>Search</button>
    </div>
        
    </>
  )
}

export default Search