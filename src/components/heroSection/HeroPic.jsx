import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView="show" viewport={{once:true, amount:0}} className='h-full flex items-center justify-center'>
        <img src="images/my-image.png" alt='Pranay Gumashta' className='max-h-[450px] w-auto'/>
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <PiHexagonThin className='md:h-[90%] lg:h-[120%] lg:min-h-[620px] md:min-h-[620px] w-auto text-cyan-500 blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </motion.div>
  )
}

export default HeroPic;