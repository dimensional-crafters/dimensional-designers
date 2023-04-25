/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/skater.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useCustomization } from '../contexts/Customization'

const Skater = (props) => {
  const { tapeColor, wheelColor } = useCustomization();

  const { nodes, materials } = useGLTF('./models/skater.gltf')

  const griptapeTextureProps = useTexture({
    //map: './textures/griptape/M_GB14_Skateboard_baseColor.png',
    normalMap: './textures/griptape/Plastic_003_normal.jpg',
    roughnessMap: './textures/griptape/Plastic_003_roughness.jpg',
    aoMap: './textures/griptape/Plastic_003_ambientOcclusion.jpg',
  });

  materials['Material.002'].color.set(tapeColor.color);
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.065} position={[0, -0.091, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_01031.geometry} >
            <meshStandardMaterial  {...griptapeTextureProps} color={wheelColor.color} roughness={2.7} />
          </mesh>  
          <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_01100.geometry} material={materials['Material.002']} position={[13.36, 8.79, -15.16]} >
            {/* <meshBasicMaterial color={tapeColor.color} /> */}
          </mesh>
          <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_0224.geometry} material={materials.M_GB14_Skateboard} />
          <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_0270.geometry} material={materials.M_GB14_Skateboard} />
          <mesh geometry={nodes.GB14_Skateboard_M_GB14_Skateboard_0271.geometry} material={materials.M_GB14_Skateboard} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/skater.gltf')

export default Skater;