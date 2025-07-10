import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const projects = [
    {
        name: (<> <i>Career Mania - A Job Portal</i> </>),
        year: "September 2024",
        align: "right",
        image: "images/job.png",
        link: "https://github.com/pranay-code24/Career-Mania",
    },
    {
        name: (<> <i>Taste Bridge - A Restaurant <br/> Platform</i> </>),
        year: "December 2024",
        align: "left",
        image: "images/taste.png",
        link: "https://github.com/pranay-code24/Taste-Bridge",
    },
    {
        name: (<> <i>Bidirectional ClickHouse & <br/> Flat File Data Ingestion Tool</i> </>),
        year: "March 2025",
        align: "right",
        image: "images/website-img-3.jpg",
        link: "https://github.com/pranay-code24/Data-Ingestion-Tool",
    },
    {
        name: (<> <i>Order Management System</i> </>),
        year: "May 2025",
        align: "left",
        image: "images/website-img-4.jpg",
        link: "https://github.com/pranay-code24/Order_management_System",
    },
    {
        name: (<> <i>Cat Facts App</i> </>),
        year: "May 2025",
        align: "right",
        image: "images/cat.jpeg",
        link: "https://github.com/pranay-code24/Random-Cat-Facts",
    },
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{once:true, amount:0}}>
            <ProjectsText/>
        </motion.div>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item, index) => {
                return (
                    <SingleProject 
                        key={index} 
                        name={item.name}
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

export default ProjectsMain