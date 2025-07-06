import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='https://www.linkedin.com/in/pranay-code24' Icon={FaLinkedinIn}/>
        <SingleContactSocial link='https://github.com/pranay-code24' Icon={FiGithub}/>
    </div>
  )
}

export default ContactSocial