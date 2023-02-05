import React from 'react'

const CallForPaper = () => {
  return (
    <div className='py-7 my-9 px-5 lg:px-48 ' id='call-for-paper'>
      <div className='heading my-5  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-red-800'>Call For Paper</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div className='download-btn my-9 flex justify-center items-center'>
        <button className='px-4 py-3 border bg-[#0d2d62] hover:bg-orange-600 transition-all text-white rounded-full font-semibold text-sm sm:text-base '>
          <a target={"_blank"} rel={"noreferrer"} href="https://drive.google.com/file/d/1aBjhfWVgHFxnIsulKZ4oIFMa1NW8Kts0/view?usp=sharing">
            Download the international Conference CFP
          </a>
        </button>
      </div>
      <div className='cards flex flex-col md:flex-row gap-3 my-7 '>
        <div className='card bg-[#adbac7] p-3 pb-7 '>
          <h4 className='text-center font-medium py-2'>Physical Science</h4>
          <div className='info h-56 rounded-md p-2 bg-white border'>
            <p>
              Novel and Functional Materials, Luminescent Materials, Magnetic Materials, Ferroelectric Materials, Glasses and Glass Ceramics, Computational Physics, Ultrasonic Characterizations, Non-conventional Energy sources.
            </p>
          </div>
        </div>
        <div className='card bg-[#adbac7] p-3 pb-7 '>
          <h4 className='text-center font-medium py-2'>Physical Science</h4>
          <div className='info h-56 rounded-md p-2 bg-white border'>
            <p>
              Novel and Functional Materials, Luminescent Materials, Magnetic Materials, Ferroelectric Materials, Glasses and Glass Ceramics, Computational Physics, Ultrasonic Characterizations, Non-conventional Energy sources.
            </p>
          </div>
        </div>
        <div className='card bg-[#adbac7] p-3 pb-7 '>
          <h4 className='text-center font-medium py-2'>Physical Science</h4>
          <div className='info h-56 rounded-md p-2 bg-white border'>
            <p>
              Novel and Functional Materials, Luminescent Materials, Magnetic Materials, Ferroelectric Materials, Glasses and Glass Ceramics, Computational Physics, Ultrasonic Characterizations, Non-conventional Energy sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallForPaper