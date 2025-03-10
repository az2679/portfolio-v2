import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';

import { useGallery } from '../context/GalleryContext';
import GalleryIcon from '../components/GalleryIcon';
import GalleryCard from '../components/GalleryCard';


export default function Gallery(){
  const navigate = useNavigate();
  const { activeProjects, toggleProjectActiveState, gallery } = useGallery();
  const [activeProjectIndicies, setActiveProjectIndicies] = useState([]);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  const half = Math.floor(gallery.length/2);
  const firstHalf = gallery.slice(0, half);
  const secondHalf = gallery.slice(half);

  const handleClick = () => {
    navigate('/')
    // navigate('/portfolio-v2')
    window.scrollTo(0, window.innerHeight);
  };

  const handleIconClick = (index) => {
    toggleProjectActiveState(index)
    setActiveProjectIndicies(prevState => 
      prevState.includes(index)
      ? prevState.filter(i => i !== index)
      : [...prevState, index]
    )
  }

  return(
    <div id="gallery_wrapper"> 
        

    <div className='galleryImageContainer' style={{marginLeft:'5vw', marginTop:'4vh'}}>
    <img src="./personal/tobi.jpeg" alt="image of my dog, Tobi"/>
    <p style={{position:'absolute', top:'46vh', left:'8vw'}}>pet: tobi</p>
    </div>


    <div className="galleryIconContainer topIcons">
    {firstHalf.map((project, index) => (
      <GalleryIcon
        key={index}
        project={project}
        path={project.icon}
        isActive={activeProjects[index]}
        onClick={() => handleIconClick(index)}
      />
    ))}
    </div>

    <div className="galleryIconContainer bottomIcons">
    {secondHalf.map((project, index) => (
      <GalleryIcon
        key={index + half}
        project={project}
        path={project.icon}
        isActive={activeProjects[index + half]}
        onClick={() => handleIconClick(index + half)}
      />
    ))}
    </div>

    <div className='galleryImageContainer' style={{marginLeft: '2vw', marginTop:'4vh'}}>
    <img src="./personal/bento.jpeg" alt="image of bento I made"/>
    <p style={{position:'absolute', top:'50vh', left:'auto', right:'9vw'}}>hobby: cooking</p>
      </div>

    {activeProjectIndicies.map((index,idx) => (
      <motion.div style={{position:'fixed'}}
      key={index}
      drag
      dragConstraints={
        mobile
          ? { left: -window.innerWidth*0.5, top: -window.innerHeight*0.5, right:window.innerWidth*0.75, bottom:window.innerHeight*0.75 } 
          : {left:-window.innerWidth*0.5, top:-window.innerHeight*0.5, right:window.innerWidth*0.85, bottom:window.innerHeight*0.85}
      }
      initial={
        mobile
          ? { x: 0, y: 0 + (idx * 50), scale: 1 } 
          : { x: window.innerHeight * 1.1, y: 0 + (idx * 50), scale: 1 }
      }
      dragElastic={0}
      whileHover={!mobile ? { scale: 1.025 } : undefined}
    whileTap={!mobile ? { scale: 0.99 } : undefined}
      transition={{ type:'tween', stiffness: 500 }}
      >
        <GalleryCard project={gallery[index]} />
      </motion.div>
      )
    )}
    
    <button className="galleryButton" onClick={handleClick}>
    <ReactSVG style={{height:'100%', width:'100%'}} src={'./icon/arrow.svg'} />
    </button>



    </div>
  )
}