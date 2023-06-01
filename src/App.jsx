import React from 'react';
import { useRef } from 'react';
import { GizmoHelper, GizmoViewcube, Sky, Stars } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber';
import ModelLoader from './ModelLoader'
import './App.css'


function App() {
  return (
    <Canvas id="Canvas" camera={{ far: 200000 }} >
      {/* <InitialAnimation /> */}
      {/* <gridHelper args={[500,500]}/> */}
      {/* <Sky /> */}
      <Stars />
      <ambientLight intensity={0.8} />
      <pointLight position={[0, 100, 0]} intensity={3} color={0xffffff} />
      {/* <GizmoHelper>
        <GizmoViewcube />
      </GizmoHelper> */}
      <ModelLoader />
    </Canvas>
  );
}

export default App;

