import React from 'react'

export default function Projectcard(props) {
    return (
        <>
            <div className='w-full lg:w-1/2 group transition-all relative rounded-2xl lg:rounded-none hover:rounded-[70px] overflow-hidden h-full'>
                <img className='h-full w-full object-cover' src={props.image1} alt="Project image" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-2xl md:text-4xl lg:text-6xl font-[font1] border-2 md:border-4 pt-2 md:pt-4 px-4 md:px-8 text-white border-white rounded-full'>Voir le projet</h2>
                </div>
            </div>
            <div className='w-full lg:w-1/2 group transition-all relative rounded-2xl lg:rounded-none hover:rounded-[70px] overflow-hidden h-full'>
                <img className='h-full w-full object-cover' src={props.image2} alt="Project image" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-2xl md:text-4xl lg:text-6xl font-[font1] border-2 md:border-4 pt-2 md:pt-4 px-4 md:px-8 text-white border-white rounded-full'>Voir le projet</h2>
                </div>
            </div>
        </>
    )
}





