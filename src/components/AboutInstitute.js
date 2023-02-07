import React from 'react'

const AboutInstitute = () => {
  return (
    <div className='px-5 text-justify lg:px-48 py-20' id='about-institute'>
      <div className='heading  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-red-800'>About Institute</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div className='my-7'>
        <p>
          The Karmavir Dadasaheb Kannamwar College of Engineering, situated in the heart of India in Nagpur city, established in 1984 by Backward Class Youth Relief Committee (BCYRC) is one of the leading engineering colleges in Maharashtra State. The college is NAAC & NBA Accredited
        </p>
        <p className='my-6'>
          The college has excellent infrastructure and faculty members. It is approved by AICTE New Delhi, DTE, Government of Maharashtra. The college successfully continues to attract attention of scholars from all over the subcontinent.
        </p>
        <p className='my-6'>
        The college runs under graduate and postgraduate courses with seven branches of Engineering and three PG programs in Mechanical Engineering ,Civil Engineering and Master of Business Administration . In addition to these, college has approved research centre for Ph.D in Civil Engineering and Mechanical Engineering programs.
        </p>
      </div>
    </div>
  )
}

export default AboutInstitute