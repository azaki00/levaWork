import React from 'react';
import { useRef } from 'react';
import { Sky,Stars } from'@react-three/drei'
import { Canvas,useThree } from '@react-three/fiber';
import ModelLoader from './ModelLoader'
import './App.css'
import InitialAnimation from './InitialAnimation';


function App() {
  return (
    <Canvas id="Canvas" camera={{ far: 200000 }} >
      <InitialAnimation />
      {/* <gridHelper args={[500,500]}/> */}
      <Sky />
      <Stars />
      <ambientLight intensity={1} />
      <pointLight position={[-200, 100, 0]} intensity={2} color={0xffffff} />
        <ModelLoader />
    </Canvas>
  );
}

export default App;

