import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'



const VideoBackground = ({movieId}) => {

  const trailerMovie = useSelector(store => store.movie.trailerMovie)
  useMovieById(movieId);

  return (
    <div className='w-screen'>
        <iframe 
        className='w-screen aspect-video'
         src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=ZTT0yQtJXjkDZvZx&autoplay=1&mute=1`}
          title="YouTube video player" 
          frameBorder="0" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowFullScreen>

          </iframe>
    </div>
  )
}

export default VideoBackground