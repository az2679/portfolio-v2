import { useRef, useEffect, useState } from 'react';
import { PerspectiveCamera } from '@react-three/drei';

import { AnimationTimeline } from './AnimationTimeline';

function AnimatedCamera() {
  const cameraRef = useRef();

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


  useEffect(() => {
    AnimationTimeline.clear();
  
    

    if (mobile){
      AnimationTimeline.to(
        cameraRef.current.position,
        {
          x: 9,
          y: 20,
          z: 35,
        },
        "mobileZoom"
      );

      AnimationTimeline.to(
        cameraRef.current.position,
        {
          x: 31,
          y: -4,
          z: 50,
        },
        "mobileLevel"
      );
  
      AnimationTimeline.to(
        cameraRef.current.rotation,
        {
          x: 0,
          y: 0.7,
          z: 0,
        },
        "mobileLevel"
      );

      AnimationTimeline.to(
        cameraRef.current.position,
        {
          x: 31,
          y: -4,
          z: 50,
        },
        "mobileHold0"
      );
      AnimationTimeline.to(
        cameraRef.current.position,
        {
          x: 31,
          y: -4,
          z: 50,
        },
        "mobileHold1"
      );


  } else {
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 10,
        y: 20,
        z: 30,
      },
      "zoomIn"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 10,
        y: 5,
        z: 35,
      },
      "desktopLevel"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 0.3,
        z: 0,
      },
      "desktopLevel"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 0.5,
        z: 0,
      },
      "zoomOut"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 35,
        y: 2,
        z: 40,
      },
      "zoomOut"
    );
    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 0.4,
        z: 0,
      },
      "moveLeft"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 35,
        y: 2,
        z: 40,
      },
      "desktopHold0"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 35,
        y: 2,
        z: 40,
      },
      "desktopHold1"
    );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 35,
        y: 2,
        z: 40,
      },
      "desktopHold2"
    );
  }

    return () => CameraTimeline.kill();
  }, [mobile]);

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      // position={[15, 30, 50]}
      position={[18, 35.5, 54]}
      rotation={[-Math.PI *0.2, Math.PI *0.1, Math.PI *0.1]}
    />
  );
}

export default AnimatedCamera;
