import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useRef } from 'react';
import {useLoader} from '@react-three/fiber'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

//Load Shield3
const Shield3 = forwardRef((props, ref) => {
    const shield3Ref = useRef();
    const fbx = useLoader(FBXLoader, './public/Shield_3.fbx');
    if (fbx) {
      fbx.scale.set(0.02, 0.02, 0.02);
      fbx.traverse((child) => {
        if (child.isMesh) {
          child.material.side = THREE.DoubleSide;
          // const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
          // child.material = wireframeMaterial;
        }
      });
    }
  
    return(
        <group ref={shield3Ref}>
         <primitive ref={ref} object={fbx} />
         </group>
    );
  });


export default Shield3