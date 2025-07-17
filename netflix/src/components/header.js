import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import {useSelector} from "react-redux" ;




const Header = () => {
  const user = useSelector((store) => store.app.user);

  return (
    <div className='absolute z-10 flex w-[100vw] items-center justify-between bg-gradient-to-b px-6 from-black'>
      <img className='w-56' src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png" alt="netflix-logo" />
      {
        user && (
          <div className='flex items-center'>
            <IoIosArrowDropdown size="24px" color="white" />
            <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
            <div className='ml-4'>
              <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
              <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Header