import React from 'react'
import myBg from '../img/banner.jpg'
import index1 from '../img/index-1.png'
import index2 from '../img/index-2.png'
import index3 from '../img/index-3.png'
import index4 from '../img/index-4.png'
import association1 from '../img/assiciation-1.jpg'
import association2 from '../img/assiciation-2.jpg'
import association3 from '../img/assiciation-3.jpg'
import association4 from '../img/assiciation-4.jpg'
import association5 from '../img/assiciation-5.png'
import association6 from '../img/assiciation-6.jpg'
import association7 from '../img/assiciation-7.jpg'
import association8 from '../img/assiciation-8.jpg'

const Home = () => {
    return (
        <div id='home' className='flex flex-col justify-center items-center z-1 pt-32 py-14 xl:h-[100vh] text-white ' style={{ backgroundColor: `#1f1f1f`, background: `rgba(44, 48, 66, .8) url(${myBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundBlendMode: 'darken' }}>
            <h1 className=' text-center text-xl sm:text-2xl md:text-4xl font-bold px-3 '>
                Welcome to<br />2nd International Conference on Research Frontiers in<br />Sciences-2023 (Online)
            </h1>
            <h2 className='text-center text-[18px] md:text-2xl font-medium mt-5 '>21st and 22nd July, 2023</h2>
            <div className='my-2'>
                <h2 className='text-center md:text-3xl font-medium  '>Indexed in</h2>
                <div className='flex flex-wrap justify-center my-2'>
                    <img src={index1} alt='index1' className='w-20 h-14 mx-1' />
                    <img src={index2} alt='index2' className='w-20 h-14 mx-1' />
                    <img src={index3} alt='index3' className='w-20 h-14 mr-1' />
                    <img src={index4} alt='index4' className='w-20 h-14 mx-1' />
                </div>
            </div>
            <div>
                <h3 className='text-center font-medium text-xl '>Organized By</h3>
                <h1 className='text-center text-base md:text-4xl font-semibold bg-[#0d2d62] p-2 my-2 '>G H Raisoni College of Engineering, Nagpur</h1>
            </div>
            <div className='my-3'>
                <h2 className='text-center text-base my-2 md:text-3xl font-medium  '>Association with</h2>
                <div className='flex flex-wrap justify-center items-center'>
                    <img src={association1} alt='association1' className='w-20 h-14 mx-1' />
                    <img src={association2} alt='association2' className='w-20 h-14 mx-1' />
                    <img src={association3} alt='association3' className='w-20 h-14 mx-1' />
                    <img src={association4} alt='association4' className='w-20 h-14 mx-1' />
                    <img src={association5} alt='association5' className='w-20 h-14 mx-1' />
                    <img src={association6} alt='association6' className='w-20 h-14 mx-1'  />
                    <img src={association7} alt='association7' className='w-20 h-14 mx-1' />
                    <img src={association8} alt='association8' className='w-20 h-14 mx-1' />
                </div>
            </div>
        </div>
    )
}

export default Home