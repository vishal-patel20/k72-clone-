import React from 'react'
import Video from '../Component/Home/video'
import HomeHeroTest from '../Component/Home/HomeHeroTest'
import HomeBottomtext from '../Component/Home/HomeBottomtext'
function Home() {
  return (
    <div>
      <div className=' h-screen w-screen fixed'><Video/></div>
       <div className='h-screen w-screen relative flex flex-col'>
       <HomeHeroTest/>
       <HomeBottomtext/>
        </div>
    </div>
  )
}

export default Home
