import React from 'react'

function Common() {
  return (
    <div  className='flex justify-around items-center mt-20'>
      <div className='all-txt flex flex-col   items-start -mt-10'>
      <h className=' text-slate-800 text-[40px] ' >Grow your business with</h>
      <h className=' text-blue-400 text-[40px]  font-medium'>WebServices</h>
      <p className=' text-slate-500 text-xl mt-5 mb-5'>we are the team of developer making website & helps in your business</p>
      <button className='h-12 w-36  border-blue-400 border-[2px] rounded-full text-blue-600 mt-5 hover:bg-blue-400 hover:text-white text-lg   transition-all'>Get started</button>
      </div>
      <div className='img'>
        <img src='./img/rct.png' className='h-10 absolute ml-56 -mt-5 animatedlg'></img>
        <img src='./img/fireb-removebg-preview.png' className='h-12 absolute right-32 mt-20 animatedlg'></img>
        <img src='./img/mongolg-removebg-preview.png' className='h-14 absolute mt-20 animatedlg'></img>
        <img src='./img/tww-removebg-preview.png' className='h-7 absolute   bottom-40 ml-10 animatedlg'></img>
        <img src='./img/android.png' className='h-12 absolute     bottom-40 right-28 animatedlg'></img>
        <img src='./img/landinga.png ' className='animated'></img>
      </div>
    </div>
  )
}

export default Common
