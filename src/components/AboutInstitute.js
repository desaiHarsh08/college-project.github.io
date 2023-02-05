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
          Established in 1996, G H Raisoni College of Engineering [GHRCE] is a premier Autonomous institution in the central India imparting a holistic technical education to the students residing not only in India but also international students. The institution has always been ranked amongst a well performing institution by National Institutional Ranking Framework (NIRF) 2017, MHRD, Government of India. Currently GHRCE is ranked 163rd PAN-India in Engineering Discipline as declared by NIRF Ranking 2022. The institution has also been ranked prominently by India Today MDRA Survey and Atal Ranking of Institutions on Innovation Achievements [ARIIA].
        </p>
        <p className='my-6'>
          1st Rank in India at ARIIA-2021 among Private / Self-Finance College / Institute.
        </p>
      </div>
    </div>
  )
}

export default AboutInstitute