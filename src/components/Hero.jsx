import { motion } from "framer-motion";
import { styles } from "../styles";

const resumeUrl =  '../assets/new_cv.pdf';

const Hero = () => {



  return (
    
    <section className={`relative w-full min-h-[60vh] mx-auto`}>

      {/* Resume button */}
      
      <div className="fixed right-6 bottom-6 z-50">
        <a href={resumeUrl} download aria-label="Download resume" title="Download resume (PDF)">
          <div className="group flex flex-col items-center md:flex-row gap-3">
            {/* visible label on md+ (left) and small screens (above) */}
            <span className="block md:hidden text-xs px-2 rounded-full bg-black/60 text-white font-medium text-center">My Resume</span>
            <span className="hidden md:inline-block py-1 rounded-full bg-black/60 text-white text-sm font-medium">My Resume</span>

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#915EFF] to-[#5A36D8] text-white flex items-center justify-center shadow-2xl hover:scale-105 transform transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v12m0 0l-4-4m4 4l4-4M21 21H3" />
                </svg>
              </div>
              {/* tooltip visible on hover/focus */}
            </div>
          </div>
          <span className="sr-only">Download resume PDF</span>
        </a>
      </div>

      <div className={`relative pt-16 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915EFF]'>Isaac Ade</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop websites for any kind of businesses. Skilled at transforming business objectives into digital solutions. Proven ability to lead the design intent with robust technical execution. 
          </p>
        </div>
      </div>
      
      {/* <div className="absolute bottom-[100px] w-full flex justify-center items-center">
      
        {isDesktop ? (
          <div className="w-full h-[600px]">
            <ComputersCanvas />
            
          </div>
        ) : (
          <img
            src={computer}
            alt=""
            className="w-[90%] h-auto object-contain -mb-5 opacity-90"
          />
          
        )}

      </div> */}


  <div className='absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      
    </section>
  );
};

export default Hero;
