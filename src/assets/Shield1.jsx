import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useRef } from 'react';
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

//Load Shield1
const Shield1 = forwardRef((props, ref) => {
  const shield1Ref = useRef();
  const fbx = useLoader(FBXLoader, './public/Shield_1.fbx');
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

  return (
    <group ref={shield1Ref}>
      <primitive ref={ref} object={fbx} onClick={() => props.setView(1)} />
    </group>
  );
});


export default Shield1