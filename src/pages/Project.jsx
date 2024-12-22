import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { useProject } from '../context/ProjectContext';
import Scene from './Scene';

export default function Project() {
  const { activeProject, projects } = useProject();
  const navigate = useNavigate();

  const activeProjectDetails = activeProject
    ? projects.find(project => project.id === activeProject) || { cover: '', description: '', id: '' }
    : { cover: '', description: '', id: '' };

  const handleClick = () => {
    if(activeProjectDetails.id === 'gallery'){
      navigate('/gallery')
      // navigate('/portfolio-v2/gallery')
    } else {
      navigate('/case-study')
      // navigate('/portfolio-v2/case-study')
    }
  };

  return (
    <>
    <div id="project_wrapper">
      <div className="projectContainer">
      <div className="projectImageContainer">
          <img className="projectImage" src={activeProjectDetails.cover} alt="Image of Project"/>
        <button className="goButton" onClick={handleClick}>
        <ReactSVG style={{height:'100%', width:'100%'}} src={'./icon/arrow.svg'} />
        </button>
      </div>
      <div className="projectDescriptionContainer">
        <p className="projectDescription">
            {activeProjectDetails.description}
        </p>
        </div>
      </div>
    </div>

    <Scene />
    </>
  );
}
