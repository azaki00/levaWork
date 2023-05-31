import React, { useEffect, useState, useRef, forwardRef, useMemo } from 'react';
import { Environment, PerspectiveCamera, OrbitControls, Float } from '@react-three/drei';
import { BackSide, DoubleSide, Raycaster, Vector2, Vector3, Group } from 'three';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { useSpring, a, config } from '@react-spring/three'
import { useControls } from 'leva'
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import CameraModule from './CameraModule'


//Load Map
const Map = forwardRef((props, ref) => {
  const fbx = useLoader(FBXLoader, '/map.fbx');
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

  return <primitive ref={ref} object={fbx} />;
});
//Load Buildings
const Buildings = forwardRef((props, ref) => {
  const fbx = useLoader(FBXLoader, '/buildings.fbx');
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

  return <primitive ref={ref} object={fbx} />;
});
//Load Shield1
const Shield1 = forwardRef((props, ref) => {
  const fbx = useLoader(FBXLoader, '/shield_1.fbx');
  if (fbx) {
    fbx.scale.set(0.02, 0.02, 0.02);
    fbx.traverse((child) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide;
      }
    });
  }
  return <primitive ref={ref} object={fbx} />;
});
//Load Shield2
const Shield2 = forwardRef((props, ref) => {
  const fbx = useLoader(FBXLoader, '/shield_2.fbx');
  if (fbx) {
    fbx.scale.set(0.02, 0.02, 0.02);
    fbx.traverse((child) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide;
      }
    });
  }
  return <primitive ref={ref} object={fbx} />;
});
//Load Shield3
const Shield3 = forwardRef((props, ref) => {
  const fbx = useLoader(FBXLoader, '/shield_3.fbx');
  if (fbx) {
    fbx.scale.set(0.02, 0.02, 0.02);
    fbx.traverse((child) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide;
      }
    });
  }
  return <primitive ref={ref} object={fbx} />;
});

const ModelLoader = () => {
  // const { camera } = useThree(); // Access the camera directly from useThree hook
  // const buildingsRef = useRef();
  // const mapRef = useRef();
  // const shieldRef1 = useRef();
  // const shieldRef2 = useRef();
  // const shieldRef3 = useRef();

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