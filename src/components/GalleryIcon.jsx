import { ReactSVG } from 'react-svg'

export default function GalleryIcon({project, path, isActive, onClick}){

  return(
    <div className="galleryCluster">
    <div className={`galleryIcon ${isActive ? 'active' : ''}`} onClick={onClick}> 
      <ReactSVG style={{height:'100%'}} src={path} />
    </div>
    <p style={{userSelect:'none'}}>{project.title}</p>
    </div>
  )
}