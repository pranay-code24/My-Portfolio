import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';
import AchievementsText from './AchievementsText';
import SingleAchievement from './SingleAchievement';

const projects = [
    {
        name: (<> <i>AIR 1101 - International Collegiate <br/>Programming Contest 2024</i> </>),
        year: "November 2024",
        team: "Bitwise Coders",
        align: "left",
        image: "../../src/images/icpc.png",
        link: "https://drive.google.com/file/d/1L-QmCuLKLcvg9biKDd8P5R6saDjUSu9Q/view?usp=drivesdk",
    },
    {
        name: (<> <i>Grand Finalist - Smart India <br/>Hackathon 2024 </i></>),
        year: "December 2024",
        team: "Code Cadets",
        align: "right",
        image: "../../src/images/sih.jpeg",
        link: "https://drive.google.com/file/d/1nC3pR65o3K5cA3Cngw-lsW7PK9SDkjT9/view?usp=drivesdk",
    },
]

const AchievementsMain = () => {
  return (
    <div id='achievements' className='max-w-[1200px] mx-auto px-4'>
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{once:false, amount:0}}>
            <AchievementsText/>
        </motion.div>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item, index) => {
                return (
                    <SingleAchievement 
                        key={index} 
                        name={item.name}
                        team={item.team}
                        year={item.year}
                        align={item.align}
                        image={item.image}
                        link={item.link}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default AchievementsMain;