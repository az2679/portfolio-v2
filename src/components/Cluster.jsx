import React, { useState, useEffect } from 'react';
import { Box, RoundedBox, Html, Octahedron } from '@react-three/drei';
import { BackSide } from 'three';

import { useProject } from '../context/ProjectContext';
import Text from './Text';

export default function Cluster({ title, position, rotation, titlePosition, titleRotation, tags }) {
  const { activeProject, setActiveProject } = useProject();
  const [color, setColor] = useState('#3D444F')
  const [tagVisible, setTagVisible] = useState(false)

  const handleClick = () => {
    setActiveProject(title);
    setColor('#323841')
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      setTagVisible(scrollPosition > viewportHeight * 0.5 && scrollPosition < viewportHeight * 1.5);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const renderGeometry = () => {
    switch (title) {
      case 'tangible values':
        return(
          <Octahedron args={[1, 0]} position={[0,-0.5,0.75]} >
            <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
          </Octahedron>
        );
      case 'how are you':
        return(
          <group>
            <Box position={[-1.5, 0, 2]} args={[2, 2.5, 2]} >
               <meshStandardMaterial color={activeProject === title ? color : '#98928F'} side={BackSide} />
           </Box>
            <Box position={[-2.4, 0, 2]} args={[0.2, 2.5, 2]} >
               <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
            </Box>
            <Box position={[-0.39, 0, 2]} args={[0.2, 2.5, 2]} >
               <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
            </Box>
            <Box position={[-1.5, 1.2, 2]} args={[2, 0.2, 2]} >
               <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
            </Box>
            <Box position={[-1.4, 1.4, 1.9]} args={[2.1, 0.2, 1.8]} >
               <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
            </Box>
  
          </group>
        );
      case 'the social trolley':
        return(
          <group>
            <RoundedBox position={[0.1, 1.9, -0.3]} args={[1.7, 1.6, 1.2]} radius={0.1} smoothness={1} >
              <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
            </RoundedBox>
            <Box position={[0, 0.5, -0.5]} args={[2.2, 1, 1.5]} >
              <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
            </Box>
            <Box position={[0, 0, 1]} args={[2, 0.1, 1]} >
              <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
            </Box>
            <Box position={[1.5, 0, 1.1]} args={[0.5, 0.1, 0.7]} >
              <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
            </Box>
          </group>
        )
      case 'gallery':
        return (
          <group>
            {[0, 1, 2, 3].map((i) => (
              <RoundedBox key={i} args={[1.5, 1.5 ,0.1]} radius={0.3} smoothness={4} position={[i%2*2, Math.floor(i/2)*2, 0]} rotation={[0,0,0]}>
                <meshStandardMaterial color={activeProject === title ? color : '#98928F'} />
              </RoundedBox>
            ))}
          </group>
        );
      default:
        return (
          <Box args={[1.5, 1.5, 1.5]} position={[0,0,0]} >
            <meshStandardMaterial color={activeProject === title ? color : '#B6AEAA'} />
          </Box>
        )
    }
  }

  return (
    <>
      <mesh position={position} rotation={rotation} onClick={handleClick}>
        {renderGeometry()}
      </mesh>

      <Text text={title} position={titlePosition} rotation={titleRotation} color={activeProject === title ? color : '#98928F'}/>

      <Html className={`projectTagContainer ${tagVisible ? 'visible' : 'hidden'}`} position={[position[0]+3, position[1]-1, position[2]+1]}>
        {tags.map((tag, index) => (
          <span key={index} className='tag'>
            {tag}
          </span>
        ))}
      </Html>
    </>
  );
}
