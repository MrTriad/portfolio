import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelViewer = () => {
  const containerRef = useRef(null);
  const animationMixer = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    const loader = new GLTFLoader();

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    loader.load('./3dModels/deskw.glb', (gltf) => {
      const model = gltf.scene;
      const animations = gltf.animations;
      animationMixer.current = new THREE.AnimationMixer(model);
      animations.forEach((animation) => {
        const action = animationMixer.current.clipAction(animation);
        // Change this to the desired duration of the animation in seconds
        action.setDuration(1);
        action.play();
      });
      scene.add(model);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      if (animationMixer.current) {
        animationMixer.current.update(0.016); // This updates the animation
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ModelViewer;