import React from 'react'
// import logo from '../img/logo-icrfs.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            if (window.innerWidth >= 1280) {
                document.getElementById('header').classList.remove('bg-transparent');
                console.log(window.innerWidth)
            }
            else {
                document.getElementById('header').classList.remove('bg-white');
            }
            document.getElementById('header').classList.add('bg-[#0d2d62]');
            console.log(document.getElementById('header'))
            document.getElementById('logo').classList.remove('h-14');
            document.getElementById('logo').classList.add('h-12');
        }
        else {
            if (window.innerWidth >= 1280) {
                document.getElementById('header').classList.add('bg-transparent');
            }
            else {
                document.getElementById('header').classList.add('bg-white');
            }
            document.getElementById('header').classList.remove('bg-[#0d2d62]');
            // // document.getElementById('header').classList.toggle('bg-white');
            // document.getElementById('header').classList.toggle('bg-transparent');
            document.getElementById('logo').classList.remove('h-12');
            document.getElementById('logo').classList.add('h-14');
        }
    })

    const handleClick = () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('translate-x-[1000px]');
    }

    return (
        <div className='navbar fixed w-full  z-[111111] text-white  ' >
            <header id='header' className='flex  items-center py-2 h-20  fixed w-full  xl:py-5 px-5 '>
                <nav className='flex justify-end h-20 xl:justify-center w-full items-center '>
                    {/* <div className='left logo h-[4rem] flex justify-start xl:justify-end items-center w-1/2 xl:w-[15%]' >
                        <img src={logo} alt='logo' id='logo' className='h-14 transition-all  ' />
                    </div> */}
                    <div className='right flex h-[4rem] justify-end items-center xl:justify-center w-1/2 xl:w-[85%]'>
                        {/* Large screen menu */}
                        <ul className='uppercase hidden xl:flex space-x-3 text-sm font-semibold '>
                            <li className='transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                <Link to={'home'} smooth={true} duration={500}>Home</Link>
                            </li>
                            <li className='transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                <Link to={'about-institute'} smooth={true} offset={-100} duration={500}>About Institute</Link>

                            </li>
                            <li className='transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                <Link to={'call-for-paper'} offset={-100} smooth={true} duration={500}>Call for Paper</Link>
                            </li>
                            <li className='transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                <Link to={'paper-submission'} offset={-100} smooth={true} duration={500}>Paper Submission</Link>

                            </li>
                            <li className='transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                <Link to={'important-dates'} offset={-100} smooth={true} duration={500}>Important Dates</Link>
                            </li>
                            <li className='transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                <Link to={'author-guidelines'} offset={-100} smooth={true} duration={500}>Author Guidelines</Link>
                            </li>
                            <li className='transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                <Link to={'patrons'} offset={-100} smooth={true} duration={500}>Patrons</Link>
                            </li>
                            <li className='transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                <Link to={'commitee'} offset={-100} smooth={true} duration={500}>Committee</Link>
                            </li>
                            <li className='transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                <Link to={'get-in-touch'} offset={-100} smooth={true} duration={500}>Contact</Link>
                            </li>
                        </ul>

                        {/* Hamburger */}
                        <div className='hamburger block xl:hidden' id='hamburger' onClick={handleClick}>
                            <div className='bg-[#ff7800] h-[5px] w-[30px] rounded-md '></div>
                            <div className='bg-[#ff7800] h-[5px] w-[30px] rounded-md my-[5px] '></div>
                            <div className='bg-[#ff7800] h-[5px] w-[30px] rounded-md '></div>
                        </div>

                        {/* Hamburger menu */}
                        <div id='menu' className='bg-white border text-black block xl:hidden fixed px-4 py-7 w-2/3 h-full top-20 right-0 translate-x-[1000px] transition-all  duration-300 '>
                            

                            <ul className='w-full uppercase flex flex-col space-x-3 '>
                                <li></li>
                                <li className='my-2 transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                    <Link to={'home'} smooth={true} duration={500}>Home</Link>
                                </li>
                                <li className='my-2 transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                    <Link to={'about-institute'} smooth={true} offset={-100} duration={500}>About Institute</Link>

                                </li>
                                <li className='my-2 transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                    <Link to={'call-for-paper'} offset={-100} smooth={true} duration={500}>Call for Paper</Link>
                                </li>
                                <li className='my-2 transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                    <Link to={'paper-submission'} offset={-100} smooth={true} duration={500}>Paper Submission</Link>

                                </li>
                                <li className='my-2 transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                    <Link to={'important-dates'} offset={-100} smooth={true} duration={500}>Important Dates</Link>
                                </li>
                                <li className='my-2 transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                    <Link to={'author-guidelines'} offset={-100} smooth={true} duration={500}>Author Guidelines</Link>
                                </li>
                                <li className='my-2 transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                    <Link to={'patrons'} offset={-100} smooth={true} duration={500}>Patrons</Link>
                                </li>
                                <li className='my-2 transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                    <Link to={'commitee'} offset={-100} smooth={true} duration={500}>Commitee</Link>
                                </li>
                                <li className='my-2 transition-all cursor-pointer hover:underline hover:underline-offset-8'>
                                    <Link to={'get-in-touch'} offset={-100} smooth={true} duration={500}>Contact</Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar