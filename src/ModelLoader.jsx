import React from 'react';
import { OrbitControls } from '@react-three/drei';
import CameraModule from './CameraModule'
import Map from './assets/Map';
import Buildings from './assets/Buildings';
import Shield1 from './assets/Shield1';
import Shield2 from './assets/Shield2';
import Shield3 from './assets/Shield3';

const ModelLoader = () => {

  return (
    <>
      <Buildings />
      <Map />
      <group position={[0,2,0]}>
        <Shield1 />
        <Shield2 />
        <Shield3 />
      </group>
      {/* <OrbitControls /> */}
      <CameraModule />
    </>
  );
};

export default ModelLoader;