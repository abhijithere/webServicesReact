import React from 'react'
import data from './Items'
function Services() {
  return (
    <>
     <div className='all flex flex-col justify-center items-center gap-12 mb-20 mt-14'>
      <h className='mt-12 mb-4 text-4xl text-slate-600'>Our <span className='text-blue-400'>Services</span></h>
      <div className='all-container grid grid-cols-3 gap-12'>
        {
          data.map((elem ,index)=>{
            return (
              <div className='card h-96 w-96 bg-slate-100 shadow-lg border ' key={index}>
          <img src={elem.imgsrc} className=' bg-cover w-96 h-52'></img>
          <div className='flex flex-col items-start p-4 gap-2'>
          <h className='text-blue-500 text-2xl'>{elem.title}</h>
          <p className='text-sm text-slate-600'>we are helping you to build your website and grow your business</p>
          <button className='h-9 w-40 bg-blue-500 text-white text-md mt-2'>Go Somewhere</button>
          </div>
        </div>
            );
          })
        }
      </div>

     </div>
    </>
  )
}

export default Services
