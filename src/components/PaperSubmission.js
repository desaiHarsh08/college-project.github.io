import React from 'react'

const PaperSubmission = () => {
  return (
    <div className='py-4 px-5 lg:px-48' id='paper-submission'>
      <div className='heading my-5  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-[#0d2d62]'>Paper Submission</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div className='rules mt-9'>
        <ul>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              Kindly use the Full Paper Template provided in the website for formatting your paper. Full papers should be restricted to 8 pages as per the template.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              The paper should be original and should not have been published or submitted for review in any journal or conferences.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              Only two papers per author will be considered.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              A person should not have more than two papers as the first author.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              Please mention the most relevant one or two sub-theme(s) of the conference which fits your paper.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              Please mention the most relevant one or two sub-theme(s) of the conference which fits your paper.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              Please mention the most relevant one or two sub-theme(s) of the conference which fits your paper.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              Please mention the most relevant one or two sub-theme(s) of the conference which fits your paper.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              Please mention the most relevant one or two sub-theme(s) of the conference which fits your paper.
            </p>
          </li>
          <li className='my-1 '>
            <div className='flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
              Upload the full paper through the EasyChair platform:
            </p>
            </div>
            
            <a className='mx-10 text-purple-900 hover:text-blue-500' href='https://easychair.org/conferences/?conf=icrfs2023'>https://easychair.org/conferences/?conf=icrfs2023</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PaperSubmission