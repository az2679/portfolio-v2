import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";

import { useProject } from '../context/ProjectContext';
import AnimatedCamera from "../AnimatedCamera";
import Model from '../components/Model';
import Cluster from '../components/Cluster';
import { Html } from '@react-three/drei';

export default function Scene(){
  const { projects } = useProject();
  const raycastBoundingRef = useRef();
  const userRef = useRef();

  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const clusterPositions = {
    'tangible values': 
    { 
      position: [-8, 13, 20], 
      rotation: [-Math.PI*0.4, Math.PI*0.15, -Math.PI*0.1], 
      titlePosition: [4, 0, 0.5], 
      titleRotation: [Math.PI * 0.2, Math.PI * 0.2, -Math.PI * 0.09] 
    },
    'how are you': 
    {
       position: [3, 7, 10], 
       rotation: [Math.PI*0.1,Math.PI*0.35, Math.PI*0.0], 
       titlePosition: [4, -0.5, 2], 
       titleRotation: [-Math.PI * 0.0, Math.PI * 0.05, Math.PI * 0.0] 
      },
    'the social trolley': 
    { 
      position: [-11, -3, 20], 
      rotation: [Math.PI*0.05,Math.PI*0.2, -Math.PI*0.06], 
      titlePosition: [5.5, 1, 0.5], 
      titleRotation: [-Math.PI * 0.0, Math.PI * 0.4, Math.PI * 0.0] 
    },
    'gallery': 
    { 
      position: [-2, -7, 0], 
      rotation: [Math.PI*0.0,Math.PI*0.3, Math.PI*0.0], 
      titlePosition: [7, 1.5, 2], 
      titleRotation: [-Math.PI * 0.0, Math.PI * 0.03, Math.PI * 0.0] 
    },
  };

  const mobileClusterPositions = {
    'tangible values': 
    { 
      position: [0.5, 10, 26], 
      rotation: [-Math.PI*0.4, Math.PI*0.15, -Math.PI*0.1], 
      titlePosition: [0,0,0], 
      titleRotation: [0,0,0],
    },
    'how are you': 
    {
       position: [5, 10, 23],
       rotation: [Math.PI*0.1,Math.PI*0.35, Math.PI*0.0], 
       titlePosition: [0,0,0],
       titleRotation: [0,0,0],
      },
    'the social trolley': 
    { 
      position: [7, 10, 18], 
      rotation: [Math.PI*0.2,Math.PI*0.05, -Math.PI*0.2], 
      titlePosition: [0,0,0],
      titleRotation: [0,0,0],
    },
    'gallery': 
    { 
      position: [8, 11, 10], 
      rotation: [Math.PI*0.0, Math.PI*0.0, Math.PI*0.0], 
      titlePosition: [0,0,0], 
      titleRotation: [0,0,0],
    },
  };

  return(
    <div id="canvas_wrapper" >
      <div ref={raycastBoundingRef} className="boundingBoxContainer" />
      <Canvas>
        <AnimatedCamera userRef={userRef} />
        <ambientLight intensity={4} color="#F1EFED"  />
      <directionalLight position={[5, 20, 15]} intensity={3} color="#F1EFED"  />
        <color args={["#F1EFED"]} attach="background" />
       
        <Suspense fallback={<Html><div style={{marginLeft: '-20vw', height:'200vh', display:'flex', justifyContent:'center'}}>Loading...</div></Html>}>

        {projects.map((project, index) => {
          const { position, rotation, titlePosition, titleRotation } = 
            mobile ? 
            mobileClusterPositions[project.title] || { position: [0, 0, 0], rotation: [0, 0, 0], titlePosition: [0, 0, 0], titleRotation: [0, 0, 0] }
            : clusterPositions[project.title] || { position: [0, 0, 0], rotation: [0, 0, 0], titlePosition: [0, 0, 0], titleRotation: [0, 0, 0] };
        
          return(
            <Cluster 
              key={index}
              title={project.title}
              position={position}
              rotation={rotation}
              titlePosition={[position[0]+titlePosition[0], position[1]+titlePosition[1], position[2]+titlePosition[2]]}
              titleRotation={titleRotation}
              tags={project.tags}
            />
          )
        })}

          <Model path={'./assets/window.gltf'} />
        </Suspense>

      </Canvas>
      </div>
  )
}