import React from 'react'
import img1 from '../img/sunil-raisoni.png'
import img2 from '../img/shobha-raisoni.png'
import img3 from '../img/shreyas-raisoni.png'
import img4 from '../img/dr-sachin-untawale.png'

const Patrons = () => {

  return (
    <div className='my-20 py-14 pb-20 px-5 lg:px-48 bg-[#e6eff8]' id='patrons'>
      <div className='heading my-5 mb-10  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-red-800'>Patrons</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div className='row flex gap-5 flex-col md:flex-row justify-center my-3'>
        <div className='card my-2 bg-[#0d2d62]'>
          <div className='img-wrap' >
            <div className='relative h-0 top-0 left-0 right-0 bg-[#9a6261]' id='img-cover'></div>
            <img src={img1} alt='img1' className='h-64' />
          </div>
          <div className='bg-[#0d2d62] text-white  p-5 flex justify-center items-center flex-col'>
            <h4 className='font-semibold text-xl'>Shri. Sunilji Raisoni</h4>
            <p>Chairman</p>
            <p>Raisoni Group of Institutions</p>
          </div>
        </div>
        <div className='card my-2 bg-[#0d2d62]' >
          <div className='img-wrap' >
            <div className='relative h-0 top-0 left-0 right-0 bg-[#9a6261]' id='img-cover'></div>
            <img src={img2} alt='img1' className='h-64' />
          </div>
          <div className='bg-[#0d2d62] text-white  p-5 flex justify-center items-center flex-col'>
            <h4 className='font-semibold text-xl'>Smt. Shobha Raisoni</h4>
            <p>Trustee</p>
            <p>Raisoni Group of Institutions</p>
          </div>
        </div>
        <div className='card my-2 bg-[#0d2d62]'>
          <div className='img-wrap' >
            <div className='relative h-0 top-0 left-0 right-0 bg-[#9a6261]' id='img-cover'></div>
            <img src={img3} alt='img1' className='h-64' />
          </div>
          <div className='bg-[#0d2d62] text-white  p-5 flex justify-center items-center flex-col'>
            <h4 className='font-semibold text-xl'>Mr. Shreyas Raisoni</h4>
            <p>Executive Director</p>
            <p>Raisoni Group of Institutions</p>
          </div>
        </div>
      </div>
      <div className='row flex flex-col items-center justify-center my-3'>
        <div className='heading my-10 mb-10  '>
          <h3 className='text-center text-3xl font-semibold my-2 text-red-800'>Honorary Chair</h3>
          <div className='line flex flex-col items-center justify-center space-y-1'>
            <p className='w-24 border h-1 bg-black'></p>
            <p className='w-14 border h-1 bg-red-500'></p>
          </div>
        </div>
        <div className='card my-2 bg-[#0d2d62]'>
          <div className='img-wrap' >
            <div className='relative h-0 top-0 left-0 right-0 bg-[#9a6261]' id='img-cover'></div>
            <img src={img4} alt='img1' className='h-64' />
          </div>
          <div className='bg-[#0d2d62] text-white  p-5 flex justify-center items-center flex-col'>
            <h4 className='font-semibold text-xl'>Dr. Sachin Untawale</h4>
            <p>Director</p>
            <p>G H Raisoni College of Engineering</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Patrons