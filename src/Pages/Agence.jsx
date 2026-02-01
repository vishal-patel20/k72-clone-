import React, { startTransition, useRef } from 'react'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
function Agence() {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageref = useRef(null)
  const imagearraysrc = [
    "/images/team/carl.jpg",
    "/images/team/olivier.jpg",
    "/images/team/lawrence.jpg",
    "/images/team/hugo-joseph.jpg",
    "/images/team/chantal.jpg",
    "/images/team/sophie.jpg",
    "/images/team/michele.jpg",
    "/images/team/michele.jpg",
    "/images/team/camille.jpg",
    "/images/team/meggie.jpg",
    "/images/team/joel.jpg"

  ]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 25%",
        end: "top -150%",
        pin: true,
        onUpdate: (ele) => {
          let imageindex
          if (ele.progress < 1) {
            imageindex = Math.floor(ele.progress * imagearraysrc.length)
          } else {
            imageindex = imagearraysrc.length - 1
          }
          imageref.current.src = imagearraysrc[imageindex]
        }
      }
    })
  })
  return (
    <div>
      <div className='section-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden h-[30vh] w-[40vw] md:h-[25vh] md:w-[25vw] lg:h-[20vw] lg:w-[15vw] rounded-4xl top-[25%] left-[30%] md:left-[30vw]'>
          <img ref={imageref} className="h-full object-cover w-full" src="/images/team/carl.jpg" alt="Team member" />
        </div>
        <div className='relative font-[font2]' >
          <div className='mt-[55vh]'>
            <h1 className='text-6xl md:text-8xl lg:text-[18vw] text-center uppercase leading-tight md:leading-[12vw] lg:leading-[15vw]'>SEVENTY<br />TWO</h1>
          </div>
          <div className='px-4 md:px-8 lg:pl-[35%] mt-10 md:mt-20'>
            <p className='text-lg md:text-3xl lg:text-6xl'>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner.A brand is a living thing, with values, a personality and a story.If we ignore that, we can achieve short-term success, but not influence that goes the distance. &nbsp; &nbsp;We bring that perspective to every brand story we help tell.</p></div>
        </div>
      </div>
      <div className='h-32 md:h-40 lg:h-48'></div>
    </div>
  )
}

export default Agence
