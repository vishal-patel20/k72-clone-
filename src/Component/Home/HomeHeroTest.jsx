import React from 'react'
import Video from './video'

function HomeHeroTest() {
  return (
    <div className='font-[font2] pt-5 text-center'>

      <div className="text-5xl md:text-7xl lg:text-[9.5vw] uppercase leading-tight md:leading-[6vw] lg:leading-[8vw] justify-center flex items-center">The spark for</div>
      <div className="text-5xl md:text-7xl lg:text-[9.5vw] uppercase leading-tight md:leading-[6vw] lg:leading-[8vw] justify-center flex items-center">all <div className='h-[12vh] w-[25vw] md:h-[14vh] md:w-[20vw] lg:h-[15vh] lg:w-[16vw] rounded-full mt-3 md:mt-4 lg:mt-5 mb-2 md:mb-3 lg:mb-4 overflow-hidden'><Video /></div> things</div>
      <div className="text-5xl md:text-7xl lg:text-[9.5vw] uppercase leading-tight md:leading-[6vw] lg:leading-[8vw] justify-center flex items-center">creative</div>
    </div>
  )
}

export default HomeHeroTest
