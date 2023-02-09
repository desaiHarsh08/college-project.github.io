import React from 'react'

const AuthorGuidelines = () => {
  return (
    <div className='py-4 px-5 lg:px-48 ' id='author-guidelines'>
      <div className='heading my-5  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-[#0d2d62]'>Author Guidelines</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div className='my-5 links flex flex-col md:flex-row md:items-center'>
        {/* <div className='left md:w-1/2'>
          <ul>
            <li className='my-2 flex gap-5 items-center hover:text-blue-500'>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              <p>Conference Proceeding Guidelines</p>
            </li>
            <li className='my-2 flex gap-5 items-center hover:text-blue-500'>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              <p>Article Preparation Checklist</p>
            </li>
            <li className='my-2 flex gap-5 items-center hover:text-blue-500'>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              <p>AIP-CP-Article template -Latex</p>
            </li>
            <li className='my-2 flex gap-5 items-center hover:text-blue-500'>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              <p>AIP-CP-Article template- word</p>
            </li>
          </ul>
        </div>
        <div className='right md:w-1/2 '>
          <ul>
            <li className='my-2 flex gap-5 items-center hover:text-blue-500'>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              <p>AIPCP Sample-References</p>
            </li>
            <li className='my-2 flex gap-5 items-center hover:text-blue-500'>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              <p>AIP Conference Proceedings:Guidelines on Using Previously Published Materials</p>
            </li>
            <li className='my-2 flex gap-5 items-center hover:text-blue-500'>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              <p>AIP Conference Proceedings License Agreement</p>
            </li>
            <li className='my-2 flex gap-5 items-center hover:text-blue-500'>
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              <p>Permission Letter</p>
            </li>
          </ul>
        </div> */}
        <p>
        Original unpublished papers for presentation in technical session of conference are called from Researchers, Scientists and Engineers. Refer website www.etece.co.in for manuscript/abstract template.
        </p>

      </div>
      <div className='reviews my-5'>
        <h4 className='font-bold my-3 underline'>Manuscript Review/Paper Acceptance Process</h4>
        <ul>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
            Initial screening will be done to check compatibility with the conference theme & track.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
            Papers received in proper format will be checked for Plagiarism to confirm originality of the submitted work. Manuscript with less than 15 % plagiarism will be accepted for further processing else will be sent back to the author for revision.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
            All the manuscripts with permitted plagiarism will be sent for technical, quality and presentation review. Double review process will be adopted for ETECE-2023. Reviewer’s comments will be communicated to the respective authors. Manuscripts recommended for revision by the reviewers will be reverted to the respective author with a notification for resubmission within a week’s time from the date of notification.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
            Manuscript approved by the reviewers will only be allotted a unique paper id as per submission guidelines.
            </p>
          </li>
          <li className='my-1 flex items-center gap-6 '>
            <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
            <p>
            The acceptance of the manuscript for presentation in the conference will be notified to the author by the respective Co-chairs.
            </p>
          </li>
        </ul>
      </div>
      <div className='note'>
        <p className='my-3 font-bold text-center'>"Authors must read the guidelines carefully and use the appropriate article template."</p>
      </div>
    </div>
  )
}

export default AuthorGuidelines