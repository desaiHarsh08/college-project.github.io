import React from 'react'

const AboutConference = () => {
    return (
        <div className='py-4 bg-[#e6eff8] px-5 lg:px-48 pb-12 ' id='about-conferece'>
            <div className='heading py-10  '>
                <h3 className='text-center text-4xl font-semibold my-2 text-[#0d2d62]'>About the Conference</h3>
                <div className='line flex flex-col items-center justify-center space-y-1'>
                    <p className='w-24 border h-1 bg-black'></p>
                    <p className='w-14 border h-1 bg-red-500'></p>
                </div>
            </div>
            <div>
                {/* <ul>
                    <li className='flex items-center gap-6 '>
                        <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
                        <p>
                        To provide a perfect online platform for scientific community, academicians, industrialists and policy makers all over the world to keep abreast of the latest developments in their respective as well interdisciplinary scientific/technical areas.
                        </p>
                    </li>
                    <li className='flex items-center gap-6 '>
                        <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
                        <p>
                        To provide an online platform to academia, industry practitioners and researchers all over the globe to share their innovation in research and novel ideas.
                        </p>
                    </li>
                    <li className='flex items-center gap-6 '>
                        <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
                        <p>
                        The conference aims to promote research in pure and applied as well as interdisciplinary sciences.
                        </p>
                    </li>
                    <li className='flex items-center gap-6 '>
                        <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
                        <p>
                        To form cohesive research groups to facilitate exchange of ideas and brainstorming on research findings.
                        </p>
                    </li>
                    <li className='flex items-center gap-6 '>
                        <i class="fa fa-arrow-circle-right text-yellow-600" aria-hidden="true"></i>
                        <p>
                        To give an opportunity to researchers from pure and applied sciences and interdisciplinary fields to present their original research results, fresh ideas and novel experimentation which encompass both theory and practical approach.
                        </p>
                    </li>
                </ul> */}

                <p className='text-justify'>
                As the today's global economic environment is undergoing transformation so managing change is vital to ensure sustainable growth. Innovation and emerging opportunities has become one of the key strategic task. This conference will help to renew key challenges and opportunities in today's dynamic world. This conference is to improve the research and theory building in every area by facilitating the exchange of knowledge, ideas, latest trends, developments, and contemporary challenges. The aim of this conference is to provide a platform to researcher; practitioners sharing their ideas and to discuss current issues in science and technology dealing with (last) changing economic and competitive environment and to also get acquainted with latest developments and trends.
                </p>
            </div>
        </div>
    )
}

export default AboutConference