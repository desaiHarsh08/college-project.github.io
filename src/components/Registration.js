import React from 'react'
import online from '../img/online.jpg'

const Registration = () => {
  return (
    <div className='my-20 py-14 pb-20 px-5 lg:px-48 bg-[#e6eff8]' id='registration'>
      <div className='heading my-5 `  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-[#0d2d62]'>Registration</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div>
        <p className='my-7'>
          Original contributions based on the results of research and developments are solicited. Prospective authors are requested to submit their papers in not more than 8 pages. All the accepted and presented papers will be published in AIP Conference Proceedings (Web of science.). ICRFS-2023 invites academicians, researchers, industry professionals for submitting their original, previously unpublished and high quality research papers.
        </p>
        <p className='my-7'>
          The authors must agree that if the paper is accepted for oral/ poster presentation, at least one of the authors will register for the conference and present the paper at conference by completing the two step registration process as mentioned:
        </p>
        <div className='steps'>
          <p className='my-7'>
            <span className='font-bold'>Step1 (Fee Submission):</span> Authors/Attendee are requested to pay the Registration Fee (via online payments mode only) to the following Bank Account.
          </p>
          <div className='flex flex-col md:flex-row'>
            <div className='left w-full md:w-1/2 py-9'>
              <p className='my-3'>Account name - SGR Knowledge Foundation</p>
              <p className='my-3'>Account No. : 624205012985</p>
              <p className='my-3'>IFSC Code: ICIC0006242</p>
              <p className='my-3'>Bank Name: ICICI Bank, Ramdaspeth Branch</p>
              <p className='my-3'>For International candidate: - Contact Prof. Ekta Raut- +91 8459982481</p>

              <p><span className='font-bold'>Step2 (Fill Registration Form):</span> After making payment, authors are required to fill the Conference/Attendee Registration Form.</p>
              <p className='space-x-2 my-2'>
                <span>"Link: -"</span>
                <a className='text-purple-900 hover:text-blue-500'  href='https://forms.gle/qYrfBvM2W5JEHyU36' target={'_blank'} rel={"noreferrer"}>https://forms.gle/qYrfBvM2W5JEHyU36</a>
              </p>
            </div>
            <div className='right w-full md:w-1/2 px-5'>
              <h4 className='text-2xl font-semibold my-3'>QR Code to Scan</h4>
              <img src={online} alt='online' />
            </div>
          </div>
        </div>
      </div>
      <div className='my-table-and-heading'>
        <h4 className=' my-5 text-[#0d2d62] text-xl font-bold text-center'>Early bird Registrations till 28 th February 2023</h4>
        <div className='flex justify-center my-5 '>
        <table className='border border-red-800 w-full'>
          <thead >
            <tr className='bg-[#0d2d62] text-white text-xl'>
              <th className='py-3 text-center px-5 border-r-2 border-white  '>Particulars</th>
              <th className='py-3 text-center px-5 border-2 border-transparent'>Amount</th>
            </tr>
          </thead>
          <tbody className='border'>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>Attendee</td>
              <td className='p-3 text-center'>₹ 500</td>
            </tr>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>PG Students / Research Scholars-</td>
              <td className='p-3 text-center'>	₹ 10,000.00</td>
            </tr>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>Faculty Members</td>
              <td className='p-3 text-center'>	₹ 11,000.00 </td>
            </tr>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>Industry Person</td>
              <td className='p-3 text-center'>₹ 14,000.00</td>
            </tr>
            <tr className='hover:bg-slate-300 border-2 border-b-2'>
              <td className='p-3 text-center border-2 border-r-2'>Foreign National</td>
              <td className='p-3 text-center'>	$ 200.00</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div className='download-btn my-5 flex justify-center items-center'>
        <button className='px-4 py-3 border bg-[#0d2d62] hover:bg-orange-600 transition-all text-white rounded-full font-semibold '>
          <a target={"_blank"} rel={"noreferrer"} href="https://drive.google.com/file/d/1aBjhfWVgHFxnIsulKZ4oIFMa1NW8Kts0/view?usp=sharing" >
            Click Here For Registration Form 
          </a>
        </button>
      </div>
    </div>
  )
}

export default Registration