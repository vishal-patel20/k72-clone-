import React from 'react'
import { Link } from 'react-router-dom'
function HomeBottomtext() {
  return (
    <div className="font-[font2] fixed bottom-0 left-0 w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 py-4 md:py-6">

      <div className="border-2 md:border-4 h-16 md:h-20 lg:h-24 hover:border-[#D3FD50] hover:text-[#D3FD50] 
                      border-white rounded-full uppercase flex items-center px-6 md:px-8 lg:px-10">
        <Link className="text-xl md:text-2xl lg:text-[3vw]" to="/projects">PROJECTS</Link>
      </div>

      <div className="border-2 md:border-4 h-16 md:h-20 lg:h-24 hover:border-[#D3FD50] hover:text-[#D3FD50] 
                      border-white rounded-full uppercase flex items-center px-6 md:px-8 lg:px-10">
        <Link className="text-xl md:text-2xl lg:text-[3vw]" to="/agence">AGENCE</Link>
      </div>
    </div>
  )
}

export default HomeBottomtext
