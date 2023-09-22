import React from 'react'
import '../index.css'
import './Style.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div  className='nav h-16  bg-slate-50  shadow-sm text-xl flex justify-between items-center fixed w-screen z-50 top-0 '>
            <h className='text-2xl px-8  text-slate-600'>Web<span className='text-blue-400 text-3xl'>Services</span></h>
            <ul className='flex gap-12 px-10 text-slate-600 max-[760px]:hidden '>
              <li className='hover:text-blue-400 cursor-pointer text-xl '>
                <NavLink   to='/' className=' pt-4 pb-4 pl-2 pr-2'>Home</NavLink></li>
                <li className='hover:text-blue-400 cursor-pointer text-xl '>
                <NavLink to='/services' className=' pt-4 pb-4 pl-2 pr-2'>Services</NavLink></li>
                <li className='hover:text-blue-400 cursor-pointer text-xl '>
                <NavLink to='/about' className=' pt-4 pb-4 pl-2 pr-2'>About</NavLink></li>
                <li className='hover:text-blue-400 cursor-pointer text-xl    '>
                <NavLink to='/contact' className=' pt-4 pb-4 pl-2 pr-2'>Contacts</NavLink></li>
            </ul>
                <img src='img/menu.svg' className='h-8 hidden max-[760px]:flex pr-8'/>
      </div>
    </>
  )
}

export default Navbar
