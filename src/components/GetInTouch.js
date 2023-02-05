import React from 'react'

const GetInTouch = () => {
  return (
    <div className='mt-20 pt-14 px-5 mb-5 lg:px-48 bg-[#e6eff8] ' id='get-in-touch'>
      <div className='heading my-5 mb-10  '>
        <h3 className='text-center text-4xl font-semibold my-2 text-red-800'>Get In Touch</h3>
        <div className='line flex flex-col items-center justify-center space-y-1'>
          <p className='w-24 border h-1 bg-black'></p>
          <p className='w-14 border h-1 bg-red-500'></p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-7 '>
        <div className='left w-full sm:w-[60%] '>
          <div className='border-2  my-3 p-5 border-blue-800 shadow-2xl'>
            <h4 className='sm:text-xl font-bold'>Conference Dates: 21st and 22nd July, 2023</h4>
            <div className='flex space-x-7 items-center '>
              <i class="fa fa-map-marker text-[#0d2d62]" aria-hidden="true"></i>
              <p>G H Raisoni College of Engineering (An Autonomous College affiliated to RTM Nagpur University)
                <br />
                CRPF Gate Number 3, Digdoh Hills, Hingna Road Nagpur(Maharashtra)-440016</p>
            </div>
          </div>
          <div className='border-2 my-3 p-5 border-blue-800 shadow-2xl '>
            <div className='flex space-x-7 my-2 items-center '>
            <i class="fa fa-envelope text-[#0d2d62]" aria-hidden="true"></i>
              <p> generalchair.icrfs@gmail.com</p>
            </div>
            <div className='flex space-x-7 my-2 items-center '>
            <i class="fa fa-envelope text-[#0d2d62]" aria-hidden="true"></i>
              <p>  butey.bhavana@raisoni.net</p>
            </div>
          </div>
          <div className='border-2 my-3 p-5 border-blue-800 shadow-2xl '>
            <div className='flex space-x-7 my-2 items-center '>
            <i class="fa fa-volume-control-phone text-[#0d2d62]" aria-hidden="true"></i>
            <p><a href="tel:937042854" class="d-block">+91 9370428542 / 9763716050</a></p>
            </div>
          </div>

        </div>
        <div className='right w-full h-[32rem] sm:w-[40%] border-[#0d2d62]  shadow-2xl '>
          <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3205228235565!2d79.1274741147335!3d21.13963898593848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c743ca39404f%3A0x8c1f8b8100081827!2sKarmaveer%20Dadasaheb%20Kannamwar%20Engineering%20College!5e0!3m2!1sen!2sin!4v1675600110224!5m2!1sen!2sin"  style={{ border: "0" , width: '100%', height: '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch