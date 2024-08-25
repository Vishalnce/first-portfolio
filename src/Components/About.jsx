import React from 'react'
import my_photo from '../images/my_photo.jpg'

function About() {
  return (
    <div id = "about" className='flex flex-col items-center w-full '>
      <div className='relative -m-[12rem] max-sm:-m-28 inline-block  '>
        <img 
          src={my_photo} 
          alt="my-image"
          className='w-[434px] h-[470px] max-sm:w-[220px]  max-sm:h-[220px] rounded-full shadow-white shadow-2xl'
        />
      </div>

      <div className='mt-60 max-sm:mt-32 text-center inline-block md:text-2xl lg w-[80%] '>
      <div className='text-[#808080] font-sans text-xl lg:text-xl ' >
          <p className='leading-8  lg:leading-[2rem] text-justify' >
            Hey there! I recently graduated with a <span className='font-bold text-t-blue'>B.Tech in Computer Science and Engineering from IIITDM Kurnool</span>. I have a strong passion for learning new technology and love exploring new things.
        
            <span className='font-bold text-t-blue'>Currently, my focus is on web development,</span> where I'm diving deep into various aspects to create innovative and efficient solutions.
            </p>
            <p className='leading-8  lg:leading-[2rem] text-justify' >
            Apart from web development, I'm also fascinated by electronic systems and their potential. I aim to incorporate them into my future projects. <span className='font-bold text-t-blue'>"I am keen to apply my skills in real-world projects and actively seeking internships for hands-on experience and exciting opportunities."</span>
          </p>
      </div>

      </div>
    </div>
  )
}

export default About
