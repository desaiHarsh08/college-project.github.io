import React from 'react'

const CallForPaper = () => {
  return (
    <div className='py-7 my-9 px-5 lg:px-5 ' id='call-for-paper'>
      <div className='heading my-5  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-red-800'>Call For Paper</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      {/* <div className='download-btn my-9 flex justify-center items-center'>
        <button className='px-4 py-3 border bg-[#0d2d62] hover:bg-orange-600 transition-all text-white rounded-full font-semibold text-sm sm:text-base '>
          <a target={"_blank"} rel={"noreferrer"} href="https://drive.google.com/file/d/1aBjhfWVgHFxnIsulKZ4oIFMa1NW8Kts0/view?usp=sharing">
            Download the international Conference CFP
          </a>
        </button>
      </div> */}
      <p className='text-center text-xl '>
        The Conference invites full length original research contributions of professionals from Academic Institutions, Industries, Government Undertakings, Research Scholars and Student community across the Nation and Abroad.
      </p>
      <div className='cards'>
        <div className='row flex flex-col md:flex-row gap-3 my-7 '>
          <div className='card w-full md:w-1/3  shadow-lg border-2  '>
            <div className='bg-[#adbac7]'><h4 className='text-center font-medium py-2'>Electronics & Telecommunication Engineering</h4></div>
            
            <div className='info  h-[90%]  rounded-md py-2 bg-white '>
              <ul className='space-y-1' >
                 
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Communication System and Signal Processing,</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Intelligent Systems for Smart Computing,</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>VLSI & Embedded System Design</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Analog /Mixed circuits and system </span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Micro/Nano System</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Antennas, RF and Microwave Communications</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Cognitive Radio and Cognitive Networks</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Internet of Things (IoT)</span></li>
              </ul>
            </div>
          </div>
          <div className='card w-full md:w-1/3  shadow-lg border-2    '>
            <div className='bg-[#adbac7]'>
            <h4 className='text-center font-medium py-2'>Electrical Engineering</h4>
            </div>
            
            <div className='info h-[90%]  rounded-md py-2 bg-white '>
              <ul className='space-y-1'>        
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Power Generation, Transmission & Distribution</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Renewable Energy Sources, Smart grids Technologies & Applications</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Power Electronics, Systems and Applications </span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Electrical Machines and Adjustable Speed Drives</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>For Sub Themes Refer to www.icape.co.in Circuits and Systems </span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Electrical Power Systems</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>High Voltage Engineering and Insulation Technology</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Technology Innovations in Electrical and Electronics</span></li>
              </ul>
            </div>
          </div>
          <div className='card w-full md:w-1/3  shadow-lg border-2'>
            <div className='bg-[#adbac7]'>

            <h4 className='text-center font-medium py-2'>Social Innovations in IT & AI&DS</h4>
            </div>
            <div className='info h-[90%]  rounded-md py-2 bg-white border'>
              <ul className='space-y-1'>           
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Scheduling Problems in Manufacturing and Service Organizations</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Supply Chain Management & Reverse Logistics</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>SCM Solutions in Retail Industry</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Quantity Control & Six Sigma Management</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Eco Design and Green Management</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Behavioral Operation Management & Industry 4.0</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Smart City & Urban Planning</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Health-Care Management</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Smart City & Urban Planning</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>New Product & Service Management through Robotic</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Data Science & Machine Learning</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Robotics & Artificial Intelligence</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Big Data Analysis for Supply Chain</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Social Media Analytics</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> E-Governance Digital</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Transformation and Innovation Management</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row flex flex-col justify-center md:flex-row gap-3 my-7'>
        <div className='card h-full w-full md:w-1/3  shadow-lg border-2 '>
          <div className='bg-[#adbac7]'>
          <h4 className='text-center font-medium py-2'>Computer Science & Engineering</h4>
          </div>
            
            <div className='info h-[90%]  rounded-md py-2 bg-white border'>
              <ul className='space-y-1'>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Digital Government Innovations</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Digital Business Innovations</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Digital Entrepreneurship</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Case Studies on Innovation Hubs</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span>Sustainable Energy Innovations</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Big Data and Analytics</span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Innovation Policies & Instruments </span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Innovation in Data Sciences </span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Innovations in Information Engineering  </span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Innovations in Health Informatics </span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Innovations in Project Management </span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Innovation Ecosystems </span></li>
                <li className='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Innovations in Information Sciences  </span></li>
                <li encesclassName='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Innovations in E-Leaming & E-Health   </span></li>
                <li encesclassName='flex items-center'><i class="fa-sharp fa-solid fa-circle-dot mx-2 "></i><span> Industrial Internet of Things   </span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallForPaper