import React from 'react'

const Registration = () => {
  return (
    <div className='my-20 py-14 pb-20  lg:px-48 bg-[#e6eff8]' id='registration'>
      <div className='heading my-5 `  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-[#0d2d62]'>Registration</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div>
        <p className='my-7'>
          Every participant shall have to register by filling up a registration form through link: <a target={'_blank'} className='text-purple-500 hover:text-purple-600 mr-1' href='
https://forms.gle/AkCpzj3LAYax5KRu9'>
            https://forms.gle/AkCpzj3LAYax5KRu9</a>
          Given in website <a className='text-purple-500 hover:text-purple-600' href='www.etece.co.in'> www.etece.co.in</a>
        </p>
        <h4 className='text-center font-medium text-2xl'>Details of Registration fee are as follows:</h4>
        <div className='my-table-and-heading'>
          {/* <h4 className=' my-5 text-[#0d2d62] text-xl font-bold text-center'>Early bird Registrations till 28 th February 2023</h4> */}
          <div className='flex justify-center flex-col my-5 '>
            <table className='border border-red-800 w-full text-xs'>
              <thead >
                <tr className='bg-[#0d2d62] text-white text-xs'>
                  <th className='py-3 text-center px-5 border-r-2 border-white w-[10%] '>Sr. No</th>
                  <th className='py-3 text-center px-5 border-r-2 border-white w-[30%] '>Deligates</th>
                  <th className='py-3 text-center px-5 border-r-2 border-white w-[30%] '>Registration Fees For Participant only</th>
                  <th className='py-3 text-center px-5 border-r-2 border-white w-[30%] '>Registration Fees For Participant only after due date 24<sup>th</sup> &nbsp; Feb 2023</th>
                </tr>
              </thead>
              <tbody className='border'>
                <tr className='hover:bg-slate-300 border-2 border-b-2'>
                  <td className='p-3 text-center border-2 border-r-2'>1</td>
                  <td className='p-3 text-center border-2 border-r-2'>From Industry</td>
                  <td className='p-3 text-center border-2 border-r-2'>Rs. 2000/-</td>
                  <td className='p-3 text-center border-2 border-r-2'>Rs. 2500/-</td>
                </tr>
                <tr className='hover:bg-slate-300 border-2 border-b-2'>
                  <td className='p-3 text-center border-2 border-r-2'>2</td>
                  <td className='p-3 text-center border-2 border-r-2'>From Academic Institute</td>
                  <td className='p-3 text-center border-2 border-r-2'>Rs. 1800/-</td>
                  <td className='p-3 text-center border-2 border-r-2'>Rs. 2000/-</td>
                </tr>
                <tr className='hover:bg-slate-300 border-2 border-b-2'>
                  <td className='p-3 text-center border-2 border-r-2'>3</td>
                  <td className='p-3 text-center border-2 border-r-2'>Student / Research Scholar</td>
                  <td className='p-3 text-center border-2 border-r-2'>Rs. 1500/-</td>
                  <td className='p-3 text-center border-2 border-r-2'>Rs. 1800/-</td>
                </tr>
                <tr className='hover:bg-slate-300 border-2 border-b-2'>
                  <td className='p-3 text-center border-2 border-r-2'>4</td>
                  <td className='p-3 text-center border-2 border-r-2'>Foreign Deligates</td>
                  <td className='p-3 text-center border-2 border-r-2'>$ 50</td>
                  <td className='p-3 text-center border-2 border-r-2'>$ 80</td>
                </tr>

              </tbody>
            </table>
            <p className='font-medium  mt-5'>*Payments made against registration are not refundable.</p>
          </div>
        </div>
        <div className='steps'>
          {/* <p className='my-7'>
            <span className='font-bold'>Step1 (Fee Submission):</span> Authors/Attendee are requested to pay the Registration Fee (via online payments mode only) to the following Bank Account.
          </p> */}
          <div className='flex flex-col md:flex-row'>
            <div className='left w-full  py-5'>
              <p className='my-3 font-semibold'>Cash / Demand Draft / Bank Transfer: </p>
              <p className='my-3'>Account name - <span className='uppercase'>K D K Engineering College Nagpur</span></p>
              <p className='my-3'>Account No. : 34433632458</p>
              <p className='my-3'>IFSC Code: SBIN0004119</p>
              <p className='my-3'>Bank Name: State Bank of India</p>
              <p className='my-3 font-medium'>Demand Draft should be in a favour of "KDK Engineering College Nagpur"</p>
            </div>
          </div>
        </div>
      </div>

      <div className='download-btn my-5 flex justify-center items-center'>
        <button className='px-4 py-3 border bg-[#0d2d62] hover:bg-orange-600 transition-all text-white rounded-full font-semibold '>
          <a target={"_blank"} rel={"noreferrer"} href="
https://forms.gle/AkCpzj3LAYax5KRu9" >
            Click Here For Registration Form
          </a>
        </button>
      </div>
    </div>
  )
}

export default Registration