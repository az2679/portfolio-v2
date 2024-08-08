import { Text3D } from "@react-three/drei";
import RobotoThin from '../font/Roboto_Thin.json'

export default function Text({text, position, rotation, scale, color}) {
  return (
    <>
        <Text3D 
        position={position ? position : [0, 0, 0]}
        rotation={rotation ? rotation : [0, 0, 0]}
        font={RobotoThin}
        scale={scale ? scale:[0.9, 0.8, 0.75]} 
        letterSpacing={0.45}
        height={0.3}
        bevelEnabled
        bevelSize={0.14}
        bevelSegments={25}
        bevelThickness={0.25}
        >
          {text}
          <meshStandardMaterial color={color} />
        </Text3D>
    </>
);
}
