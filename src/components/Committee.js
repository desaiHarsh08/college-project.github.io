import React from 'react'

const Committee = () => {
  return (
    <div className='py-4 px-5 lg:px-32 ' id='commitee'>
      <div className='heading my-5 mb-10  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-[#0d2d62]'>Technical Advisory Committee</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div className='members flex flex-col sm:flex-row gap-7'>
        <div className='left w-full '>
            {/* <h4 className='text-xl font-bold text-center'>Conference Chair</h4> */}
            <div className='cards w-full flex justify-center flex-wrap gap-5 my-3 '>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Dr. R.A. Burange</p>
                <p >Convener, ETECE-2023 Chief Editor</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Mr. P.M. Wasu</p>
                <p >Guest Editor (Director, MSIT Services)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Mr. A.P. Deshpande</p>
                <p >Guest Editor (Director, Embedded Solutions)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Mr. Ankit Kshirsagar</p>
                <p >(Director & CEO, AnkHUB TEchnology Ltd.)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Dr. Mrs. J.S Gawai</p>
                <p >Co-Convener, ETECE-2023 Editor(Member)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Dr. C.S. Hiwarkar</p>
                <p >Editor(Member)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Dr. H.V. Gorewar</p>
                <p >Editor(Member)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Dr. A.P. Bhange</p>
                <p >Editor(Member)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Prof. V.V. Chakole</p>
                <p >Editor(Member)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Prof. S.A. Bagal</p>
                <p >Editor(Member)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Prof. R.B. Khule</p>
                <p >Editor(Member)</p>
              </div>
              <div className='card w-full md:w-[30%]  shadow-2xl hover:text-white hover:bg-orange-700 px-5 py-2 border-2 rounded-lg border-l-4 border-l-orange-800 '>
                <p className='font-bold'>Prof. K.K. Ingole</p>
                <p >Reviewer</p>
              </div>
           
          </div>

        </div>
      </div>
    </div>
  )
}

export default Committee