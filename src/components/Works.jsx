import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = React.memo(({ index, name, description, image, source_code_link, live_link }) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full px-4"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450, perspective: 1000, glare: false }}
        className='bg-tertiary p-5 rounded-2xl h-full w-full max-w-[360px] mx-auto'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' loading="lazy" />
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <div className='mt-4 flex justify-center gap-3'>
            {source_code_link && (
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className='text-white bg-black-100 py-2 px-4 rounded-md text-sm font-medium hover:bg-black-200 transition-colors flex-shrink-0'
              >
                View Code
              </button>
            )}
            {live_link ? (
              <button
                onClick={() => window.open(live_link, "_blank")}
                className='text-white bg-primary py-2 px-4 rounded-md text-sm font-medium hover:bg-primary/80 transition-colors flex-shrink-0'
              >
                Live Demo
              </button>
            ) : (
              <button
                className='text-white bg-gray-500 py-2 px-4 rounded-md text-sm font-medium cursor-not-allowed opacity-70 flex-shrink-0'
                disabled
              >
                Demo Coming Soon
              </button>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
});

const NewProjectsShowcase = () => {
  // Filter only the two new projects
  const newProjects = projects.filter(project => 
    project.name === "Bites" || project.name === "Royalspoon Food and Events"
  );

  return (
    <div className="min-h-screen bg-primary p-8">
      {/* Special Header for Screenshot */}
      <div className="text-center mb-12">
        <h1 style={{fontFamily:'Beckman Demons', marginBottom:'20px'}} className="text-4xl font-bold text-white mb-2">NEW ADDITION</h1>
        <p className="text-xl text-secondary">Recently added to my portfolio</p>
      </div>
      
      {/* Projects Display - Side by Side */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        {newProjects.map((project, index) => (
          <div key={index} className="w-full md:w-1/2 max-w-[500px]">
            <ProjectCard 
              index={index}
              {...project}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// For screenshot purposes, you can temporarily use this component
// export default SectionWrapper(NewProjectsShowcase, "");

// Your original Works component (keep this for your actual portfolio)
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] px-4'
        >
          Following projects showcases my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos.
        </motion.p>
      </div>
      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-4'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Works, "");
// export default SectionWrapper(NewProjectsShowcase, "");
