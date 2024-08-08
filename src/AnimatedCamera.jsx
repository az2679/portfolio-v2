import { useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';

import { AnimationTimeline } from './AnimationTimeline';

function AnimatedCamera() {
  const cameraRef = useRef();

  useEffect(() => {

    // AnimationTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x: 20,
    //     y: 35,
    //     z: 53,
    //   },
    //   "zero"
    // );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 10,
        y: 20,
        z: 30,
      },
      "one"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 0.4,
        z: 0,
      },
      "two"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 30,
        y: 2,
        z: 40,
      },
      "two"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 30,
        y: 2,
        z: 40,
      },
      "three"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 30,
        y: 2,
        z: 40,
      },
      "four"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 30,
        y: 2,
        z: 40,
      },
      "five"
    );

    // return () => CameraTimeline.kill();
  }, []);

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
