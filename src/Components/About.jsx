import React from 'react'
import Common from './Common'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <>
     <div  className='flex justify-around items-center mt-36'>
      <div className='all-txt flex flex-col   items-start -mt-10'>
      <h className=' text-slate-800 text-[40px] ' >Welcome to our website</h>
      <h className=' text-blue-400 text-[40px]  font-medium'>WebServices</h>
      <p className=' text-slate-500 text-xl mt-5 mb-5'>we are the team of developer making website & helps in your business</p>
      <button className='h-12 w-36  border-blue-400 border-[2px] rounded-full text-blue-600 mt-5 hover:bg-blue-400 hover:text-white text-lg   transition-all'><NavLink  to='/contact'>Contact Us</NavLink></button>
      </div>
      <div className='img'>
        <img src='./img/landing.png ' className='animated '></img>
      </div>
    </div>
      
    </>
  )
}

export default About
