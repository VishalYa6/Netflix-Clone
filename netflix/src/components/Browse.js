import React, { useEffect } from 'react'
import Header from './header'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';



const Browse = () => {
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);
  const navigate = useNavigate();
  
 //my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();


  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    
  }, [navigate, user]);





  return (
    <div>
      <Header />
      <div>
        {
          toggle ? <SearchMovie/> : (
            <>
                 <MainContainer/>
                 <MovieContainer/>
            </>
          )
        }       
      </div>
    </div>
  )
}

export default Browse