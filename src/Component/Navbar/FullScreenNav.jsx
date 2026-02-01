import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../context/Navcontext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {
    const fullScreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.menu-item', {
            opacity: 1,
            y: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.menu-footer', {
            opacity: 1
        })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.menu-item', {
            opacity: 0,
            y: 50,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.menu-footer', {
            opacity: 0
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }

    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Projets', path: '/projects' },
        { name: 'Agence', path: '/agence' },
    ]

    return (
        <div ref={fullScreenRef} className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 fixed top-0 left-0'>
            {/* Animated background stripes */}
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                </div>
            </div>

            {/* Menu content */}
            <div className='relative h-full flex flex-col'>
                {/* Header with logo and close button */}
                <div className="flex w-full justify-between p-4 md:p-6 lg:p-8 items-start">
                    <div className='w-24 md:w-32 lg:w-36'>
                        <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div
                        onClick={() => setNavOpen(false)}
                        className='h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 relative cursor-pointer group'
                    >
                        <div className='h-full w-0.5 md:w-1 -rotate-45 origin-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D3FD50] group-hover:bg-white transition-colors'></div>
                        <div className='h-full w-0.5 md:w-1 rotate-45 origin-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D3FD50] group-hover:bg-white transition-colors'></div>
                    </div>
                </div>

                {/* Menu items */}
                <div className='flex-1 flex flex-col justify-center items-center px-4 md:px-8'>
                    <nav className='w-full max-w-4xl'>
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => setNavOpen(false)}
                                className='menu-item block opacity-0 translate-y-12 group'
                            >
                                <div className='relative overflow-hidden py-3 md:py-4 lg:py-6 border-b border-white/20'>
                                    <h2 className='font-[font2] text-4xl md:text-6xl lg:text-8xl uppercase transition-all duration-300 group-hover:translate-x-4 group-hover:text-[#D3FD50]'>
                                        {item.name}
                                    </h2>
                                    <div className='absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'>
                                        <svg className='w-8 h-8 md:w-12 md:h-12 text-[#D3FD50]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Footer */}
                <div className='menu-footer opacity-0 p-4 md:p-6 lg:p-8'>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-4'>
                        <div>
                            <p className='text-sm md:text-base text-white/60 mb-2'>Follow us</p>
                            <div className='flex gap-4'>
                                <a href='#' className='text-white hover:text-[#D3FD50] transition-colors text-sm md:text-base'>Instagram</a>
                                <a href='#' className='text-white hover:text-[#D3FD50] transition-colors text-sm md:text-base'>Twitter</a>
                                <a href='#' className='text-white hover:text-[#D3FD50] transition-colors text-sm md:text-base'>LinkedIn</a>
                            </div>
                        </div>
                        <div className='text-right'>
                            <p className='text-sm md:text-base text-white/60'>© 2026 K72</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav