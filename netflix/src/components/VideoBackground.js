import React from 'react'

const VideoBackground = () => {
  return (
    <div className='w-screen'>
        <iframe 
        className='w-screen aspect-video'
         src="https://www.youtube.com/embed/Ld7UO-sQdF0?si=ZTT0yQtJXjkDZvZx&autoplay=1&mute=1"
          title="YouTube video player" 
          frameborder="0" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>

          </iframe>
    </div>
  )
}

export default VideoBackground