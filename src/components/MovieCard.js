import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className="w-[250px] md:w-[180px] lg:w-[200px] rounded-lg overflow-hidden shadow-md hover:scale-125 transform transition duration-300 cursor-pointer">
      <img src={IMG_CDN_URL+ poster_path} alt="movie poster" className="w-full h-full object-cover" />
    </div>
  )
}

export default MovieCard
