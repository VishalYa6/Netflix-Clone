import React from 'react'
import { Banner_URL } from '../utils/constant'


const MovieCard = ({posterPath}) => {
  if(posterPath === null ) return null ;
  return (
    <div className='w-48 pr-2'>
        <img src={`${Banner_URL}/${posterPath}`} alt='movie-banner'/>
    </div>
  )
}

export default MovieCard