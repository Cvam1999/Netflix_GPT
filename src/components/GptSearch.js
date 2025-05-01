import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { Background_img_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className=''>
         <div className="absolute -z-10">
        <img
          className="w-full h-full"
          src={Background_img_URL}
          alt="Background-image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
