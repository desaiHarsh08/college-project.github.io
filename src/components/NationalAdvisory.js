import React from 'react'

const NationalAdvisory = () => {
  return (
    <div className='py-4 pb-20 px-5 lg:px-48 bg-[#e6eff8] ' id='national-advisory'>
      <div className='heading my-5 mb-10  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-[#0d2d62]'>National Advisory</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div className='cards '>
        <div className='row my-5 flex flex-col sm:flex-row gap-7'>
          <div className='card shadow-xl  hover:bg-red-600 hover:text-white w-full sm:w-1/3 flex flex-col justify-center items-center  py-7 border-2 bg-white '>
            <span className='text-sm lg:text-xl'>Dr. Ankit Bhurane</span>
            <span className='text-xs lg:text-base'>IIIT, Nagpur</span>
          </div>
          <div className='card shadow-xl  hover:bg-red-600 hover:text-white w-full sm:w-1/3 flex flex-col justify-center items-center  py-7 border-2 bg-white '>
            <span className='text-sm lg:text-xl'>Dr. PM Padole</span>
            <span className='text-xs lg:text-base'>Director VNIT, Nagpur</span>
          </div>
          <div className='card shadow-xl  hover:bg-red-600 hover:text-white w-full sm:w-1/3 flex flex-col justify-center items-center  py-7 border-2 bg-white '>
            <span className='text-sm lg:text-xl'>Dr. Sudhir </span>
            <span className='text-xs lg:text-base'>G.C.O.E, Nagpur</span>
          </div>
        </div>
        <div className='row my-5 flex flex-col sm:flex-row gap-7'>
          <div className='card shadow-xl  hover:bg-red-600 hover:text-white w-full sm:w-1/3 flex flex-col justify-center items-center  py-7 border-2 bg-white '>
            <span className='text-sm lg:text-xl'>Dr. P.B. Dhaigavane</span>
            <span className='text-xs lg:text-base'>Jr. Director, DTE.</span>
          </div>
          <div className='card shadow-xl  hover:bg-red-600 hover:text-white w-full sm:w-1/3 flex flex-col justify-center items-center  py-7 border-2 bg-white '>
            <span className='text-sm lg:text-xl'>Dr. H.O Thakre</span>
            <span className='text-xs lg:text-base'>IE(I), Nagpur</span>
          </div>
          <div className='card shadow-xl  hover:bg-red-600 hover:text-white w-full sm:w-1/3 flex flex-col justify-center items-center  py-7 border-2 bg-white '>
            <span className='text-sm lg:text-xl'>Dr. K.M. Burchandi</span>
            <span className='text-xs lg:text-base'>VNIT, Nagpur</span>
          </div>
        </div>
        <div className='row my-5 flex flex-col sm:flex-row gap-7'>
          <div className='card shadow-xl  hover:bg-red-600 hover:text-white w-full sm:w-1/3 flex flex-col justify-center items-center  py-7 border-2 bg-white '>
            <span className='text-sm lg:text-xl'>Dr. R.P. Borker</span>
            <span className='text-xs lg:text-base'>Principal, G.C.O.E. Nagpur</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NationalAdvisory