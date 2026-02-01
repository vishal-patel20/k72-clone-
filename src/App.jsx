import React, { useRef } from 'react'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import {Routes,Route}  from "react-router-dom"
import Projects from './Pages/Projects'
import Navbar from './Component/Navbar/navbar'
import FullName from './Component/Navbar/FullScreenNav'
import NavContext from './Component/context/Navcontext'


const App = () => {

  return (
        <NavContext>
    <div className='text-white'>
          <Navbar/>
           <FullName/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/agence" element={<Agence/>} />
        <Route  path="/projects" element={<Projects/>} />
      </Routes>
    </div> 
    </NavContext>
  )
}

export default App
