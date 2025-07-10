import React from 'react'
import {Link} from 'react-scroll';

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start items-center md:text-left text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>Hi, I’m Pranay Gumashta — a passionate full-stack developer and competitive programmer who loves building real-world applications
           that are fast, scalable, and thoughtfully designed. I take pride in crafting end-to-end products — from intuitive user interfaces
           to secure backend systems — with a strong focus on performance, clean architecture, and user experience. My background in competitive
           programming has sharpened my ability to think algorithmically, write efficient code, and solve complex problems with clarity. What 
           sets me apart is a blend of technical depth, product thinking, and attention to detail. I’m always learning, iterating, and pushing 
           to turn good ideas into polished, production-ready solutions. Let’s build something impactful together!
        </p>
        <Link to="projects" smooth={true} spy={true} duration={500} offset={-130} className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange hover:text-darkBrown transition-all duration-500 cursor-pointer md:self-start self-center text-white'>My Projects</Link>
    </div>
  )
}

export default AboutMeText