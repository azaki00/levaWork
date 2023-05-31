import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function InitialAnimation() {
  const cameraRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    // Define the target position and rotation for the camera animation
    const targetPosition = [0, 0, 5];
    const targetRotation = [0, 0, 0];

    // Define the duration of the camera animation (in milliseconds)
    const animationDuration = 5000;

    // Calculate the increment values for position and rotation based on the difference between current and target values
    const positionIncrement = [
      (targetPosition[0] - camera.position.x) / animationDuration,
      (targetPosition[1] - camera.position.y) / animationDuration,
      (targetPosition[2] - camera.position.z) / animationDuration,
    ];
    const rotationIncrement = [
      (targetRotation[0] - camera.rotation.x) / animationDuration,
      (targetRotation[1] - camera.rotation.y) / animationDuration,
      (targetRotation[2] - camera.rotation.z) / animationDuration,
    ];

    let animationTimeout = null;

    const animateCamera = () => {
      // Update the camera position and rotation incrementally
      camera.position.x += positionIncrement[0];
      camera.position.y += positionIncrement[1];
      camera.position.z += positionIncrement[2];
      camera.rotation.x += rotationIncrement[0];
      camera.rotation.y += rotationIncrement[1];
      camera.rotation.z += rotationIncrement[2];

      // Request the next frame
      animationTimeout = setTimeout(animateCamera, 1);
    };

    // Start the camera animation when the component mounts
    animateCamera();

    // Stop the camera animation after the specified duration
    setTimeout(() => {
      clearTimeout(animationTimeout);
    }, animationDuration);

    // Clean up the animationTimeout when the component unmounts
    return () => {
      clearTimeout(animationTimeout);
    };
  }, [camera]);

  return null; // Since this is a helper component, it doesn't need to render anything
}

export default InitialAnimation