import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-6 p-3 md:px-28 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='pt-6 text-xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex gap-4 my-2'>
      <button className='bg-white text-black font-bold rounded-lg px-3 py-1 md:px-10 md:py-2 text-xl hover:opacity-50'> ▷ Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white rounded-lg px-10 py-2 text-xl bg-opacity-80'>🛈 More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
