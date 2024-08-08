import Carousel from './Carousel';

export default function GalleryCard({project}){

  const assignLink = (tag, index) => {
    if ((tag === 'github' || tag === 'try it' || tag === 'case study') && project.link.length > 0) {
      if (project.tags.includes('github') && project.tags.includes('try it')) {
        if (tag === 'github') {
          return project.link[0];
        } else if (tag === 'try it') {
          return project.link.length > 1 ? project.link[1] : project.link[0];
        }
      } else {
        return project.link[0];
      }
    }
    return null;
  };

  return(
    <div className="galleryCard">

      <p style={{fontFamily:'Roboto Mono, monospace', letterSpacing:'0.1em', paddingLeft:'0.5vw'}}>{project.title}</p>

      <div className="cardImageContainer">
        <Carousel items={project.media} />
      </div>

      <div className="cardTagContainer">
      {project.tags.map((tag, index) => (
        <span key={index} className="tag" style={{scale: '85%', margin: '0vh -0.2vw' }}>
          {tag === 'github' || tag === 'try it' || tag === 'case study' ? (
            <a href={assignLink(tag, index)} target="_blank" rel="noopener noreferrer">
            {tag}
            <svg className='linkButton' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
              <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"></path>
            </svg>
            </a>
            ) : (
            tag
            )}
        </span>
      ))}
      </div>

      <div className="cardDescriptionContainer">
        <p>{project.description}</p>
      </div>

    </div>
  )
}