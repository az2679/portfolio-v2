import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { useProject } from '../context/ProjectContext';
import Carousel from '../components/Carousel';


export default function CaseStudy({pageVariants, pageTransition}){
  const navigate = useNavigate();
  const { activeProject, setActiveProject, projects } = useProject();
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeProjectDetails = activeProject
  ? projects.find(project => project.title === activeProject)
  : { cover: '', description: '' }

  const handleClick = () => {
    navigate('/')
    // navigate('/portfolio-v2')
    window.scrollTo(0, window.innerHeight);
  };

  useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight * 0.6;
        const summaryElement = document.getElementById('summary');
        const contextElement = document.getElementById('context');
        const technicalElement = document.getElementById('technical');
  
        if (summaryElement && contextElement && technicalElement) {
          const summaryTop = summaryElement.offsetTop;
          const contextTop = contextElement.offsetTop;
          const technicalTop = technicalElement.offsetTop;
  
          if (scrollPosition >= technicalTop) {
            setActiveSection(3);
          } else if (scrollPosition >= contextTop) {
            setActiveSection(2);
          } else if (scrollPosition >= summaryTop) {
            setActiveSection(1);
          } else {
            setActiveSection(0);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return(
    <motion.div
      initial='initial'
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >

      <motion.div id="caseStudy_wrapper">

      <motion.div className="caseImageContainer" >
        <div>
        {activeSection <= 1 &&
            activeProjectDetails.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          {activeSection === 2 &&
            activeProjectDetails.tagsContext.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          {activeSection === 3 &&
            activeProjectDetails.tagsTechnical.map((tag, index) => (
              <a key={index} className="tag" href={activeProjectDetails.link[index]} target="_blank" rel="noopener noreferrer">
                {tag}
                <svg className='linkButton' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                  <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path>
                </svg>
              </a>
            ))}
         </div>

         <div className="projectImageContainer">
          {activeSection <= 1 && (
            <Carousel items={activeProjectDetails.documentation1} />
          )}
          {activeSection === 2 && (
            <Carousel items={activeProjectDetails.documentation2} />
          )}
          {activeSection === 3 && (
            <Carousel items={activeProjectDetails.documentation3} />
          )}
        </div>

        <button className="backButton"  onClick={handleClick}>
        <ReactSVG style={{height:'100%', width:'100%'}} src={'./icon/arrow.svg'} />
         </button>

         <div className="caseDescriptionContainer">
          {activeSection <= 1 && (
            <p className="projectDescription">
              {activeProjectDetails.description}
            </p>
          )}
          {activeSection === 2 && (
            <p className="projectDescription">
              {activeProjectDetails.altTextContext}
            </p>
          )}
          {activeSection === 3 && (
            <p className="projectDescription">
              {activeProjectDetails.altTextTechnical}
            </p>
          )}
        </div>
      </motion.div>

    <motion.div className="caseTextContainer">
      <div id="summary" className="caseSection">
        <div>
          <motion.h1>{activeProjectDetails.title}</motion.h1>
          <div className='caseText'>
            <p>{activeProjectDetails.summary}</p>
          </div>
        </div>
      </div>

      <div id="context" className="caseSection">
        <div>
            <h1>context</h1>
          <div className='caseText'>
            <p>{activeProjectDetails.context}</p>
          </div>
        </div>
      </div>

      <div id="technical" className="caseSection">
        <div>
          <h1>technical details</h1>
          <div className='caseText'>
            <p>{activeProjectDetails.technical}</p>
          </div>
        </div>
      </div>
    </motion.div>

      </motion.div>
    </motion.div>

  )
}