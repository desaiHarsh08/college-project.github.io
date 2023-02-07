import React from 'react'

const ImportantDates = () => {
  return (
    <div className='my-20 py-14 pb-20 px-5 lg:px-48 bg-[#e6eff8]' id='important-dates'>
      <div className='heading my-5  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-[#0d2d62]'>Important Dates</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div className='flex justify-center '>
        <table className='border border-red-800'>
          {/* <thead >
            <tr className='bg-[#0d2d62] text-white lg:text-xl'>
              <th className='py-3 text-center px-5 border-r-2 border-white'>Last date for paper submission</th>
              <th className='py-3 text-center px-5 border-2 border-transparent'>15th February 2023</th>
            </tr>
          </thead> */}
          <tbody className='border'>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>Abstract Submission Deadline</td>
              <td className='p-3 text-center'>21<sup className='mr-1'>s1</sup>Feb 2023</td>
            </tr>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>Paper Submission Deadline</td>
              <td className='p-3 text-center'>24<sup className='mr-1'>th</sup>Feb 2023</td>
            </tr>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>Intimation of Acceptance</td>
              <td className='p-3 text-center'>28<sup className='mr-1'>th</sup>Feb 2023 </td>
            </tr>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>Remiittence of Registration Form</td>
              <td className='p-3 text-center'>1<sup className='mr-1'>st</sup>March 2023</td>
            </tr>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>Accomodation Request</td>
              <td className='p-3 text-center'>20<sup className='mr-1'>th</sup>Feb 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ImportantDates