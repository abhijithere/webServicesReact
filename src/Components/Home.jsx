import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
     <div  className='flex justify-around items-center mt-36 max-[1250px]:flex-col'>
      <div className='all-txt flex flex-col   items-start -mt-10 max-[600px]:w-[90%]'>
      <h className=' text-slate-800 text-[40px] ' >Grow your business with</h>
      <h className=' text-blue-400 text-[40px]  font-medium'>WebServices</h>
      <p className=' text-slate-500 text-xl mt-5 mb-5'>we are the team of developer making website & helps in your business</p>
      <button className='h-12 w-36  border-blue-400 border-[2px] rounded-full text-blue-600 mt-5 hover:bg-blue-400 hover:text-white text-lg   transition-all'><NavLink to='/about'>Get started</NavLink></button>
      </div>
      <div className='img '>
        <img src='./img/rct.png' className='h-10 absolute ml-56 -mt-5 animatedlg max-[491px]:ml-52'></img>
        <img src='./img/fireb-removebg-preview.png' className='h-12 absolute  mt-20 animatedlg ml-[430px]  max-[491px]:ml-[350px] '></img>
        <img src='./img/mongolg-removebg-preview.png' className='h-14 absolute mt-20 animatedlg max-[491px]:ml-16'></img>
        <img src='./img/tww-removebg-preview.png' className='h-7 absolute   bottom-40 ml-10 animatedlg max-[491px]:bottom-16 max-[491px]:ml-20'></img>
        <img src='./img/android.png' className='h-12 absolute     bottom-40  animatedlg ml-[410px] max-[491px]:bottom-16 max-[491px]:ml-[350px]'></img>
        <img src='./img/landinga.png ' className='animated  '></img>
      </div>
    </div>
    </>
  )
}

export default Home
