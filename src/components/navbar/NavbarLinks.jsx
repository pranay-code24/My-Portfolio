import React from 'react';
import {Link} from 'react-scroll';

const links = [
  { link: "About Me", section: "about"},
  { link: "Skills", section: "skills"},
  // { link: "Experience", section: "experience"},
  { link: "Projects", section: "projects"},
  { link: "Achievements", section: "achievements"},
]


const NavbarLinks = () => {
  return (
    <ul className='flex gap-10 text-white font-bold text-center lg:flex-row flex-col lg:relative absolute top-[120%] left-[70%] -translate-x-[70%] lg:text-md text-xl bg-cyan/30 backdrop-blur-lg lg:bg-black w-full py-4'>
      {links.map((link, index) => {
        return(
          <li key={index} className='group'>
            <Link to={link.section} smooth={true} spy={true} duration={500} offset={-130} className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>{link.link}</Link>
            <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarLinks