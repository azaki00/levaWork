import React ,{ useState }from 'react';
import { OrbitControls } from '@react-three/drei';
import CameraModule from './CameraModule'
import Map from './assets/Map';
import Buildings from './assets/Buildings';
import Shield1 from './assets/Shield1';
import Shield2 from './assets/Shield2';
import Shield3 from './assets/Shield3';

const ModelLoader = () => {
  const [cameraView, setCameraView ] = useState(4);
  const setView = (viewIndex) => {
    setCameraView(viewIndex);
  }
  window.addEventListener('keydown', (event) => {
    console.log(event.code);
    if(event.code == "Space"){
      setView(5);
    }
  })

  return (
    <>
      <Buildings />
      <Map />
      <group position={[0,2,0]}>
        <Shield1 setView={() => setView(3)}/>
        <Shield2 setView={() => setView(2)}/>
        <Shield3 setView={() => setView(1)}/>
      </group>
      {/* <OrbitControls /> */}
      <CameraModule setView={() => setView(4)} cameraView={cameraView}/>
    </>
  );
};

export default ModelLoader;