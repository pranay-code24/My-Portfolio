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
    {
        skill: 'Java',
        icon: FaJava,
    },
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

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-12 my-12'>
        {skills.map((item, index) => {
            return (
                <motion.div variants={fadeIn('up', `0.${index}`)} initial="hidden" whileInView="show" viewport={{once:false, amount:0.7}} key={index} className='flex flex-col items-center'>
                    <item.icon className='text-7xl text-orange'/>
                    <p className='text-center mt-4 text-white'>{item.skill}</p>
                </motion.div>
            );
        })}
    </div>
  )
}

export default AllSkillsSM