import { useGSAP } from '@gsap/react'
import Projectcard from '../Component/Project/Projectcard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1: '/images/projects/pjc.jpg',
    image2: '/images/projects/widescape.jpg'
  }, {
    image1: '/images/projects/oka.jpg',
    image2: '/images/projects/opto.jpg'
  }, {
    image1: '/images/projects/lamajeure.jpg',
    image2: '/images/projects/shelton.jpg'
  }
    ,
  {
    image1: '/images/projects/lamajeure.jpg',
    image2: '/images/projects/shelton.jpg'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: 0,
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div>
      <div className='p-2 md:p-4 mb-[100vh]'>
        <div className='pt-[45vh]'>
          <h2 className='font-[font2] text-5xl md:text-7xl lg:text-[9.5vw] uppercase'>Projets</h2>
        </div>
        <div className='mt-10 md:mt-20 lol'>
          {projects.map(function (elem, idx) {
            return <div key={idx} className='hero w-full h-[400px] md:h-[450px] lg:h-[500px] mb-2 md:mb-4 flex flex-col lg:flex-row gap-2 lg:gap-4'>
              <Projectcard image1={elem.image1} image2={elem.image2} />
            </div>
          })}

        </div>
      </div>
      <h1>hy</h1>
    </div>
  )
}

export default Projects