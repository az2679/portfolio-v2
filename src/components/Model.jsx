import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { MeshStandardMaterial, MeshBasicMaterial } from 'three';

export default function Model({ path }) {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  useEffect(() => {
    modelRef.current.traverse((child) => {
      if (child.isMesh) {
        // child.material = new MeshStandardMaterial({color: '#EBDDCF'})
        // child.material = new MeshStandardMaterial({color: '#323841'})
        child.material = new MeshStandardMaterial({color: '#98928F'}) 
      }
    })
  }, [])

  return (
    <>
      <mesh position={[-2.2, 30, 23]} rotation={[-Math.PI * 0.3, 0, Math.PI * 0.82]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#F9EEE2" />
      </mesh>
      <mesh position={[-15, 20, 38]} rotation={[-Math.PI * 0.3, 0, 0]}>
        <planeGeometry args={[40, 30]} />
        <meshStandardMaterial color="#F9EEE2" />
      </mesh>
      <mesh position={[21.75, 30, 23]} rotation={[-Math.PI * 0.3, 0, -Math.PI * 0.8]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#F9EEE2" />
      </mesh>
      <mesh position={[25, 21, 36]} rotation={[-Math.PI * 0.3, 0, Math.PI * 0.01]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#F9EEE2" />
      </mesh>
      <mesh position={[10, 14, 46.5]} rotation={[-Math.PI * 0.3, 0, 0]}>
        <planeGeometry args={[15, 10]} />
        <meshStandardMaterial color="#F9EEE2" />
      </mesh>

      <primitive object={scene} ref={modelRef} position={[7, 15, 42]} rotation={[-Math.PI * 0.3, -Math.PI * 0.0, Math.PI * 0.0]}/>
    </>
  )
}