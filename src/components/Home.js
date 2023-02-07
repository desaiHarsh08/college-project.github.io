import React from 'react'
import myBg from '../img/bg-banner.jpg'
import association1 from '../img/logo1.png'
import association2 from '../img/logo-2.jfif'
import association3 from '../img/logo-3.png'
import kdkLogo from '../img/kdk-logo.jfif'
import kdkGLogo from '../img/kdk-g-logo.png'

const Home = () => {
    return (
        <div id='home' className='home flex flex-col justify-center items-center z-1 pt-32 pb-14 py-4 text-white ' style={{  backgroundColor: `#1f1f1f`, background: `rgba(44, 48, 66, .8) url(${myBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundBlendMode: 'darken' , backgroundSize: 'cover'}}>
            <h1 className=' text-center text-xl sm:text-2xl md:text-4xl font-bold px-3 bg-[#0d2d62] p-3  '>
                1<sup className='mr-1'>st</sup> International Conference <br /><span className='text-2xl'>on</span> <br />Electronics and Computer Exigencies<br />
                (ETECE - 23)
            </h1>

            <h2 className='text-center text-[18px] md:text-2xl font-medium mt-5 '>10<sup className='mr-1'>th</sup> and 11<sup className='mr-1'>th</sup>  March, 2023</h2>
            {/* <div className='my-2'>
                <h2 className='text-center md:text-3xl font-medium  '>Indexed in</h2>
                <div className='flex flex-wrap justify-center my-2'>
                    <img src={index1} alt='index1' className='w-20 h-14 mx-1' />
                    <img src={index2} alt='index2' className='w-20 h-14 mx-1' />
                    <img src={index3} alt='index3' className='w-20 h-14 mr-1' />
                    <img src={index4} alt='index4' className='w-20 h-14 mx-1' />
                </div>
            </div> */}
            <div className='w-full'>
                <h3 className='text-center my-3 font-medium text-xl '>Organized By</h3>
                <div className='flex flex-col md:flex-row items-center justify-between  w-full gap-5'>
                    <div className='left flex justify-center md:justify-end w-full md:w-1/3'>
                        <img src={kdkLogo} alt='kdk-logo' className='w-24' />
                    </div>
                    <div className='middle w-full md:w-1/3'>
                        <h1 className='text-center text-2xl md:text-4xl font-semibold  p-2 my-2 '>K.D.K College of Engineering
                            <br />
                            <span className='text-xl'>Nandanvan, Nagpur</span>
                        </h1>
                    </div>
                    <div className='right flex   flex-col w-full md:w-1/3'>
                        <div className='flex justify-center md:justify-start  px-12 w-full'>
                            <img src={kdkGLogo} alt='kdk-group-logo' className='w-24' />

                        </div>
                        <p className='text-center md:text-start font-normal uppercase w-full'>KDK Group of Institutes</p>
                    </div>
                </div>



                <div className='text-xl md:text-2xl font-medium text-center my-7'>
                    <p className='my-3'>(NAAC & NBA Accredited)</p>
                    <p className='my-3'>Department of Electronics &  Telecommunication Engineering</p>
                    <p className='my-3'>And</p>
                    <p className='my-3'>Internal Quality & Assurance Cell (IQAC)</p>
                </div>
            </div>
            <div className='my-3'>
                <h2 className='text-center text-base my-2 md:text-3xl font-medium  '>In Association With</h2>
                <div className='flex flex-wrap my-5 justify-center items-center'>
                    <img src={association1} alt='association1' className='w-20 h-14 mx-3 rounded-md' />
                    <img src={association2} alt='association2' className='w-20 h-14 mx-3 rounded-md' />
                    <img src={association3} alt='association3' className='w-20 h-14 mx-3 rounded-md' />
                </div>
            </div>
            <div className='text-center font-medi
             md:text-xl px-3'>
                <p>The program is being organized under the Centenary Celebration of the
                    Rashtrasant Tukodoji Maharaj Nagpur University, Nagpur.
                    </p>
                    <br/>
                    <p>Conference Website: <a className='text-purple-200 hover:text-purple-300' href='www.etece.co.in'> www.etece.co.in</a></p>
            </div>
        </div>
    )
}

export default Home