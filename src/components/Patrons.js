import React from 'react'
import img1 from '../img/p1.jpeg'
import img2 from '../img/p2.jpeg'
import img3 from '../img/p3.jpg'
import img4 from '../img/p4.jfif'

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
      <div className='row flex gap-5 flex-col   md:flex-row justify-center my-3'>
        <div className='card my-2 bg-[#0d2d62] md:bg-transparent '>
          <div className='img-wrap' >
            <div className='relative h-0 top-0 left-0 right-0 bg-[#9a6261]' id='img-cover'></div>
            <img src={img1} alt='img1' className='h-64 w-full' />
          </div>
          <div className='bg-[#0d2d62] text-white  p-5 flex justify-center items-center flex-col'>
            <h4 className='font-semibold text-xl'>Shri. Rajendra B Mulak</h4>
            <p>Ex. Minister, Govt. of Maharashtra, </p>
            <p>Secretary, BCYRC, Nagpur</p>
          </div>
        </div>
        <div className='card my-2 bg-[#0d2d62] md:bg-transparent' >
          <div className='img-wrap' >
            <div className='relative h-0 top-0 left-0 right-0 bg-[#9a6261]' id='img-cover'></div>
            <img src={img2} alt='img1' className='h-64 w-full' />
          </div>
          <div className='bg-[#0d2d62] text-white  p-5 flex justify-center items-center flex-col'>
            <h4 className='font-semibold text-xl'>Shri. Yashraj R. Mulak</h4>
            <p>Treasurer</p>
            <p>BCYRC, Nagpur</p>
          </div>
        </div>
      </div>
      <div className='row flex gap-5 flex-col   md:flex-row justify-center my-3'>
        <div className='left w-full md:w-[283px] '>
          <div className='heading my-5 mb-10  '>
            <h3 className='text-center text-3xl font-semibold my-2 text-red-800'>Conference Chair</h3>
            <div className='line flex flex-col items-center justify-center space-y-1'>
              <p className='w-24 border h-1 bg-black'></p>
              <p className='w-14 border h-1 bg-red-500'></p>
            </div>
          </div>
          <div className='card my-2  bg-[#0d2d62] md:bg-transparent '>
            <div className='img-wrap' >
              <div className='relative h-0 top-0 left-0 right-0 bg-[#9a6261]' id='img-cover'></div>
              <img src={img3} alt='img1' className='h-64 w-full' />
            </div>
            <div className='bg-[#0d2d62] text-white  p-5 flex justify-center items-center flex-col'>
              <h4 className='font-semibold text-xl'>Dr. D.P. Singh</h4>
              <p>Principal,  </p>
              <p>K.D.K College of Engg., Nagpur</p>
            </div>
          </div>
        </div>
        <div className='right w-full md:w-[283px] '>
          <div className='heading my-5 mb-10  '>
            <h3 className='text-center text-3xl font-semibold my-2 text-red-800'>Conference Co-Chair</h3>
            <div className='line flex flex-col items-center justify-center space-y-1'>
              <p className='w-24 border h-1 bg-black'></p>
              <p className='w-14 border h-1 bg-red-500'></p>
            </div>
          </div>
          <div className='card my-2 bg-[#0d2d62] md:bg-transparent '>
            <div className='img-wrap' >
              <div className='relative h-0 top-0 left-0 right-0 bg-[#9a6261]' id='img-cover'></div>
              <img src={img4} alt='img1' className='h-64 w-full  ' />
            </div>
            <div className='bg-[#0d2d62] text-white  p-5 flex justify-center items-center flex-col'>
              <h4 className='font-semibold text-xl'>Dr. A.M. Badar</h4>
              <p>Vice-Principal,  </p>
              <p>K.D.K College of Engg., Nagpur</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row flex flex-col  items-center justify-center my-3'>
        <div className='heading my-10 mb-10  '>
          <h3 className='text-center text-3xl font-semibold my-2 text-red-800'>Conference Venue</h3>
          <div className='line flex flex-col items-center justify-center space-y-1'>
            <p className='w-24 border h-1 bg-black'></p>
            <p className='w-14 border h-1 bg-red-500'></p>
          </div>
        </div>
        <div className='text-center text-xl'>
          <p>
            K.D.K. College of Engineering, Nagpur <br />(www.kdkce.edu.in)<br />
            Great Nag Road, Nandanvan, Nagpur-440024.<br />
            Email: icmbat2022@kdkce.edu.in<br />
            0712-2711400 / 2710030
          </p>
        </div>
      </div>
    </div>
  )
}

export default Patrons