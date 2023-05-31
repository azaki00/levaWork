import React, { useRef } from 'react'
import { useState } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';

const CameraModule = () => {
    const [cameraView, setCameraView] = useState();
    const cameraRef = useRef();
    const cameraPositions = [
        new THREE.Vector3(26, 1, 40),
        new THREE.Vector3(0, 1, 14),
        new THREE.Vector3(-4, 0.3, 2)
      ];
      const targets = [
        new THREE.Vector3(23, 0.3, 36),
        new THREE.Vector3(-5,0,14),
        new THREE.Vector3(-2.8,0.5,0.5)
      ];

      const playAnimation = useControls({
        View1: { value: false, onChange: () => setView(1) },
        View2: { value: false, onChange: () => setView(2) },
        View3: { value: false, onChange: () => setView(3) }
      })

    
      const setView = (viewIndex) => {
        setCameraView(viewIndex);
      }

      useFrame((state, delta) => {
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
    <mesh position={[23,0.3,36]}>
      <boxGeometry args={[0.1,0.1,0.1]}/>
      <meshStandardMaterial attach='material' color={'green'}/>
    </mesh>
    {/* target_2 */}
    <mesh position={[-5,0.3,14]}>
      <boxGeometry args={[0.1,0.1,0.1]}/>
      <meshStandardMaterial attach='material' color={'green'}/>
    </mesh>
    {/* target_3 */}
    <mesh position={[-2.8,0.5,0.5]}>
      <boxGeometry args={[0.1,0.1,0.1]}/>
      <meshStandardMaterial attach='material' color={'green'}/>
    </mesh>
    </>
  )
}

export default CameraModule