import React, { useRef } from 'react'
import { useState } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei'

let initialPos = new THREE.Vector3(0,20,0)

const CameraModule = () => {
  const [hovered, setHovered] = useState(false)
  const myMesh= useRef();
    const [cameraView, setCameraView] = useState();
    const cameraRef = useRef();
    
    const cameraPositions = [
        new THREE.Vector3(26, 1, 40),
        new THREE.Vector3(0, 1, 14),
        new THREE.Vector3(-4, 0.3, 2),
        new THREE.Vector3(0,60, 20),
        new THREE.Vector3(-10,30,50)
      ];
      const targets = [
        new THREE.Vector3(23, 0.3, 36),
        new THREE.Vector3(-5,0,14),
        new THREE.Vector3(-2.8,0.5,0.5),
        new THREE.Vector3(0,0,10),
        new THREE.Vector3(15,0,15)
      ];

      const playAnimation = useControls({
        View1: { value: false, onChange: () => setView(1) },
        View2: { value: false, onChange: () => setView(2) },
        View3: { value: false, onChange: () => setView(3) },
        initialView:{value: false, onChange: () => setView(4)},
        finalView:{value: false, onChange: () => setView(5)}
      })

    
      const setView = (viewIndex) => {
        setCameraView(viewIndex);
      }

      useFrame((state, delta) => {
        myMesh.current.rotateX +=delta;
        if (cameraView > 0 && cameraView <= cameraPositions.length ) {
          const newPosition = cameraPositions[cameraView - 1];
          const newTarget = targets[cameraView - 1];

          state.camera.position.lerp(newPosition, delta);
          state.camera.lookAt(newTarget);
        }
      })
  return (
    <>
    {/* target_1 */}
    <mesh position={[23,0.3,36]} ref={myMesh} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <boxGeometry args={[0.2,0.2,0.2]}/>
      <meshStandardMaterial attach='material' color={hovered ? 'blue' : 'green'}/>
      {/* <Html distanceFactor={10}>
        <div class="content">
          hello <br />
          world
        </div>
      </Html> */}
    </mesh>
    {/* target_2 */}
    <mesh position={[-5,0.3,14]} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <boxGeometry args={[0.2,0.2,0.2]}/>
      <meshStandardMaterial attach='material' color={hovered ? 'blue' : 'green'}/>

    </mesh>
    {/* target_3 */}
    <mesh position={[-2.8,0.5,0.5]} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      <boxGeometry args={[0.2,0.2,0.2]}/>
      <meshStandardMaterial attach='material' color={hovered ? 'blue' : 'green'}/>
    </mesh>
        {/* target_4 */}
        <mesh position={[0,0,10]}>
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial attach='material' color={'green'}/>
    </mesh>
    {/* target_5 */}
    <mesh position={[15,0,15]}>
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial attach='material' color={'green'}/>
    </mesh>
    </>
  )
}

export default CameraModule