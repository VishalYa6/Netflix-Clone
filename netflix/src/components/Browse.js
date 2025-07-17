import React from 'react'
import Header from './header'
import { useSelector } from 'react-redux'

const Browse = () => {
  const user = useSelector(store => store.app.user);
  if(!user){
    
  }
  return (
    <div>
        <Header/>
        <div>
            
        </div>
    </div>
  )
}

export default Browse