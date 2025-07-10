import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const skills = [
    {
        skill: 'HTML',
        icon: FaHtml5,
    },
    {
        skill: 'CSS',
        icon: FaCss3Alt,
    },
    {
        skill: 'JavaScript',
        icon: IoLogoJavascript,
    },
    {
        skill: 'TypeScript',
        icon: SiTypescript,
    },
    {
        skill: 'C++',
        icon: SiCplusplus,
    },
    // {
    //     skill: 'Java',
    //     icon: FaJava,
    // },
    {
        skill: 'MongoDB',
        icon: DiMongodb,
    },
    {
        skill: 'ExpressJS',
        icon: SiExpress,
    },
    {
        skill: 'ReactJS',
        icon: FaReact,
    },
    {
        skill: 'NodeJS',
        icon: FaNodeJs,
    },
    {
        skill: 'TailwindCSS',
        icon: RiTailwindCssFill,
    },
]

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item, index) => {
                return (
                    <motion.div variants={fadeIn('down', `0.${index}`)} initial="hidden" whileInView="show" viewport={{once:true, amount:0}}>
                        <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/> 
                    </motion.div>
                )
            })}
        </div>
    </div>
  )
}

export default AllSkills